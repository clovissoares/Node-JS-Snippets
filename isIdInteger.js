//Simple id check middleware to avoid wrong user input or unwanted access

function isIdInteger (req, res, next){

  if(Number.isInteger(parseInt(req.params.id, 10))) next();
    
  return res.status(400).json({Error: 'Id must be a integer'});
}

module.exports = isIdInteger;
