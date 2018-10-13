const db = require('../db.js');

module.exports = {
  createUser: (req, res) => {
    const { username, password, email } = req.body;
    db.any('INSERT INTO userinfo(key, username, password, email) VALUES (uuid_generate_v4(), $1, $2, $3);', [username, password, email])
    .then((data) => {
    // success;
      console.log('Sucess.');
      // console.log(data);
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
      console.log('Sucess.');
    })
    .catch((error) => {
    // error;
      console.log(error);
    });
  },
  getListing: (req, res) => {
    db.any('SELECT * FROM listing;')
    .then((data) => {
    // success;
      console.log('Sucess.');
      res.json(data);
    })
    .catch((error) => {
    // error;
      console.log(error);
      res.sendStatus(404);
    });
  },
  postListing: (req, res) => {
    const { uid, title, brand, condition, size, price, imgurl } = req.body;
    db.any('INSERT INTO listing(key, uid, title, brand, condition, size, price, imgurl, listdate) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, now());', [uid, title, brand, condition, size, price, imgurl])
    .then((data) => {
    // success;
      console.log('Sucess.');
    })
    .catch((error) => {
    // error;
      console.log(error);
    });
  },
  filterByBrand: (req, res) => {
    const { brand } = req.params;
    db.any('SELECT * FROM listing WHERE brand = $1;', [brand])
    .then((data) => {
      // success;
      console.log('Sucess.');
    })
    .catch((error) => {
      // error;
      console.log(error);
    });
  },
  filterByCondition: (req, res) => {
    const { condition } = req.params;
    db.any('SELECT * FROM listing WHERE condition = $1;', [condition])
    .then((data) => {
      // success;
      console.log('Sucess.');
    })
    .catch((error) => {
      // error;
      console.log(error);
    });
  },
  filterByUser: (req, res) => {
    const { uid } = req.params;
    db.any('SELECT * FROM listing WHERE uid = $1;', [uid])
    .then((data) => {
      // success;
      console.log('Sucess.');
    })
    .catch((error) => {
      // error;
      console.log(error);
    });
  }
}