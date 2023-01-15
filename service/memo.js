const model = require('../model')

exports.getAll = async() => {
  try {
    const memos = await model.memo.find({}) || []
    return memos
  } catch (e) {
    throw e
  }
}
