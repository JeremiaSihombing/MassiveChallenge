const { admin, fdb } = require('../config/fdb');

const login = (req, res) => {
  const { email, password } = req.body;

  return admin
    .auth()
    .getUserByEmail(email)
    .then((user) => {
      // Login berhasil, periksa apakah pengguna merupakan admin
      const adminRef = fdb.ref('Admin').child(user.uid);

      return adminRef
        .once('value')
        .then((snapshot) => {
          const isAdmin = snapshot.val() !== null;

          if (isAdmin) {
            // Pengguna merupakan admin, dapatkan akses token
            return admin.auth().createCustomToken(user.uid)
              .then((accessToken) => {
                // Simpan akses token di Firebase Realtime Database
                return adminRef
                  .set({ email, accessToken }) // Menggunakan email sebagai kunci
                  .then(() => {
                    // Login admin berhasil dan data token tersimpan
                    res.json({pesan: 'Login berhasil', token: accessToken});
                    return true;
                  })
                  .catch((error) => {
                    console.error('Error saving tokens:', error);
                    throw new Error('Failed to save tokens');
                  });
              })
              .catch((error) => {
                console.error('Error creating custom token:', error);
                throw new Error('Failed to create custom token');
              });
          } else {
            // Pengguna bukan admin, kembalikan pesan error
            res.json('Akun tidak ditemukan');
            return false; // Mengembalikan false sebagai penanda login gagal
          }
        })
        .catch((error) => {
          console.error('Error fetching admin data:', error);
          throw new Error('Failed to fetch admin data');
        });
    })
    .catch((error) => {
      console.error('Error logging in:', error);
      throw new Error('Login failed');
    });
};

const logout = (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json('Token akses tidak tersedia'); // Unauthorized jika token tidak ada
  }

  const adminRef = fdb.ref('Admin');
  const query = adminRef.orderByChild('accessToken').equalTo(token);

  return query
    .once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        // Logout admin, hapus token akses dari Firebase Realtime Database
        const adminId = Object.keys(snapshot.val())[0]; // Mengambil ID admin pertama yang cocok dengan email
        const adminToUpdateRef = adminRef.child(adminId);
        
        return adminToUpdateRef
          .update({ accessToken: null }) // Menghapus nilai token akses dengan mengubahnya menjadi null
          .then(() => {
            // Logout berhasil, hapus sesi admin dari frontend atau lakukan tindakan lain yang diperlukan
            res.json('Logout berhasil');
            return true;
          })
          .catch((error) => {
            console.error('Error removing access token:', error);
            throw new Error('Failed to remove access token');
          });
      } else {
        // Admin tidak ditemukan, kembalikan pesan error
        res.json('Admin tidak ditemukan');
        return false; // Mengembalikan false sebagai penanda logout gagal
      }
    })
    .catch((error) => {
      console.error('Error fetching admin data:', error);
      throw new Error('Failed to fetch admin data');
    });
};

module.exports = {
  login,
  logout,
};
