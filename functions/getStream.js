require("dotenv").config();
const request = require("request");
module.exports = (url, accessToken, callback) => {
  const options = {
      url: process.env.GET_STREAM,
      method: "GET",
      headers: {
          "Client-ID": process.env.CLIENT_ID,
          "Authorization": "Bearer " + accessToken
      },
   
  };
  request.get(options, (err, res, body) => {
      if (err) {
          return console.log(err);
      }
      console.log("Stream status: " + res.statusCode);
      // console.log(JSON.parse(body));
      
      callback(res);
  });
};

