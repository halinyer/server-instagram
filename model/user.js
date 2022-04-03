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
      ref:'Follow'
    }],
    following:[{
      type: Schema.Types.ObjectId,
      ref:'Follow'
    }]
})

//Esto es solo de prueba
userSchema.virtual('greet').get(function () {
  return `Hola mi nombre es ${this.name}`
})

userSchema.methods.toJSON = function () {
   let {password, private,follower,following, ...rest} = this.toObject()

   return {
      ...rest
   }
}

module.exports = model('User', userSchema)