const {request,response} = require('express')
const { default: mongoose } = require('mongoose')
const Post = require('../model/Post')
const User = require('../model/user')


    const getPost = async(req=request, res=response) => {
        const post = await Post.find({}).
        populate({
            path:'user',
            select:'name image'
        })
        res.json({
            post
        })
    }

    const getOnePost = async(req=request, res=response) => {
        const {postid} = req.params
        const post = await Post.findById(postid)

        res.json({
            post
        })
    }
    
    
    const createPost = async(req=request, res=response) => {
        const {img,description,like=0} = req.body
        //Buscar usuario para actualizar SU post
        const user = await User.findById(req.uid )

        const modelPost = new Post({
            _id:new mongoose.mongo.ObjectId(),
            img,
            description,
            like
        })

        try {
           let data =  await Post.newPost(user,modelPost)
           res.json({
               msj:'Success post',
               post: data
           })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg:'error - create post'
            })
        }
    }


    
    const updatePost = (req=request, res=response) => {
        const {id} = req.params
        res.json({
            msg: 'Method - put'
        })
    }
    
    
    const deletePost = (req=request, res=response) => {
        const {id} = req.params
        res.json({
            msg: 'Method - Delete'
        })
    }
    
    
    //Export your controllers
    module.exports = {
        getPost,
        getOnePost,
        createPost,
        updatePost,
        deletePost
    }