const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
//Your controller of this route
const { createAccount, login, updateAccount} = require('../controllers/auth')
const { ExistsName, NoExistsName } = require('../helpers/validation-db')
const { validationFiels } = require('../middleware/validation-req')



router.post('/signup',[
    check("name",'Name is Empty').not().isEmpty(),
    check("name").custom( ExistsName ),
    check("password",'Password is Empty').not().isEmpty(),
    check("password","Password is very short").isLength({min:6}),
    validationFiels
] ,createAccount)

router.post('/sigin',[
    check("name",'Name is Empty').not().isEmpty(),
    check("password",'Password is Empty').not().isEmpty(),
    validationFiels
], login)

router.put('/:name', updateAccount)




module.exports = router