const express = require('express')
const { initServer} = require('../controllers')
const router = express.Router()


router.get('/',initServer)

module.exports = router