const express = require('express')
const router = express.Router();
const {getOrganizations,updateAvailable,getAvailableBlood} = require('../controllers/organization.controller')

router.post('/getOrganizations',getOrganizations)
router.post('/updateAvailable',updateAvailable)
router.post('/getAvailableBlood',getAvailableBlood)

module.exports = router