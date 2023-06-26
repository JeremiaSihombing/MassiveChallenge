const { fdb } = require('../config/fdb');

const getAll = (req, res) => {
  const dbRef = fdb.ref('/Artikel');
  
  dbRef.once('value', (snapshot) => {

    res.json(snapshot);
  });
  
}

const getOne = (req, res) => {
  
  const { id } = req.params;
  
  const dbRef = fdb.ref('/Artikel/' + id);

  dbRef.once('value')
    .then((snapshot) => {
      res.json(snapshot);
    })
    .catch((error) => {
      res.json(error);
    });
  
}

const add = async (req, res) => {
  
  const { judul, konten } = req.body
  
  try {
    const newRef = fdb.ref('/Artikel');
    await newRef.push().set({ judul, konten });
    res.json('Artikel berhasil dibuat!')
  } catch (err){
    res.json(err)
  }
  
}

const update = async (req, res) => {
  
  const { id } = req.params
  const { judul, konten } = req.body
  
  try {
    const userRef = fdb.ref(`/Artikel/${id}`);
    await userRef.update({ judul, konten });
    res.json('Data berhasil diperbarui');
  } catch (error) {
    res.status(500).send('Terjadi kesalahan saat memperbarui data');
  }
 
}

const remove = async (req, res) => {
  
  const { id } = req.params
  
  try {
    const ref = fdb.ref(`/Artikel/${id}`);
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