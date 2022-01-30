const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){
    const authHeader = req.headers.authorization;
    const Bearer = authHeader && authHeader.split(' ')[0];
    const token = authHeader && authHeader.split(' ')[1];

    if(Bearer !== 'Bearer' || !token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.COBITHUB_ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    })
}

module.exports = {
    authenticateToken
}