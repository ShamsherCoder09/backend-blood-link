const express = require('express')
const router = express.Router();
const {getOrganizations,updateAvailable} = require('../controllers/organization.controller')

router.post('/getOrganizations',getOrganizations)
router.post('/updateAvailable',updateAvailable)

module.exports = router