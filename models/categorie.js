const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorieSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    livres: [{
        type: Schema.Types.ObjectId,
        ref: 'Livre'
    }],

}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('categorie', CategorieSchema)