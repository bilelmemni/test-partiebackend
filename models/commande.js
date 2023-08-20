const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommandeSchema = new Schema({
    Livres: [],
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Commande', CommandeSchema)