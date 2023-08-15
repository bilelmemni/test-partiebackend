const express = require('express');
const passport = require('passport');
const authRole = require('../midllwere/verfiyuser');
const router = express.Router();
const { addcategorie, getbyId, getall, updatecategory, deletecategory, findproductsbycategorie } = require('../controllers/categorie');

router.post('/Categorie', passport.authenticate('bearer', { session: false }), addcategorie)
router.get('/Categorie', passport.authenticate('bearer', { session: false }), authRole("admin", "client"), getall)
router.get('/Categorie/:id', passport.authenticate('bearer', { session: false }), authRole("admin", "client"), getbyId)
router.put('/Categorie/:id', passport.authenticate('bearer', { session: false }), authRole("admin"), updatecategory)
router.delete('/Categorie/:id', passport.authenticate('bearer', { session: false }), authRole("admin"), deletecategory)
router.get('/Categorie/getproducts/:id', findproductsbycategorie)

module.exports = router