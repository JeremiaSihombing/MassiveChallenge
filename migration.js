


const User = require('./models/User');
const Video = require('./models/Video');
const Article = require('./models/Article');



User.sync()
  .then(() => {
    console.log('Tabel users berhasil disinkronkan');
  })
  .catch((error) => {
    console.error('Gagal menyinkronkan tabel users:', error);
  });

Video.sync()
  .then(() => {
    console.log('Tabel video berhasil disinkronkan');
  })
  .catch((error) => {
    console.error('Gagal menyinkronkan tabel video:', error);
  });
  
  Article.sync()
  .then(() => {
    console.log('Tabel artikel berhasil disinkronkan');
  })
  .catch((error) => {
    console.error('Gagal menyinkronkan tabel artikel:', error);
  });
