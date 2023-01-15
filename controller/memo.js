const usecase = require('../usecase')

exports.getAll = async(req, res, next) => {
  try {
    const memos = await usecase.memo.getAll()
    return res.status(200).send({"memos": memos})
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": "error occured"})
  }
}
