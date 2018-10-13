require('dotenv').config();

const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    // console.log('Connected to database:', cp.database);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    // console.log('Disconnecting from database:', cp.database);
  },
  query(e) {
    // console.log('QUERY:', e.query);
  },
  receive(data, result, e) {
    // console.log('DATA: ', data);
  },
};

const pgp = require('pg-promise')(initOptions);

const db = pgp(process.env.SQL_URL);

module.exports = db;

// UUID.
// db.any('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log('Error.');
//   });

// Create table.
// db.any('CREATE TABLE userinfo(uid SERIAL PRIMARY KEY, key VARCHAR(200), username VARCHAR(200), password VARCHAR(200), email VARCHAR(200));')
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Insert into userinfo.
// db.any('INSERT INTO userinfo(key, username, password, email) VALUES (uuid_generate_v4(), $1, $2, $3);', ['pgk', 'hashedit', 'me@hotmail.com'])
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Select from userinfo.
// db.any('SELECT * FROM userinfo;')
//   .then((data) => {
//   // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Create listing table.
// db.any('CREATE TABLE listing(lid SERIAL PRIMARY KEY, key VARCHAR(255), uid INTEGER REFERENCES "userinfo", title VARCHAR(255), brand VARCHAR(255), condition VARCHAR(255), size VARCHAR(255), price REAL, imgurl VARCHAR(255));')
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Insert into listing.
// db.any('INSERT INTO listing(key, uid, title, brand, condition, size, price, imgurl, listdate) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, now());', ['1', 'Best shoe.', 'Converse', 'New', '10', 100.00, 'www.url.com'])
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Select all listings.
// db.any('SELECT * FROM listing;')
//   .then((data) => {
//   // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Select by brand.
// db.any('SELECT * FROM listing WHERE brand = $1;', ['Converse'])
//   .then((data) => {
//     // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//     // error;
//     console.log(error);
//   });

// Select by condition.
// db.any('SELECT * FROM listing WHERE condition = $1;', ['Converse'])
//   .then((data) => {
//     // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//     // error;
//     console.log(error);
//   });

// Select by user.
// db.any('SELECT * FROM listing WHERE user = $1;', ['Converse'])
//   .then((data) => {
//     // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//     // error;
//     console.log(error);
//   });

// Create usermessage table.
// db.any('CREATE TABLE usermessage(umid SERIAL PRIMARY KEY, key VARCHAR(255), uid INTEGER REFERENCES "userinfo", senderid INTEGER REFERENCES "userinfo", message VARCHAR(255));')
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Insert into usermessage.
// db.any('INSERT INTO usermessage(key, uid, senderid, message, senddate) VALUES (uuid_generate_v4(), $1, $2, $3, now());', ['1', '1', 'Let me buy your stuff.'])
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Select all usermessage by uid.
// db.any('SELECT * FROM usermessage WHERE uid = $1;', [1])
//   .then((data) => {
//     // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//     // error;
//     console.log(error);
//   });

// Create listingcomment table.
// db.any('CREATE TABLE listingcomment(lcid SERIAL PRIMARY KEY, key VARCHAR(255), lid INTEGER REFERENCES "listing", posterid INTEGER REFERENCES "userinfo", comment VARCHAR(255));')
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Insert into listingcomment.
// db.any('INSERT INTO listingcomment(key, lid, posterid, comment, commentDate) VALUES (uuid_generate_v4(), $1, $2, $3, now());', ['1', '1', 'Cool shoes.'])
//   .then((data) => {
//   // success;
//     console.log('Sucess.');
//   })
//   .catch((error) => {
//   // error;
//     console.log(error);
//   });

// Select from listingcomment by lid.
// db.any('SELECT * FROM listingcomment WHERE lid = $1;', [1])
//   .then((data) => {
//     // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//     // error;
//     console.log(error);
//   });

// Alter listing table.
// db.any('ALTER TABLE listing ADD COLUMN imgurl VARCHAR(255);')
//   .then((data) => {
//     // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//     // error;
//     console.log(error);
//   });

// db.any('ALTER TABLE listing ADD COLUMN listdate DATE;')
//   .then((data) => {
//     // success;
//     console.log('Sucess.', data);
//   })
//   .catch((error) => {
//     // error;
//     console.log(error);
//   });

// export const db = pgp(process.env.SQL_URL);
