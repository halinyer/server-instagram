const {request,response} = require('express')
const User = require('../model/user')
const Follow = require('../model/follow')


const getProfilePublic = async(req, res) => {
    const {name} = req.params

    try {
      const profile = await User.findOne({name})

      
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



const followUser = async(req, res) => {
   const {userid} = req.params

 
   const NewFollow = new Follow({
    following:req.uid,
    follower:`${userid}`
   })

   try {
      let {_id} = await NewFollow.save()
      console.log(_id)

     let [fan,user] =  await Promise.all([
           User.findByIdAndUpdate(userid),
           User.findByIdAndUpdate(req.uid)
      ]).catch(err => {
          console.log(err)
         res.json({
           msg:'error in promise follo user'
         })
      })

      fan.following.push(_id)
      user.following.push(_id)


        await Promise.all([
        fan.save(),
        user.save()
   ]).catch(err => {
       console.log(err)
      res.json({
        msg:'error in promise2 follo user'
      })
   })
      res.json({
        msg:`Sigue a este user`
      })
   } catch (error) {
     console.log(error)
       res.json({
         msg:'error  follo user'
       })
   }
 
 
 
}
//Export your controllers
module.exports = {
  getProfilePublic,
  updateProfile,
  followUser
}