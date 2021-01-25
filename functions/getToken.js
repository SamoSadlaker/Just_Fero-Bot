require("dotenv").config();
const request = require("request");
module.exports = (url, callback) => {
    const options = {
        url: process.env.GET_TOKEN,
        json: true,
        body: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: "client_credentials",
        },
    };

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log("Twitch api status: " + res.statusCode);
        // console.log(body);

        callback(res);
    });
};
