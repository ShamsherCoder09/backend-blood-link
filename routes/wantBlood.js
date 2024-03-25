const express = require('express')
const router = express.Router();
const {getOrganizations} = require('../controllers/wantBlood.controller')

router.post('/getOrganizations',getOrganizations)

module.exports = router