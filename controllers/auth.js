const {request,response} = require('express')

    const getauth = (req=request, res=response) => {
        res.json({
            msg: 'Method - Get'
        })
    }
    
    
    const postauth = (req=request, res=response) => {
        res.json({
            msg: 'Method - Post'
        })
    }
    
    const Putauth = (req=request, res=response) => {
        const {id} = req.params
        res.json({
            msg: 'Method - put'
        })
    }
    
    
    const deleteauth = (req=request, res=response) => {
        const {id} = req.params
        res.json({
            msg: 'Method - Delete'
        })
    }
    
    
    //Export your controllers
    module.exports = {
        
    }