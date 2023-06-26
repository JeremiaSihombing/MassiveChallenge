const express = require('express');
const router = express.Router();
const multer = require('multer');

const AuthController = require('./controllers/AuthController');
const VideoController = require('./controllers/VideoController');
const ArtikelController = require('./controllers/ArtikelController');

const User = require('./controllers/UserController');

const CommunityController = require('./controllers/CommunityController');

const cek = require('./middleware/TokenMiddleware');






router.post('/user', User.add)
router.get('/user', User.getAll)







router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Inisialisasi multer upload
const upload = multer({ storage });

// POST /video
router.post('/video/upload', upload.single('video'), (req, res) => {
  // Ambil data dari body request
  const { judul, deskripsi } = req.body;
  const videoPath = req.file.path;

  // Panggil fungsi untuk menyimpan video
  VideoController.saveVideo(judul, deskripsi, videoPath);

  // Kirim respon sukses
  res.status(200).json({ message: 'Video berhasil disimpan.' });
});

router.get('/video', VideoController.getAll);

router.get('/video/:id', VideoController.getOne);

router.post('/video/', VideoController.add);

router.put('/video/:id', VideoController.update);

router.delete('/video/:id', VideoController.remove);

router.get('/artikel', ArtikelController.getAll);

router.get('/artikel/:id', ArtikelController.getOne);

router.post('/artikel', ArtikelController.add);

router.put('/artikel/:id', ArtikelController.update);

router.delete('/artikel/:id', ArtikelController.remove);

router.get('/community', CommunityController.getAll);

router.get('/community/:id', CommunityController.getOne);

router.post('/community', CommunityController.add);

router.put('/community/:id', CommunityController.update);

router.delete('/community/:id', CommunityController.remove);



module.exports = router;
