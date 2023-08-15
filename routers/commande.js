const express = require('express')
const router = express.Router()
const { createCommande, Listcommande, detailscommande, deletecommande } = require('../controllers/commande')
const passport = require('passport')


// API commande , liste commande et detaid commande
router.post('/Commande', passport.authenticate('bearer', { session: false }), createCommande)
router.get('/Commande', passport.authenticate('bearer', { session: false }), Listcommande)
router.delete('/Commande/:id', passport.authenticate('bearer', { session: false }), deletecommande)
router.get('/Commande/:id', passport.authenticate('bearer', { session: false }), detailscommande)






module.exports = router