const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
require("dotenv").config();

// Command Prefix
const prefix = process.env.PREFIX;
// Get Twticha api token
const getToken = require("./functions/getToken");
const getStream = require("./functions/getStream");
const getMembers = require("./functions/getMembers");

// Reactions
const rulesReaction = require("./reactions/rules");

const welcomeEmbed = require("./embeds/welcome");
const leaveEmbed = require("./embeds/leave");
const rulesEmbed = require("./embeds/rules");
const request = require("request");

var accessToken = "";



client.on("ready", () => {
    getToken(process.env.GET_TOKEN, (res) => {
        accessToken = res.body.access_token;
        return accessToken;
    });
    setTimeout(() => {
        getStream(process.env.GET_STREAM, accessToken, (response) => {
            console.log(JSON.parse(response.body))

        })
    }, 1000);
    console.log(`Logged in as ${client.user.tag}!`);
    // client.user.setActivity("some stuff", {
    //     type: "STREAMING",
    //     url: "https://www.twitch.tv/just_fero_",
    // });
    client.user.setActivity("command !help", { type: "LISTENING" });
});

welcomeEmbed(client, "804619074603712532");
leaveEmbed(client, "804619074603712532");


rulesReaction(client, "804619932947710022")

client.on("message", (message) => {
    if(!message.guild) return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.member.hasPermission("ADMINISTRATOR")){
        if (command === "rules") {
            console.log("Admin cast command ?rules")
            rulesEmbed(client, "804619932947710022");
        }
    }
    
});


client.login(process.env.CLIENT_TOKEN);
