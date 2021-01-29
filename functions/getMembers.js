module.exports = (client) => {
  const guild = client.guilds.cache.get("730541337010765886");
  const memberCount = guild.memberCount;
  return memberCount.toLocaleString();
};