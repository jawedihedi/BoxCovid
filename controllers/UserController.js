var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const VerifyToken = require('./VerifyToken');
const bcrypt = require('bcryptjs');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('../Models/User');


router.post('/ajout', VerifyToken , function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        email : req.body.email,
        role : "Patient",
        password : hashedPassword,
        nom: req.body.nom,
        prenom: req.body.prenom,
        tel: req.body.tel,
        age: req.body.age,
        Medicin : req.userId
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});


router.get('/Patients', VerifyToken , function (req, res) {
    User.find({Medicin : req.userId}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});


router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("probleme");
        if (!user) return res.status(404).send("pas de user.");
        res.status(200).send(user);
    });
});


router.delete('/:id', function (req, res) {
    User.findByIdAndDelete(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send(user);
    });
});
 
router.put('/:id', function (req, res) {
     let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;
