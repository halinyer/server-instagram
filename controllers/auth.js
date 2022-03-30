const bcrypt = require('bcryptjs')
const {request,response} = require('express')
const User = require('../model/user')


const createAccount = async(req=request, res=response) => {
    const {name,password,...rest} = req.body
    

    //Encryptar password
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    

    let newUser = new User({
        name:name, 
        password:hash,
        ...rest
    })

    try {
        await newUser.save()

        res.status(201).json({
           msg:"New account create"
        })

    } catch (error) {
        console.log(error)

        res.status(400).json({
            msg:"Error - createUser"
        })
    }
    
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
