const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { hash } = require("../util/dcrypt");
const { encrypt } = require('../util/crypto')
const { getConfirmationEmailData } = require('../util/mailer/templates/confirmationEmail')
const { sendVerificationEmail } = require('../util/mailer')

const userSchema = Schema({
        email: {type: String, required: true, unique: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        password: {type: String, required: true},
        confirmationCode: {type: String, required: false},
        isActive: {type: Boolean, required: true, default: false},

    },
    {
        timestamps: true
    });

userSchema.methods.generateConfimationCode = function () {
    let currentDate = new Date();
    currentDate.setSeconds(currentDate.getSeconds() + (30 * 60));
    const data = {
        email : this.email,
        expiresAt: currentDate.getTime()
    }

    return encrypt(JSON.stringify(data));
}

userSchema.methods.getUserConfimationCode = function () {
    return this.confirmationCode;
}

userSchema.methods.sendConfirmationCodeToEmail = function (req) {
    const confirmationCode = this.getUserConfimationCode()
    const link = req.protocol + '://' + req.get('host') + '/auth/confirmation/confirmationCode/' + confirmationCode;
    const data = getConfirmationEmailData(this,link)

    sendVerificationEmail(this, data)
}

userSchema.methods.isAccountActive = function () {
    return this.isActive
}

userSchema.methods.confirmAccount = async function () {
    this.confirmationCode = ''
    this.isActive = true
    this.save();
}

userSchema.methods.updateConfirmationCode = async function () {
    this.confirmationCode = this.generateConfimationCode()
    this.save()
}

userSchema.methods.didRequestNewConfirmationCode = function (oldConfirmationCode) {
    return this.confirmationCode !== oldConfirmationCode
}

userSchema.pre('save', async function(next) {

    if (this.isNew) {
        this.password = await hash(this.password)
        this.confirmationCode = this.generateConfimationCode()
    }

    next()
})

// check if given pass matching the stored pass
userSchema.methods.isValidPassword = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password).then((isValid) => {
            if(isValid) {
                resolve(isValid)
            }
            reject(isValid)
        })
    });
}

module.exports = mongoose.model('User', userSchema)