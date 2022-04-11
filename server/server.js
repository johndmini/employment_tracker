const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: 'https://johndemployment-tracker.netlify.app' }));

app.get('/', (req, res) => {
  res.send('Test Deployment Success');
});

mongoose.connect(
  'mongodb+srv://johndmini:1Timothy1_12@employment-tracker.amw5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 'mongodb://localhost:27017/employeetracker',
  console.log('Connected to employee tracker database')
);

app.use('/employees', require('./routes/employeeRoutes'));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ error: err.message });
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(process.env.PORT || 9000, () => {
  console.log('Express server listening on port 9000');
});
