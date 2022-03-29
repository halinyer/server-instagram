require('dotenv').config()
const express = require('express')

class Server {
  constructor(){
    this.app  = express()
    this.port = process.env.PORT
    
    this.paths = {
        home: '/',
        api:  '/api'
    }

    this.connectDB()

    this.middleware()

    this.routes()
  }


  connectDB(){
     //Connect DB
  }

  middleware(){
     //Aplication-level middleware
     this.app.use(express.json())
  }


  routes(){
     //Router-level middleware
     this.app.use(this.paths.home, require('../routes/home'))
     this.app.use(this.paths.api, require('../routes/api'))

  }


  listen(){
    this.app.listen(this.port,()=>{
      console.log(`Server runing on port ${this.port}`)
    })
  }
}


module.exports = Server