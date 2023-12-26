const models = require('../../../../../models')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  let data = req.body.data
  const { _id } = data

  if ( !data || !Object.keys(data).length )
    return res.status(404).send('Cannot proceed with request')

  const filter = { _id: !_id ? new mongoose.Types.ObjectId() : _id }
  const options = { new: true, upsert: true }
  delete data._id

  data = { ...data, userId: 1234 }
  
  try {
    const note = await models.Note.findOneAndUpdate(filter, data, options).lean()
    return res.status(200).send(note)
  } catch (error) {
    return res.status(500).send(error)
  }
}