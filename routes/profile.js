const express = require('express')
const router = express.Router()
//Your controller of this route
const { getProfilePublic } = require('../controllers/profile')


router.get('/:name',getProfilePublic )



module.exports = router