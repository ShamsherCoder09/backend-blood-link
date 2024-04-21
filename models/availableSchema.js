const mongoose = require('mongoose');

const availableSchema = new mongoose.Schema({
    "organizationName": {
        type: String,
        required: true,
    },
    "A+": {
        type: String,
        required: true,
    },
    "AB+": {
        type: String,
        required: true,
    },
    "AB-": {
        type: String,
        required: true,
    },
    "B+": {
        type: String,
        required: true,
    },
    "O+": {
        type: String,
        required: true,
    },
    "O-": {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('availableBlood', availableSchema);
