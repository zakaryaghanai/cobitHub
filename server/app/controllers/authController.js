const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

function signIn(req, res) {
    const {email, password} = req.body;
    UserModel.findOne({email}).then(user => {
        if(!user) {
            return res.sendStatus(400);
        }

        user.isValidPassword(password).then(() => {
            const payload = { _id: user._id }
            const accessToken = jwt.sign(payload, process.env.COBITHUB_ACCESS_TOKEN_SECRET, {expiresIn: '1 hour'});

            return res.status(200).json({accessToken});
        }).catch(() => {
            return res.sendStatus(400);
        });

    })

}

function signUp(req, res) {
    const {email, firstName, lastName, password, confirmPassword} = req.body;

    // check if password and confirmPassword are identical
    if (password !== confirmPassword) {
        res.sendStatus(400);
    }

    // create new User
    const newUser = new UserModel({email, first_name: firstName, last_name:lastName, password});
    newUser.save()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(400));

}

function signOut(req, res) {
    return res.sendStatus(200);
}

module.exports = {
    signIn,
    signUp,
    signOut
}