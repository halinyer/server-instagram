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
    followers:{
       type:Number
    }, 
    following:{
         type:Number
    }
})

userSchema.methods.toJSON = function () {
   let {password, private, ...rest} = this.toObject()

   return rest
}

module.exports = model('User', userSchema)