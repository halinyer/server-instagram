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
    save:{
      type: Schema.Types.ObjectId,
      ref:''
    },
    followers:{
       type:Number
    }, 
    following:{
         type:Number
    }
})


module.exports = model('User', userSchema)