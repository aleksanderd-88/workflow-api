const router = require('express').Router()
const controllers = require('../controllers')

// Notes
module.exports = router.get('/api/v1/notes/:id/get', controllers.notes.get)
module.exports = router.patch('/api/v1/notes/update', controllers.notes.update)
module.exports = router.get('/api/v1/notes/list', controllers.notes.list)
module.exports = router.delete('/api/v1/notes/:id/delete', controllers.notes._delete)