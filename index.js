const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("some stuff", {
        type: "STREAMING",
        url: "https://www.twitch.tv/just_fero_",
    });
});

client.login(process.env.CLIENT_TOKEN);
