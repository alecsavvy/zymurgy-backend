const express = require("express")
const _ = require("lodash")
const Zymurgy = require("./zymurgy/api")
const Untappd = require("./untappd/api")
const {
    untappdBaseUrl,
    untappdClientId,
    untappdClientSecret
} = require("./config")

const app = express()

const untappdApi = new Untappd(untappdBaseUrl, untappdClientId, untappdClientSecret)
untappdApi.call("user/info/alecsavvy", (res, err) => {
    if (err != null) {
        console.log(err)
        return;
    }
    console.log(_.get(res, "data"))
});
