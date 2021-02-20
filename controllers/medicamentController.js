var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var medicment = require('../Models/medicament');


router.post('/create', function (req, res) {
    medicment.create({
        name : req.body.name,
        duree : req.body.duree,
        quantite : req.body.quantite
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});


router.get('/',  function (req, res) {
    medicment.find({}, function (err, medicment) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(medicment);
    });
});




router.delete('/:id', function (req, res) {
    medicment.findByIdAndDelete(req.params.id, function (err, medicment) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send(medicment);
    });
});
 


module.exports = router;