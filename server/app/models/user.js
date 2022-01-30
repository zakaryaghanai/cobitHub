const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { hash } = require("../util/bcrypt_util");

const userSchema = Schema({
        email: {type: String, required: true, unique: true},
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at',}
    });

userSchema.pre('save', function(next) {
    hash(this.password).then(hash => {
        this.password = hash;
        next();
    });
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

module.exports = mongoose.model('User', userSchema);