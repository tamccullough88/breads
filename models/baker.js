// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./breads')

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String,
    status: {
        type: String,
        default: "Employed",
        enum: ['Employed', 'Quit', 'Fired', 'Layed Off']
    }
}, {toJSON: {virtuals: true}})



// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

//Helper method
bakerSchema.methods.updateStatusTo = async (status) => {
}

//Hooks
bakerSchema.post('deleteOne', { document: true, query: false }, async function () {
    console.log('running pre deleteOne')
    const { deletedCount } = await Bread.deleteMany({ baker: this._id})
}

)


// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
