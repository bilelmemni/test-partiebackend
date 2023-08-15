const express = require('express');
const passport = require('passport');
const authRole = require('../midllwere/verfiyuser')
const multer = require('multer');
const router = express.Router();
const { getuser, deleteuser, updateuser, register, login } = require('../controllers/user');

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

router.post('/reg', upload.any('image'), register);
router.post('/log', login);
router.get('/user', passport.authenticate('bearer', { session: false }), getuser);
router.put('/user/:id', upload.any('image'), passport.authenticate('bearer', { session: false }), updateuser);
router.delete('/user/:id', passport.authenticate('bearer', { session: false }), deleteuser);



module.exports = router