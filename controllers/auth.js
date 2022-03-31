const {request,response} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
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



const login = async(req, res) => {
    const {name,password} = req.body
     
    const user = await User.findOne({name})
    
    //Comprobar si el user existe
    if (!user) {
        return res.json({
            msg:'Error - name is invalid'
        })
    }

    //Comprobar si las contrasenia es igual
    const comparePassword = bcrypt.compareSync(password,user.password)
    if (!comparePassword) {
        return res.json({
            msg:"Error - password incorrecto"
        })
    }
    
    const secretKey = process.env.JWT_KEY
    const token = jwt.sign({uid:user._id},secretKey, {
        expiresIn:1440
    } )
   
    res.json({
        msg:'Authenticacion correcta',
        token
    })
}


const updateAccount = (req, res) => {
     const {name} = req.params
     
     res.json({
         msg: `Update Account - ${name}`
     })
}
 




//Export your controllers
module.exports = {
 createAccount ,
 login,
 updateAccount
}
