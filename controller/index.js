const express = require('express')
const memo = require('./memo')

exports.memo = () => {
  const router = express.Router()
  router.get('/', memo.getAll)
  router.post('/', memo.create)
  router.patch('/:id', memo.update)
  return router
}