const express = require('express')
const app = express()
const port = 9000
const routes = require('./routes/index')
const db = require('./config/db')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use(routes)



app.listen(port, () => {
  console.log(`Server is Running On ${port}`)
})