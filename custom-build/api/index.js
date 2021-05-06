const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const orders = require('./routes/orders')
const meals = require('./routes/meals')
const auth = require('./routes/auth')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })



app.use('/api/Orders', orders)
app.use('/api/Meals', meals)
app.use('/api/auth', auth)
module.exports = app
