
const initServer = require('./home')
const routesProfile = require('./auth')


module.exports = {
    ...initServer,
    ...routesProfile
}