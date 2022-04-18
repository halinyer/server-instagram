const express = require('express')
const router = express.Router()
const User = require('../model/user')
//Your controller of this route
const { getProfilePublic, updateProfile, followUser } = require('../controllers/profile')
const { validJWT } = require('../middleware/valid-jwt')


router.get('/:name',getProfilePublic )

router.put("/:id", validJWT,async(req, res) =>{
    const {id} = req.params
    try {
       let user = await User.findById(id)
       user.follower.push(req.uid)
       await user.save()
       res.json({msg: `AHora sigues a ${user.name}`})
    } catch (error) {
        res.json({msg:'Error en seguir'})
        console.log(error)
    }
    
})

router.put("/",validJWT,updateProfile)




module.exports = router