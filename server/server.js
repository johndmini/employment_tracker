const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
  'mongodb://localhost:27017/employeetracker',
  console.log('Connected to employee tracker database')
);

app.use('/employees', require('./routes/employeeRoutes'));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ error: err.message });
});

app.listen(process.env.PORT || 9000, () => {
  console.log('Express server listening on port 9000');
});
