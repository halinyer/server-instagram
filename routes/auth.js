const express = require('express')
const router = express.Router()
//Your controller of this route
const { createAccount } = require('../controllers/auth')


router.post('/', createAccount)

router.post('/', controllerLogin)



module.exports = router