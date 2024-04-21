const express = require('express')
const {tempData} = require('../controllers/index')
const router = express.Router();
const organization = require('./organization')
const userRoute = require('./userRoutes')
router.get('/api/array',tempData)
router.use('/api',userRoute)
router.use('/api',organization)

module.exports = router;