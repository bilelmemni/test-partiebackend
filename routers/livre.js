const express = require('express');
const router = express.Router();
const passport = require('passport');
const authRole = require('../midllwere/verfiyuser')
const { addlivre, getall, getlivresbycategory, getByIdlivre, deletelivre, updatelivre } = require('../controllers/livre');


//uploads file
const multer = require('multer');
filename = '';
const mystorage = multer.diskStorage({
    destination: './uploadfile',
    filename: (req, file, redirect) => {
        let date = Date.now()
        let fl = date + '.' + file.mimetype.split('/')[1];
        redirect(null, fl);
        filename = fl;
    }
})
const upload = multer({ storage: mystorage })

//CRUD PRODUIT
router.post('/livre', upload.any('file'), passport.authenticate('bearer', { session: false }), authRole("admin"), addlivre);
router.get('/livre', passport.authenticate('bearer', { session: false }), authRole("admin", "client"), getall);
router.get('/livre/:id', passport.authenticate('bearer', { session: false }), authRole("admin", "client"), getByIdlivre);
router.delete('/livre/:id', passport.authenticate('bearer', { session: false }), authRole("admin"), deletelivre);
router.put('/livre/:id', upload.any('file'), passport.authenticate('bearer', { session: false }), updatelivre);
router.get('/getProductsbycategory/:id', passport.authenticate('bearer', { session: false }), getlivresbycategory);







module.exports = router