const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    name:{
       type:String,
       required:true,
       lowercase:true
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
      ref:'User'
    }],
    following:[{
      type: Schema.Types.ObjectId,
      ref:'User'
    }]
})



//Esto es solo de prueba
userSchema.virtual('greet').get(function () {
  return `Hola mi nombre es ${this.name}`
})

userSchema.methods.toJSON = function () {
   let {password, private,follower,following, ...rest} = this.toObject()

   return {
      ...rest,
      following: following.length,
      follower: follower.length
   }
}

module.exports = model('User', userSchema)