const express = require('express')
const memo = require('./memo')

exports.memo = () => {
  const router = express.Router()
  router.get('/', memo.getAll)
  return router
}