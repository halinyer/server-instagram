const User = require('../model/user')
//AUTH

const ExistsName = async( name ) => {
  const existName = await User.findOne({name})
  if ( existName ) {
      throw new Error("Name in use")
  }

  return true
}


const NoExistsName = async( name ) => {
  const existName = await User.findOne({name})
  if ( !existName ) {
      throw new Error("Error - name no existe")
  }

  return true
}



module.exports = {
    ExistsName,
    NoExistsName
}