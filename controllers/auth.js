const Auth = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.login = async (req, res) => {
    try {
        data = req.body;
        admin = await Auth.findOne({ email: data.email })
        if (admin) {
            valpassword = bcrypt.compareSync(data.password, admin.password)
            if (valpassword) {
                data = {
                    _id: admin._id
                }
                token = jwt.sign(data, 'Secret', { expiresIn: '1d' })
                res.status(200).send({ mytoken: token })
            } else {
                res.status(400).send('email or password invalid')
            }
        } else {
            res.status(404).send('email or password incorrect')
        }

    } catch (error) {
        res.status(500).send(error)
    }
}


exports.register = async (req, res) => {
    try {
        data = req.body;
        auth = new Auth(data);
        auth.image = filename
        salt = bcrypt.genSaltSync(10)
        auth.password = bcrypt.hashSync(data.password, salt)
        saveauthor = await auth.save()
        filename = '';
        res.status(200).send(saveauthor)

    } catch (error) {
        res.status(500).send(error)
    }
}
exports.getById = async (req, res) => {
    try {
        myid = req.params.id
        auuth = await Auth.findOne({ _id: myid })
        res.status(200).send(auuth)

    } catch (error) {
        res.status(500).send(error)
    }


}