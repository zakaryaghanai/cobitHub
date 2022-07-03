function getDomain(req) {
    return req.protocol + '://' + req.get('host');
}

module.exports = {
    getDomain
}