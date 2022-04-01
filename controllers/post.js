const {request,response} = require('express')

    const getPost = (req=request, res=response) => {
        res.json({
            msg: 'Method - Get'
        })
    }
    
    
    const publicPost = (req=request, res=response) => {
        res.json({
            msg: 'Method - Post'
        })
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
        publicPost,
        updatePost,
        deletePost
    }