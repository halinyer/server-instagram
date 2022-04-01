const express = require('express')
const router = express.Router()
//Your controller of this route
const { } = require('../controllers')
const { getPost, publicPost, updatePost, deletePost } = require('../controllers/post')


router.get('/', getPost)

router.post('/', publicPost )

router.put('/', updatePost)

router.delete('/', deletePost)


module.exports = router