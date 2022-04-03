const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')
//Your controller of this route
const { getPost, updatePost, deletePost, createPost, getOnePost } = require('../controllers/post')
const { validJWT } = require('../middleware/valid-jwt')
const { validationFiels } = require('../middleware/validation-req')


router.get('/', getPost)

router.get('/:postid', getOnePost)


router.post('/',[ 
    validJWT
], createPost)

router.put('/:id',[
   
] ,updatePost)

router.delete('/:id', deletePost)


module.exports = router
