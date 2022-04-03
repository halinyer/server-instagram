const {request,response} = require('express')

const getResources = (req=request, res=response) => {
        res.json({
            post:    'http://localhost:8083/api/post',
            profile: 'http://localhost:8083/api/profile/${name - user}',
            auth:    'http://localhost:8083/api/auth'
        })
}
    
   
    
//Export your controllers
module.exports = {
    getResources
}