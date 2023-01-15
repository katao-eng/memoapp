const service = require('../service')

exports.getAll = async() => {
  try {
    const memos = await service.memo.getAll()
    return memos
  } catch (e) {
    throw e
  }
}
