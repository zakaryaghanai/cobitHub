require('dotenv').config()
const cryptoJS = require("crypto-js")
const {encode, decode} = require("html-entities");

function encrypt(text) {
    let encrypted = cryptoJS.AES.encrypt(text, process.env.COBITHUB_CRYPTO_SECRET_KEY).toString();
    return encode(encrypted,  {mode: 'extensive'})
}

function decrypt(ciphertext) {
    let decrypted = ''
    const bytes  = cryptoJS.AES.decrypt(decode(ciphertext), process.env.COBITHUB_CRYPTO_SECRET_KEY);
    try {
        decrypted = bytes.toString(cryptoJS.enc.Utf8)
    }catch (err) {
        decrypted = false
    }
    return decrypted
}

module.exports = {
    encrypt,
    decrypt
}