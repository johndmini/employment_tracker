const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 9000;
dotenv.config();

app.use(express.json());
app.use(morgan('dev'));

const allowedDomains = [
  'https://johndemployment-tracker.netlify.app',
  'http://localhost:3000',
];
app.use(
  cors({
    origin: function (origin, callback) {
      // bypass the requests with no origin (like curl requests, mobile apps, etc )
      if (!origin) return callback(null, true);

      if (allowedDomains.indexOf(origin) === -1) {
        const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.get('/', (req, res) => {
  res.send('Test Deployment Success');
});

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://localhost:27017/employeetracker',
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

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
