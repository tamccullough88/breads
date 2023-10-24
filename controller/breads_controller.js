const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads')

breads.get('/', (req,res) => {
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
    })
})

breads.get('/:index', (req,res) => {
    const index = req.params.index
    if (index > Bread.length - 1) {
        res.send("No Such Bread")
    }
    const bread = Bread[index]
    res.send(bread)
})


module.exports = breads