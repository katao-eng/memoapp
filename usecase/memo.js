const service = require('../service')

exports.getAll = () => {
  const memos = service.memo.getAll()
  return memos
}
