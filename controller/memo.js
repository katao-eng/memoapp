const usecase = require('../usecase')

exports.getAll = (req, res, next) => {
  const memos = usecase.memo.getAll()
  return res.status(200).send({"memos": memos})
}