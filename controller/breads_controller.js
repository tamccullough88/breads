const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads')

breads.get('/', (req,res) => {
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
    })
})

// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = 'true'
    } else {
      req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })
  

  // NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

  

//Show
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread:Bread[req.params.arrayIndex]
    })
    } else {
    res.render('Error')
    }
})




module.exports = breads

