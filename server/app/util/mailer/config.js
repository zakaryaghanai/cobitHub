const config = {
    host: process.env.COBITHUB_NODEMAILER_HOST,
    port: process.env.COBITHUB_NODEMAILER_PORT,
    secure: true,
    auth: {
        user: process.env.COBITHUB_NODEMAILER_AUTH_USER,
        pass: process.env.COBITHUB_NODEMAILER_AUTH_PASS,
    },
}

const defaults = {
    from: 'CobitHub <cobithub@gamil.com>'
}

module.exports = {
    config,
    defaults
};