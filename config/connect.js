const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connection to database successful'))
.catch(error => console.log('Failed to connect to database, reason >>>', error))

module.exports = mongoose