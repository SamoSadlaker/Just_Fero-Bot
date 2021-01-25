const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = process.env.PREFIX;
const getToken = require("./functions/getToken");

var accessToken = "";

client.on("ready", () => {
    getToken(process.env.GET_TOKEN, (res) => {
        accessToken = res.body.access_token;
        return accessToken;
    });
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("some stuff", {
        type: "STREAMING",
        url: "https://www.twitch.tv/just_fero_",
    });
});

client.login(process.env.CLIENT_TOKEN);
