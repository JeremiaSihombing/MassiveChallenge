const { admin, fdb } = require('../config/fdb');
 
const add = async (req, res) => {
 // const { email, password } = req.body;

const { email, password, role } = req.body







  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });

    const updatedUserRecord = await admin.auth().updateUser(userRecord.uid, {
      email: email,
      emailVerified: true,
      password: password,
    });

    const uid = updatedUserRecord.uid;
    
    if (role === 'admin') {

    // Cek apakah tabel "Admin" sudah ada
    const adminRef = fdb.ref('/Admin');
    const adminSnapshot = await adminRef.once('value');
    const adminData = adminSnapshot.val();

    if (!adminData) {
      // Tabel "Admin" belum ada, buat tabel baru
      await adminRef.set({});
    }

    const newAdminRef = adminRef.child(uid);
    const adminData1 = {
      email: email,
      // tambahkan informasi lain yang perlu disimpan
    };

    await newAdminRef.set(adminData1);

    res.json({ message: 'Akun admin berhasil dibuat!' });
    }
    res.json({ message: 'Akun user berhasil dibuat!' });
  } catch (error) {
    res.status(500).json({ error: 'Error menyimpan akun: ' + error });
  }
};






const getAll = async (req, res) => {
  try {
    // Ambil data UID admin dari Realtime Database
    const snapshot = await fdb.ref('/Admin').once('value');
    const adminUIDs = snapshot.val();

    // Dapatkan daftar pengguna dari Firebase Authentication
    const userRecords = await admin.auth().listUsers();
    const users = userRecords.users.filter((user) => {
      // Periksa apakah UID pengguna ada dalam tabel admin
      return !adminUIDs[user.uid];
    }).map((user) => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
      // tambahkan properti lain yang ingin Anda ambil dari data akun
    }));

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
}





module.exports = {
  add,
  getAll
};


