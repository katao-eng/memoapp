const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const controller = require('./controller')

app.use(express.json())

app.use(morgan('common'))

app.use('/memo', controller.memo())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
