const { fdb } = require('../config/fdb');

const getAll = (req, res) => {
  const dbRef = fdb.ref('/Community');
  
  dbRef.once('value', (snapshot) => {
    // const data = snapshot.val();
    res.json(snapshot);
  });
  
}

const getOne = (req, res) => {
  
  const { id } = req.params;
  
  const dbRef = fdb.ref('/Community/' + id);

  dbRef.once('value')
    .then((snapshot) => {
      res.json(snapshot);
    })
    .catch((error) => {
      res.json(error);
    });
  
}




const add = async (req, res) => {
  
    const { foto, nama, deskripsi } = req.body;
    const anggota = [];
    
    const data = { foto, nama, deskripsi, anggota };
    
  try {
    const newRef = fdb.ref('/Community');
    await newRef.push().set(data);
    res.json('Data berhasil dibuat!');
  } catch (err) {
    res.json('Error: ' + err);
  }
};





const update = async (req, res) => {
  
  const { id } = req.params
  const { judul, konten } = req.body
  
  try {
    const userRef = fdb.ref(`/Community/${id}`);
    await userRef.update({ judul, konten });
    res.json('Data berhasil diperbarui');
  } catch (error) {
    res.status(500).send('Terjadi kesalahan saat memperbarui data');
  }
 
}

const remove = async (req, res) => {
  
  const { id } = req.params
  
  try {
    const ref = fdb.ref(`/Community/${id}`);
    await ref.remove();
    res.json('Data berhasil dihapus');
  } catch (error) {
    res.status(500).send('Terjadi kesalahan saat menghapus data');
  }
  
}

module.exports = {
  getAll,
  getOne,
  add,
  update,
  remove
}