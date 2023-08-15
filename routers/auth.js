const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const { register, login, getById } = require('../controllers/auth');
//uploads file
filename = '';
const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect) => {
        let date = Date.now()
        let fl = date + '.' + file.mimetype.split('/')[1];
        redirect(null, fl);
        filename = fl;
    }
})
const upload = multer({ storage: mystorage })

router.post('/register', upload.any('image'), register);
router.post('/login', login);
router.get('/admin/:id', getById);
router.get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.send(req.user)
});

module.exports = router