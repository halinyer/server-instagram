const express = require('express')
const router = express.Router()
//Your controller of this route
const { getResources } = require('../controllers/home')


router.get('/info', getResources)


module.exports = router