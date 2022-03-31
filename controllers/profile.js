const {request,response} = require('express')
const User = require('../model/user')


const getProfilePublic = async(req, res) => {
    const {name} = req.params
    const profile = await User.findOne({name, private:false})  
    
    
    res.json({
     profile
    })
 }
    

const updateProfile = async(req, res) => {
   const userToUpdate = await User.findById(req.uid)

   res.json({
     msg:"User a modify",
     userToUpdate
   })
} 
//Export your controllers
module.exports = {
  getProfilePublic,
  updateProfile    
}