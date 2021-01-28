require("dotenv").config();

module.exports = (client, channelID) => {
    //Check reaction & add verified group
client.on("messageReactionAdd", async (reaction, user) => {
    
  if(user.bot) return;
  if(!reaction.message.guild) return;

  if(reaction.message.channel.id === channelID){
      if(reaction.emoji.name === "✅"){
          await reaction.message.guild.members.cache.get(user.id).roles.add("804333549717028945");
          // console.log("reaction");
      }
      
  }
})
//Check reaction & remove verified group
client.on("messageReactionRemove", async (reaction, user) => {
  if(user.bot) return;
  if(!reaction.message.guild) return;

  if(reaction.message.channel.id === channelID){
      if(reaction.emoji.name === "✅"){
          await reaction.message.guild.members.cache.get(user.id).roles.remove("804333549717028945");
          // console.log("reaction");
      }
      
  }
})
};
