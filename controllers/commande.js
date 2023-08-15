
const Commande = require('../models/commande');
const Livre = require('../models/livre');


// API pour passer une commande et Diminuer les quantite des produits
exports.createCommande = async (req, res) => {
    try {
        let obj = {
            client: req.user._id,
            Livres: req.body,
        }

        await Commande.create(obj)

        res.status(201).json('Commande');
    } catch (error) {
        res.status(500).json({ error: ' server error' });
    }
};
// API pour  la liste des commandes
exports.Listcommande = async (req, res) => {
    try {
        const commandes = await Commande.find().populate('Livres').populate('client');
        res.json(commandes);
    } catch (error) {
        res.status(500).json({ error: ' server error' });
    }
};
// API pour  les details d'une commande
exports.detailscommande = async (req, res) => {
    try {
        const commande = await Commande.findById(req.params.id).populate('Livres').populate('client');
        if (commande) {
            res.json(commande);
        } else {
            res.status(404).json({ error: 'Commande not found' });
        }
    } catch (error) {
        res.status(500).json({ error: ' server  error' });
    }
};
exports.deletecommande = async (req, res) => {

    try {
        Deletecommande = await Commande.findByIdAndDelete({ _id: req.params.id })
        res.status(200).send(Deletecommande)

    } catch (error) {
        res.status(400).send(error)

    }
}


