function getConfirmationEmailData(user, link) {
    const subject = `Hello ${user.firstName},`
    const html = `
        <div>
            <p>Thank you for joining CobitHub.</p>
            <p>We'd like to confirm that your account was created successfully. To access CobitHub click the link below.</p>
            <a href="${link}">click here</a>
            <p>If you experience any issues logging into your account, reach out to us at cobithub@gmail.com.</p>
            <br/>
            <p>Best,</p>
            <p>The CobitHub team</p>
        </div>`

    return {
        subject,
        html
    }
}

module.exports = {
    getConfirmationEmailData
}

