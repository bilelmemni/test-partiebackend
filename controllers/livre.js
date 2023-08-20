const Livre = require('../models/livre')
const Categorie = require('../models/categorie')



exports.addlivre = async (req, res) => {
    try {
        data = req.body;
        console.log(data);
        livre = new Livre(data);
        livre.File = filename
        savelivre = await livre.save()
        filename = ''
        const updatecategorie = await Categorie.find({ name: req.body.categorie })
        const updated = await Categorie.findByIdAndUpdate(updatecategorie, { $push: { livres: savelivre._id } })
        res.status(200).send(savelivre)

    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getall = async (req, res) => {
    try {
        produits = await Livre.find()
        res.status(200).send(produits)
    } catch (error) {
        res.status(400).send(error)
    }

}

exports.getByIdlivre = async (req, res) => {
    try {
        myid = req.params.id;
        livre = await Livre.findById({ _id: myid })
        res.status(200).send(livre)
    } catch (error) {
        res.status(400).send(error)
    }

}

exports.deletelivre = async (req, res) => {
    try {
        myid = req.params.id;
        deletee = await Livre.findOneAndDelete({ _id: myid })
        res.status(200).send(deletee)
    } catch (error) {
        res.status(400).send(error)
    }

}
exports.updatelivre = async (req, res) => {
    try {
        myid = req.params.id;
        newdata = req.body;
        newdata.File = filename
        update = await Livre.findOneAndUpdate({ _id: myid }, newdata)
        filename = ''
        res.status(200).send(update)
    } catch (error) {
        res.status(400).send(error)
    }

}
exports.getlivresbycategory = async (req, res) => {
    try {
        myid = req.params.id;
        livre = await Livre.find({ categorie: myid })
        res.status(200).send(livre)
    } catch (error) {
        res.status(400).send(error)
    }

}

const monthlyQuota = 5;
let downloadsLeft = monthlyQuota;


exports.downloadBook = (req, res) => {
    if (downloadsLeft > 0) {
        downloadsLeft--;
        monthlyQuota - 1
        res.json({ message: 'Download successful.' });
    } else {
        res.status(403).json({ message: ' downloads reached max 5 downloads in one month' });
    }
};



// function resetDownloads each beginning of the month
function resetDownloads() {
    downloadsLeft = monthlyQuota;
}
const interval = 30 * 24 * 60 * 60;
setInterval(resetDownloads, interval);