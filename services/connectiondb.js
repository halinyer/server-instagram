const mongoose = require('mongoose')


async function connectionDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb connect')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectionDB