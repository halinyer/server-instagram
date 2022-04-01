const {request,response} = require('express')
const User = require('../model/user')



const getProfilePublic = async(req, res) => {
    const {name} = req.params

    try {
      const profile = await User.findOne({name})
      .populate({
        path:'post',

        select:'img like',
        operDocumentLimit: 12
      })

      
      res.json({
       profile
      })
    } catch (error) {
      console.log(error)
      res.json({
        msg:'error get profile'
      })
    }
    
 }
    

const updateProfile = async(req, res) => {
   const {name,password,followers,following,...rest} = req.body
   const userToUpdate = await User.findByIdAndUpdate(req.uid,rest)

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