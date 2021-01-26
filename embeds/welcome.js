const Discord = require("discord.js");
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

            .addField(
                "\u200B",
                "> We look forward to seeing you **" +
                    member.displayName +
                    "**."
            )
            .setImage(member.user.displayAvatarURL)
            .setTimestamp()
            .setFooter(
                "© " + new Date().getFullYear() + " just_fero's discord server."
            );

        member.guild.channels.cache.get(channelID).send(welcomeMessage).then(welcomeMessage => {
            welcomeMessage.react("👍");
        })
        
    });
};
