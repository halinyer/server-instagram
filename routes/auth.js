const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
//Your controller of this route
const { createAccount, login, updateAccount, getProfilePublic } = require('../controllers/auth')
const { validationFiels } = require('../middleware/validation-req')

router.get('/:name', getProfilePublic)

router.post('/signup',[
    check("name",'Name is Empty').isEmpty(),
    check("password",'Password is Empty').isEmpty(),
    validationFiels
] ,createAccount)

router.post('/sigin', login)

router.put('/:name', updateAccount)




module.exports = router