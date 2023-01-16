const usecase = require('../usecase')

exports.getAll = async(req, res, next) => {
  try {
    const memos = await usecase.memo.getAll()
    return res.status(200).send({"memos": memos})
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": "error occured"})
  }
}

exports.create = async(req, res, next) => {
  // メッセージの取得
  const message = req.body.message ?? ""
  // メモの完了状態の取得
  const checked = req.body.checked ?? false

  try {
    await usecase.memo.create(message, checked)
    return res.status(200).send({})
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": "error occured"})
  }
}

exports.update = async(req, res, next) => {
  const id = req.params.id
  const checked = req.body.checked
  try {
    await usecase.memo.update(id, checked)
    return res.status(200).send({})
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": "error occured"})
  }
}