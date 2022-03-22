const {request,response} = require('express')

const initServer = (req=request, res=response) => {
    res.json({
        msg: 'Create your res-api'
    })
}


module.exports = {
    initServer
}