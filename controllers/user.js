const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        data = req.body;
        admin = await User.findOne({ email: data.email })
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
        auth = new User(data);
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

exports.getuser = async (req, res) => {
    try {
        users = await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.updateuser = async (req, res) => {
    try {
        myid = req.params.id;
        newdata = req.body;
        newdata.image = filename
        update = await User.findOneAndUpdate({ _id: myid }, newdata)
        filename = ''
        res.status(200).send(update)
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.deleteuser = async (req, res) => {
    try {
        deletee = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(deletee)
    } catch (error) {
        res.status(500).send(error)
    }
}