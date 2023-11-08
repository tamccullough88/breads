const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads')
const Baker = require('../models/baker.js')




//index route
breads.get('/', (req,res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.find()
        .then(foundBreads => {
          res.render('index', {
            breads: foundBreads,
            bakers: foundBakers,
            title: 'Index Page'
          })
      console.log(foundBreads)
    })
  })

})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
        }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })
  
  

  // NEW
breads.get('/new', (req, res) => {
  Baker.find()
    .then(foundBakers => {
        res.render('new', {
          bakers: foundBakers
        })

    })
})

//edit page
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
        Bread.findById(req.params.id)
          .then(foundBread => {
            res.render('edit', {
                bread: foundBread, 
                bakers: foundBakers 
            })
          })
    })
})


  
// show path
breads.get('/:id', async (req, res) => {
        const bread = await Bread.findById(req.params.id)
        await bread.populate('baker', 'name')
        const bakedBy = bread.getBakedBy();
        console.log(bakedBy)
        res.render('show', { bread, id : req.params.id })
        console.log(bread)
      })

// Edit put
breads.put('/:id', async (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  await Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
  res.redirect(`/breads/${req.params.id}`) 
})

  

// DELETE
breads.delete('/:id', async (req, res) => {
  const id = req.params.id;
    await Bread.findByIdAndDelete(id);
        res.status(303).redirect('/breads')
});





module.exports = breads

