const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    name:{
       type:String,
       required:true
    },
    password:{
      type:String,
      required:true
    },
    description:{
      type:String
    
    },
    image:{
      type:String
     
    },
    post:[{
      type: Schema.Types.ObjectId,
      ref:'Post'
    }],
    private:{
      type:Boolean,
      default:false
    },
    follower:[{
      type: Schema.Types.ObjectId,
      ref:'Follow'
    }],
    following:[{
      type: Schema.Types.ObjectId,
      ref:'Follow'
    }]
})

userSchema.methods.toJSON = function () {
   let {password, private,follower,following, ...rest} = this.toObject()

   return {
      ...rest,
      follower:follower.length,
      following:following.length

   }
}

module.exports = model('User', userSchema)