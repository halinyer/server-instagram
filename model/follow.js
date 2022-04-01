const {Schema,model} = require('mongoose')

const followSchema = new Schema({
    following:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    follower:{
      type:Schema.Types.ObjectId,
      ref:'User'
    }
})



module.exports = model('Follow', followSchema)