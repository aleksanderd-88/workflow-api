const models = require('../../../../../models')

module.exports = async (req, res) => {
  const id = req.params.id
  if ( !id )
    return res.status(404).send('Id is missing')

  try {
    const note = await models.Note.findById(id).lean()
    if ( !note )
      return res.status(404).send(`Could not find note with id ${ id }`)

    return res.status(200).send(note)
  } catch (error) {
    return res.status(500).send(error)
  }
}