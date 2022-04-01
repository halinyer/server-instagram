const express = require('express')
const router = express.Router()
//Your controller of this route
const { getProfilePublic, updateProfile, followUser } = require('../controllers/profile')
const { validJWT } = require('../middleware/valid-jwt')


router.get('/:name',getProfilePublic )

router.put("/",validJWT,updateProfile)




module.exports = router