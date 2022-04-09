const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
})

module.exports = mongoose.model('Employee', employeeSchema);