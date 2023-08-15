const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommandeSchema = new Schema({
    Livres: [],
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },

}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Commande', CommandeSchema)