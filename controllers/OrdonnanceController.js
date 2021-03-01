var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var ordonnance = require('../Models/ordonnance');


router.post('/create/:id', VerifyToken , function (req, res) {
    ordonnance.create({
        Patient : req.params.id,
        Medicin : req.userId,
        Medicaments : req.body.medicament
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});


router.get('/:id', VerifyToken , function (req, res) {
    ordonnance.find({Patient : req.params.id}, function (err, ordonnance) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(ordonnance);
    });
});




router.delete('/:id', function (req, res) {
    ordonnance.findByIdAndDelete(req.params.id, function (err, ordonnance) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send(ordonnance);
    });
});
 


module.exports = router;
