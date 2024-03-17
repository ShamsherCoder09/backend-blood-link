const express = require('express')
const {tempData} = require('../controllers/index')
const router = express.Router();
const userRoute = require('./userRoutes')
router.get('/api/array',tempData)
router.use('/api',userRoute)

module.exports = router;