const express = require('express')
const router = express.Router()
//Your controller of this route
const { createAccount, login, updateAccount, getProfilePublic } = require('../controllers/auth')

router.get('/:name', getProfilePublic)

router.post('/signup', createAccount)

router.post('/sigin', login)

router.put('/:name', updateAccount)




module.exports = router