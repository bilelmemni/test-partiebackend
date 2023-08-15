const Categorie = require('../models/categorie')




exports.addcategorie = async (req, res) => {
    try {
        const data = await Categorie.create(req.body)
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getall = async (req, res) => {
    try {

        const category = await Categorie.find().populate('livres')
        res.status(200).send(category)

    } catch (error) {
        res.status(400).send(error)

    }
}
exports.getbyId = async (req, res) => {
    try {
        myid = req.params.id;
        const categorybiId = await Categorie.findById({ _id: myid }).populate('livres')
        res.status(200).send(categorybiId)


    } catch (error) {
        res.status(400).send(error)

    }
}
exports.updatecategory = async (req, res) => {
    try {
        const update = await Categorie.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send(update)
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.deletecategory = async (req, res) => {
    try {
        const deletee = await Categorie.findByIdAndDelete(req.params.id)
        res.send(deletee)
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.findproductsbycategorie = async (req, res) => {

    try {
        const data = await Categorie.findById(req.params.id).populate('livres')
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)

    }

}