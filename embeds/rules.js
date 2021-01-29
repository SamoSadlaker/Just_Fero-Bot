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
                "> No negative comments directed at others. \n > No swearing \n > Listen to mods, they have the same rights and responsibilities as in the chat \n > No racist references / modified links / NSFW links. \n > No invites to foreign discord servers! \n > Behave politely and exemplary!"
            )
            .addField(
                "Voicerooms rules",
                "> No swearing \n > Work in progress"
            )
            .addField(
              "GDPR",
              "> Work in progress"
          )
            .setFooter(
                "© " + new Date().getFullYear() + " just_fero's discord server."
            );

            client.channels.cache.get(channelID).send(rulesEmbed).then(rulesEmbed => {
              rulesEmbed.react("✅");
            })
};
