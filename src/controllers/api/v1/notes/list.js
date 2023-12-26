const models = require('../../../../../models')

module.exports = async (req, res) => {

  try {
    let notes = await models.Note.find({ userId: 1234 }).lean()
    if ( !notes.length )
      notes = []

    return res.status(200).send({ count: notes.length, rows: notes })
  } catch (error) {
    return res.status(500).send(error)
  }
}