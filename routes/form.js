const express = require('express');
const {addFormData,getAllNeederForms} = require('../controllers/bloodNeederForm');
const router = express.Router();
router.post('/bloodNeederForms',addFormData)
router.get('/allNeederForms',getAllNeederForms)

module.exports = router