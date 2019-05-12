const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    untappdClientId: process.env.UNTAPPD_CLIENT_ID,
    untappdClientSecret: process.env.UNTAPPD_CLIENT_SECRET,
    untappdBaseUrl: process.env.UNTAPPD_BASE_URL
}
