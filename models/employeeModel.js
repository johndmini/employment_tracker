const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: Schema.Types.Mixed,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    department: {
        type: String,
    },
    address: {
        type: Schema.Types.Mixed,
    },
    emergencyContactFirstName: {
        type: String,
    },
    emergencyContactLastName: {
        type: String,
    },
    emergencyContactPhone: {
        type: Number,
    },
    emergencyContactEmail: {
        type: Schema.Types.Mixed,
    },
    emergencyContactAddress: {
        type: Schema.Types.Mixed,
    },
    emergencyContactRelationship: {
        type: String,
    }
})

module.exports = mongoose.model('Employee', employeeSchema);