const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

// Command Prefix
const prefix = process.env.PREFIX;
// Get Twticha api token
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

client.on("guildMemberAdd", (member) => {
    const welcomeMessage = new Discord.MessageEmbed()
        .setColor("#e84c3d")
        .setTitle("Welcome on **Just_Fero's** discord server")
        .setAuthor(
            "Just_Fero",
            "https://static-cdn.jtvnw.net/jtv_user_pictures/19146189-f178-4db0-9f83-83a7088fa10a-profile_image-70x70.png",
            "https://twitch.tv/just_fero_"
        )

        .addField(
            "\u200B",
            "> We look forward to seeing you **" + member.displayName + "**."
        )
        .setImage(member.user.displayAvatarURL)
        .setTimestamp()
        .setFooter(
            "Copyright ©" +
                new Date().getFullYear() +
                " just_fero's discord server."
        );

    member.guild.channels.cache.get("803701548269043712").send(welcomeMessage);
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.channel.send("D");
    }
});

client.login(process.env.CLIENT_TOKEN);
