var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var rapport = require('../Models/Rapport');


router.post('/create/:id', VerifyToken , function (req, res) {
    rapport.create({
        Patient : req.params.id,
        Medicin : req.userId,
        descpription : req.body.descpription
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});


router.get('/:id', VerifyToken , function (req, res) {
    rapport.find({Patient : req.params.id}, function (err, rapport) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(rapport);
    });
});




router.delete('/:id', function (req, res) {
    rapport.findByIdAndDelete(req.params.id, function (err, rapport) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send(rapport);
    });
});
 


module.exports = router;