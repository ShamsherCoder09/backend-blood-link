const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index')
app.use(routes)

app.listen(port, () => {
  console.log(`Server is Running On ${port}`)
})