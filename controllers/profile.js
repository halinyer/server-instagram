const {request,response} = require('express')
const User = require('../model/user')


const getProfilePublic = async(req, res) => {
    const {name} = req.params
    const profile = await User.findOne({name, private:false})  
    
    
    res.json({
     profile
    })
 }
    
//Export your controllers
module.exports = {
  getProfilePublic        
}