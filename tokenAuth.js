//Simple token authentication using JsonWebToken
const jwt = require('jsonwebtoken');

function tokenAuth (req, res, next){
    const token = req.headers['x-access-token'];
  
    //Verifing token existence 
    if (!token) return res.status(401).send({ auth: false, error: 'Token not found.'});
    
    //Getting secret environment variable for decoding
    const secret = process.env.JWT_SECRET_KEY;

    //Authenticating token
    jwt.verify(token, secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, error: 'Token is not valid.'});
      
      //Passing token variables
      req.userId = decoded.id;
      req.permission = decoded.permission;
      
      next();
    });
}

module.exports = tokenAuth;
