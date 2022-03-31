require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectionDB = require('../services/connectiondb')

class Server {
  constructor(){
    this.app  = express()
    this.port = process.env.PORT
    
    this.paths = {
        profile: '/api/profile/',
        auth:    '/api/auth/'
    }

    this.connectDB()

    this.middleware()

    this.routes()
  }


  async connectDB(){
     //Connect DB
     await connectionDB()
  }

  middleware(){
     //Aplication-level middleware
     this.app.use(cors())
     this.app.use(express.json())
  }


  routes(){
     //Router-level middleware
     this.app.use(this.paths.auth, require('../routes/auth'))
     this.app.use(this.paths.profile, require('../routes/profile'))

  }


  listen(){
    this.app.listen(this.port,()=>{
      console.log(`Server runing on port ${this.port}`)
    })
  }
}


module.exports = Server