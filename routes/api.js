const express = require('express')
const { initApi} = require('../controllers')
const router = express.Router()


router.get('/',initApi)

module.exports = router