const axios = require("axios")

module.exports = class Untappd {
    constructor(baseURL, clientId, clientSecret) {
        this.baseURL = baseURL
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.api = axios.create({
            baseURL
        })
    }

    call(method, callback) {
        this.api.get(method, {
                params: {
                    client_id: this.clientId,
                    client_secret: this.clientSecret
                }
            })
            .then((res) => callback(res, null))
            .catch((e) => callback(null, e))
    }
}
