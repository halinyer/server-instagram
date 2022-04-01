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
    },
    like:{
        type:Number
    }
})


postSchema.statics.newPost = async function (user, post) {
  
    //Ref model post to user
    post.user = user._id
    //Ref model user to post
    user.post.push(post._id)
  
   try {
      const [{name}, {_doc}]= await Promise.all([
        user.save(),
        post.save()
      ])

      return {
        user: {
            name
        },
       ..._doc
      }
   } catch (error) {
       return error
   }
    
    // return Promise.all([post.save(), user.save()]).then()
     
  }

module.exports = model('Post', postSchema)