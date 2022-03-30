const {request,response} = require('express')

const createAccount = (req=request, res=response) => {
    const {name,password,} = req.body
    res.json({
        name,
        password
    })
}



const login = () => {

}

    
//Export your controllers
module.exports = {
 createAccount      
}