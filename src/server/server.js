const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/userController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.post('/signup', userController.createUser);
app.post('/login', userController.getUser);
app.get('/listing', userController.getListing);
app.post('/listing', userController.postListing);
app.get('/filterbybrand/:brand', userController.filterByBrand);
app.get('/filterbycondition/:condition', userController.filterByCondition);
app.get('/filterbyuser/:uid', userController.filterByUser);
app.use(express.static(__dirname + '/../../dist'));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
})