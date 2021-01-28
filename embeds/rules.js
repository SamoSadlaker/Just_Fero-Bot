const Discord = require("discord.js");
module.exports = (client, channelID) => {
    
        const rulesEmbed = new Discord.MessageEmbed()
            .setColor("#e84c3d")
            .setTitle("General rules of discord server")
            .setDescription("These are general server rules ... by connecting to the server you automatically agree to the rules.")
            .setAuthor(
                "Just_Fero",
                "https://static-cdn.jtvnw.net/jtv_user_pictures/19146189-f178-4db0-9f83-83a7088fa10a-profile_image-70x70.png",
                "https://twitch.tv/just_fero_"
            )

            .addField(
                "Chat rules",
                "> We were glad you were here with us ."
            )
            .addField(
                "Voicerooms rules",
                "> Now there are only "
            )
            .addField(
              "GDPR",
              "> Now there are only "
          )
            .setFooter(
                "© " + new Date().getFullYear() + " just_fero's discord server."
            );

            client.channels.cache.get(channelID).send(rulesEmbed).then(rulesEmbed => {
              rulesEmbed.react("✅");
            })
};
