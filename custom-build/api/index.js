const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const orders = require('./routes/orders')
const meals = require('./routes/meals')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })



app.use('/api/Orders', orders)
app.use('/api/Meals', meals)
module.exports = app
