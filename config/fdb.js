const admin = require('firebase-admin');

const serviceAccount = require('./firebase.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://exless-455f4-default-rtdb.firebaseio.com'
});


const fdb = admin.database();

module.exports = {
  admin,
  fdb
};
