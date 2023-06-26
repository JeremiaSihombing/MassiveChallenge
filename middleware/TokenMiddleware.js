const { admin } = require('../config/fdb');

const cekToken = (req, res, next) => {
  const token = req.headers.authorization; // Ambil token dari header Authorization

  if (!token) {
    return res.status(401).json('Token akses tidak tersedia'); // Unauthorized jika token tidak ada
  }

  const adminRef = admin.database().ref('Admin').orderByChild('accessToken').equalTo(token);

  adminRef.once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        // Token valid, lanjutkan ke rute berikutnya
        req.user = snapshot.val()[0]; // Menyimpan informasi pengguna dari snapshot di req.user
        next();
      } else {
        return res.status(401).json('Token akses tidak valid'); // Unauthorized jika token tidak valid
      }
    })
    .catch((error) => {
      console.error('Error verifying access token:', error);
      return res.status(500).json('Terjadi kesalahan dalam memverifikasi token'); // Internal Server Error jika terjadi kesalahan
    });
};

module.exports = {
  cekToken
}