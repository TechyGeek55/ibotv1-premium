var roblox = require('noblox.js');
const db = require('quick.db');
exports.run = async (Discord, client, message, args) => {
  
  let gid = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.groupid' });

  let user = args[0];
  let id = await roblox.getIdFromUsername(user);
  let username = await roblox.getUsernameFromId(id);
  let status = await roblox.getStatus(id);
  let rank = await roblox.getRankNameInGroup(gid, id);

  if(user.length > 0) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(user1, `https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
      .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
      .setColor(0x8cff00)
      .addField('Username', username, true)
      .addField('ID', id, true)
      .addField('Status', status, true)
      .addField('Group Rank', rank, true);
    msg.channel.send({ embed });
  } else {
    msg.channel.send('Please enter a username.')
  }
  return;
}