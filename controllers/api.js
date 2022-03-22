const {request,response} = require('express')

const initApi = (req=request, res=response) => {
    res.json({
        msg: 'init of api'
    })
}


module.exports = {
    initApi
}