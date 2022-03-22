const express = require('express')

class Server {
  constructor(){
    this.app  = express()
    this.port = 8082
    this.paths = {
        home: '/',
        api:  '/api'
    }

    this.connectDB()

    this.middleware()

    this.routes()
  }


  connectDB(){

  }

  middleware(){
      this.app.use(express.json())
  }


  routes(){
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