const express = require('express')
const app = express()
const port = 9000
const routes = require('./routes/index')
const db = require('./config/db')
app.use(routes)

app.listen(port, () => {
  console.log(`Server is Running On ${port}`)
})