//Simple permission check to use in conjunct with the TokenAuth.js middleware.

function permissionCheck (req, res, next){
    permissionType = 'admin';
    if(req.permission === permissionType) next();
    else return res.status(403).json(error:`Only ${permissionType} route`);
}

module.exports = permissionCheck; 
