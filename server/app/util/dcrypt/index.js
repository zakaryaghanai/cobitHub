const index = require('bcrypt');

function hash(data) {
    return new Promise(((resolve, reject) => {
        index.genSalt(10, (err, salt) => {
            if(err) {
                reject(err)
            }
            index.hash(data, salt, (err, hash) => {
                if(err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    }))
}

module.exports.hash = hash