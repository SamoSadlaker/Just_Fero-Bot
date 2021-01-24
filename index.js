const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus("available");
    client.user.setPresence({
        game: {
            name: "with depression",
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat",
        },
    });
});

client.login(process.env.CLIENT_TOKEN);
