const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(express.json())

app.use(morgan('common'))

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
