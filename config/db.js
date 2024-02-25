const mongoose = require('mongoose')
const db = mongoose.connection


mongoose.connect('mongodb://localhost:27017/')
.then(() => console.log("Database Connected SuccesFully"))
.catch((err) => console.log("error in Db ",err))


module.exports = db