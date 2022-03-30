const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
//Your controller of this route
const { createAccount, login, updateAccount, getProfilePublic } = require('../controllers/auth')
const { isValidName } = require('../helpers/validation-db')
const { validationFiels } = require('../middleware/validation-req')

router.get('/:name', getProfilePublic)

router.post('/signup',[
    check("name",'Name is Empty').not().isEmpty(),
    check("name").custom( isValidName ),
    check("password",'Password is Empty').not().isEmpty(),
    check("password","Password is very short").isLength({min:6}),
    validationFiels
] ,createAccount)

router.post('/sigin', login)

router.put('/:name', updateAccount)




module.exports = router