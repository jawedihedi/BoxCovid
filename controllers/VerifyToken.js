const jwt = require('jsonwebtoken');
const User = require('../Models/User');

function verifyToken(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send('nooooon!!!!....');


  if(req.headers.authorization && req.headers.authorization.split(' ')[0]==='Bearer'){
   
    let token= req.headers.authorization.split(' ')[1];
    jwt.verify(token,'secret', function(err, decoded) {
    console.log(decoded);
    if (err)
    return res.status(500).send({ auth: false, message: 'token non valide' });
    
    req.userId = decoded.id;
    req.user = User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("error : user");
      if (user) return  user;
  })

    next();
    });
   }
  else
  {
    return res.status(401).send('noooo.');
  }
}
module.exports = verifyToken;
