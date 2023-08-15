const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userschema = new schema({
    firstname: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    lastname: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    image: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Ce champs est obligatoire'],
    },
    password: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    role: {
        type: String,
        Enumerator: ['admin', 'client'],
        default: "client",
    }
}, {
    timestamps: true, versionKey: false

})

module.exports = mongoose.model('User', userschema)