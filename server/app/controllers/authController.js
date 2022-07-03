const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { sendVerificationEmail } = require("../util/mailer");
const { encrypt, decrypt } = require("../util/crypto");
const { getDomain } = require("../helpers/request");
function signIn(req, res) {
    const { email, password } = req.body;
    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.sendStatus(400);
        }

        user.isValidPassword(password)
            .then(() => {
                const payload = { _id: user._id };
                const accessToken = jwt.sign(
                    payload,
                    process.env.COBITHUB_ACCESS_TOKEN_SECRET,
                    { expiresIn: "1 hour" }
                );

                return res.status(200).json({ accessToken });
            })
            .catch(() => {
                return res.sendStatus(400);
            });
    });
}

function signUp(req, res) {
    const { email, firstName, lastName, password } = req.body;

    // create new User
    User.create({ email, firstName, lastName, password })
        .then((user) => {
            user.sendConfirmationCodeToEmail(req);
            res.sendStatus(200);
        })
        .catch((err) => {
            res.sendStatus(400);
        });
}

function signOut(req, res) {
    return res.sendStatus(200);
}

function verifyUser(req, res) {
    // retrieve confirmation code from request
    const confirmationCode = req.body.confirmationCode;

    // confirmation code is not available
    if (!confirmationCode) {
        return res.sendStatus(403);
    }

    const data = decrypt(confirmationCode);

    // confirmation code broken
    if (!data) {
        return res
            .status(200)
            .send({ statusCode: 5, message: "confirmation code not valid" });
    }

    const { email, expiresAt } = JSON.parse(data);

    // find user assossiated with confirmation code
    User.findOne({ email })
        .then(async function (user) {
            // no user assossiated with confirmation code
            if (!user) {
                return res
                    .status(400)
                    .send({
                        statusCode: 1,
                        message: "user associated with email not found",
                    });
            }

            // user account confirmed
            if (user.isAccountActive()) {
                return res
                    .status(200)
                    .send({ statusCode: 2, message: "user account verified" });
            }

            const currentTime = new Date().getTime();

            // confirmation code expired
            if (currentTime > expiresAt) {
                //new confirmation code has been sent to email
                if (!user.didRequestNewConfirmationCode(confirmationCode)) {
                    user.updateConfirmationCode();
                    user.sendConfirmationCodeToEmail(req);
                }

                return res
                    .status(200)
                    .send({
                        statusCode: 3,
                        message: "new verification code was sent to your email",
                    });
            }

            // set user account to confirmed status
            user.confirmAccount();
            return res
                .status(200)
                .send({
                    statusCode: 4,
                    firstName: user.firstName,
                    message: "confirmation successed",
                });
        })
        .catch(() => {
            return res
                .status(500)
                .send({
                    statusCode: 1000,
                    message: "faild to connect to database",
                });
        });
}

// 1m-learningpath-345::vP2_GhcfEEXG0DkHaEu-Bg

module.exports = {
    signIn,
    signUp,
    signOut,
    verifyUser,
};
