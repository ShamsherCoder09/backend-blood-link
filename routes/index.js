const express = require('express')
const {tempData} = require('../controllers/index')
const router = express.Router();

router.get('/api/array',tempData)

module.exports = router;