const User = require('../model/user')
//AUTH

const isValidName = async( name ) => {
  const existName = await User.findOne({name})
  if ( existName ) {
      throw new Error("Name in use")
  }

  return true
}

module.exports = {
    isValidName
}