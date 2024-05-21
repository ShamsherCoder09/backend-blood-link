const express = require('express');
const {addFormData} = require('../controllers/bloodNeederForm');
const router = express.Router();
router.post('/bloodNeederForms',addFormData)

module.exports = router