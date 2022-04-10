const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
})

module.exports = mongoose.model('Employee', employeeSchema);