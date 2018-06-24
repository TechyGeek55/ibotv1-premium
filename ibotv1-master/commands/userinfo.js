var roblox = require('noblox.js');
const db = require('quick.db');
exports.run = async (Discord, client, message, args) => {
  
  let gid = parseInt(process.env.group);
  let pw = process.env.password
  let un = process.env.username

  roblox.login({username: un, password: pw}).catch(() => {console.log("Failed to login.");});

  let user = args[0];
  let id = await roblox.getIdFromUsername({usernme: user}).catch(console.error);
  let username = await roblox.getUsernameFromId({id: id}).catch(console.error);
  let status = await roblox.getStatus({userId: id}).catch(console.error);
  let rank = await roblox.getRankNameInGroup({group: gid, id: id}).catch(console.error);

  if(user.length > 0) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(username, `https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
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
