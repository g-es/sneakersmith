const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/userController.js');
const parser = require('./cloudinary.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', userController.createUser);
app.post('/login', userController.getUser);
app.get('/listing', userController.getListing);
app.post('/listing', userController.postListing);
app.get('/filterbyBrand/:brand', userController.filterByBrand);
app.get('/filterbyCondition/:condition', userController.filterByCondition);
app.get('/filterbyuser/:uid', userController.filterByUser);
app.get('/filterbySize/:size', userController.filterBySize);
app.post('/images', parser.single('image'), userController.imageParser);
app.get('/categories/:filter', userController.getCategories);
app.use(express.static(`${__dirname }/../../dist`));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
});

