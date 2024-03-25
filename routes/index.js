const express = require('express')
const {tempData} = require('../controllers/index')
const router = express.Router();
const wantBlood = require('./wantBlood')
const userRoute = require('./userRoutes')
router.get('/api/array',tempData)
router.use('/api',userRoute)
router.use('/api',wantBlood)

module.exports = router;