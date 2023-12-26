const express = require('express')
const app = express()
const port = process.env.PORT || 1234
const cors = require('cors')
const routes = require('./src/routes')

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen(port, () => console.log(`Server started on port >>> ${ port }`))