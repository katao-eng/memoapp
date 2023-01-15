const model = require('../model')
const mongoose = require('mongoose')

exports.getAll = async() => {
  try {
    const memos = await model.memo.find({}) || []
    return memos
  } catch (e) {
    throw e
  }
}

exports.create = async(message, checked) => {
  try {
    await model.memo.create(
      {
        _id: mongoose.Types.ObjectId(),
        message,
        checked,
      }
    )
    return
  } catch (e) {
    throw e
  }
}