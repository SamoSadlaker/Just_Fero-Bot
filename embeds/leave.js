const Discord = require("discord.js");
const getMembers = require("../functions/getMembers");
module.exports = (client, channelID) => {
    client.on("guildMemberRemove", (member) => {
        const leaveMessage = new Discord.MessageEmbed()
            .setColor("#e84c3d")
            .setTitle("User has left __Just_Fero's__ discord server")
            .setAuthor(
                "Just_Fero",
                "https://static-cdn.jtvnw.net/jtv_user_pictures/19146189-f178-4db0-9f83-83a7088fa10a-profile_image-70x70.png",
                "https://twitch.tv/just_fero_"
            )

            .setDescription("We were glad you were here with us **" + member.displayName + "**.")
            .addField(
                "\u200B",
                "> Now there are only **" + getMembers(client) + "** happy people on our server."
            )
            .setImage(member.user.displayAvatarURL)
            .setTimestamp()
            .setFooter(
                "© " + new Date().getFullYear() + " just_fero's discord server."
            );

            member.guild.channels.cache.get(channelID).send(leaveMessage).then(leaveMessage => {
                leaveMessage.react("😭");
            })
    });
};
