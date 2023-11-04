// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))





// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controller/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.render('Error')
})


// LISTEN

const start = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('connected to database')
  app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
}

start();
