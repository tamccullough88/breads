// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')


// localhost:3003/bakers/data/seed
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// Index: 
baker.get('/', async (req, res) => {
const bakers = await Baker.find()
await bakers.populate(bakers, { path: 'breads'})
res.send(bakers)
})                    

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})




// export
module.exports = baker                    
