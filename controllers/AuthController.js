const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const VerifyToken = require('./VerifyToken');



router.post('/register', function(req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({

      email : req.body.email,
      role : req.body.role,
      password : hashedPassword,
      nom: req.body.nom,
      prenom: req.body.prenom,
      tel: req.body.tel,
      age: req.body.age
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      res.status(200).send(user);
    });
  });

  
router.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');

    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
     let payload = { id: user._id , role:user.role, email : user.email };
    var token = jwt.sign(payload, 'secret', {
      expiresIn: 86400 
    });
    res.status(200).send({ auth: true, token: token });
  });
});

router.get('/profile', VerifyToken, function(req, res, next) {

  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");

    res.status(200).send(user);
  });
});

  router.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
  });



module.exports = router;
