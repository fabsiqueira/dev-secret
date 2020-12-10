const mongoose = require('mongoose')

let conn = null

const URI = 'mongodb+srv://secret:NmD1SZxruMx7VCVS@cluster0.6012r.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
    if(!conn){
        conn = mongoose.connect(URI, {
            userNewUrlParser: true,
            useCreateIndex: true,
        })
        await conn
    }
}