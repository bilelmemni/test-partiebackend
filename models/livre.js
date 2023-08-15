const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const livreSchema = new Schema({
    categorie: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Title: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Author: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Description: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    File: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    }


}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Livre', livreSchema)