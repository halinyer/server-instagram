const {Schema,model} = require('mongoose')


const postSchema = new Schema({
    user:{
       type:Schema.Types.ObjectId,
       ref:'User'
    },
    img:{
        type:String
    },
    description:{
       type:String
    }
})

module.exports = model('Post', postSchema)