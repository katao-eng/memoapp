const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const mongoose = require('mongoose')
const controller = require('./controller')

app.use(express.json())

app.use(morgan('common'))

mongoose.connect('mongodb://localhost:27017/memoApp', { useNewUrlParser: true, useUnifiedTopology: true })

// ルーティング
app.use('/memo', controller.memo())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
