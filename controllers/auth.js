const {request,response} = require('express')


const createAccount = (req=request, res=response) => {
    const {name,password,} = req.body
    res.json({
        name,
        password
    })
}



const login = (req, res) => {
    res.json("Seccion iniciada")
}


const updateAccount = (req, res) => {
     const {name} = req.params
     
     res.json({
         msg: `Update Account - ${name}`
     })
}
 


const getProfilePublic = (req, res) => {
   const {name} = req.params
   res.json({
       msg:`All profile ${name}`
   })
}


//Export your controllers
module.exports = {
 createAccount ,
 login,
 updateAccount,
 getProfilePublic
}
