module.exports = (client) => {
  const guild = client.guilds.cache.get("792803941468733500");
  const memberCount = guild.memberCount;
  return memberCount.toLocaleString();
};