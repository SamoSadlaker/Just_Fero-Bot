const Discord = require("discord.js");
const getMembers = require("../functions/getMembers");
module.exports = (client, channelID) => {
    client.on("guildMemberAdd", (member) => {
        const welcomeMessage = new Discord.MessageEmbed()
            .setColor("#e84c3d")
            .setTitle("Welcome on __Just_Fero's__ discord server")
            .setAuthor(
                "Just_Fero",
                "https://static-cdn.jtvnw.net/jtv_user_pictures/19146189-f178-4db0-9f83-83a7088fa10a-profile_image-70x70.png",
                "https://twitch.tv/just_fero_"
            )

            .setDescription("We look forward to seeing you **" + member.displayName + "**.")
            .addField(
                "\u200B",
                "> There are currently **" + getMembers(client) + "** happy people on our server. \n > If you want join to our community, you must agree our rules. \n > Rules are in channel <#804275307162107974>"
            )
            .setImage(member.user.displayAvatarURL)
            .setTimestamp()
            .setFooter(
                "© " + new Date().getFullYear() + " just_fero's discord server."
            );

        member.guild.channels.cache.get(channelID).send(welcomeMessage).then(welcomeMessage => {
            welcomeMessage.react("👋");
        })
        
    });
};
