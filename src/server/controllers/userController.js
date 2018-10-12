const db = require('../db.js');

module.exports = {
  createUser: (req, res) => {
    db.any('INSERT INTO userinfo(key, username, password, email) VALUES (uuid_generate_v4(), $1, $2, $3);', ['pgk', 'hashedit', 'me@hotmail.com'])
    .then((data) => {
    // success;
      console.log('Sucess.');

    })
    .catch((error) => {
    // error;
      console.log(error);
    });
  },
  getUser: (req, res) => {
    db.any('SELECT * FROM userinfo;')
    .then((data) => {
    // success;
      console.log('Sucess.', data);
    })
    .catch((error) => {
    // error;
      console.log(error);
    });
  },
  getListing: (req, res) => {
    
  },
  postListing: (req, res) => {

  },
  filterByBrand: (req, res) => {

  }
}