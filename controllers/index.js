
const initServer = require('./home')
const initApi = require('./api')


module.exports = {
    ...initServer,
    ...initApi
}