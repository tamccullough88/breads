// dependencies
const express = require('express')
const router = express.Router()
const Bakers = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')


// localhost:3003/bakers/data/seed
router.get('/data/seed', (req, res) => {
    Bakers.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// Index: 
router.get('/', async (req, res) => {
const bakers = await Bakers.find()
await bakers.populate(bakers, { path: 'breads'})
res.send(bakers)
})                    

// Show: 
router.get('/:id', (req, res) => {
    Bakers.findById(req.params.id)
        .populate({
            path: 'breads',
            options: {limit: 4}
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})







//Delete Route
router.delete('/:id', async (req,res) => {
    const index = req.params.id;
    const baker = await Bakers.findById(index)
    await baker.deleteOne()
    res.redirect('/breads')
})


// export
module.exports = router                    
