var roblox = require('noblox.js');
const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
  let pw = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.password' });
  let un = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.username' });
  let gid = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.groupid' });
  let mr = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.maxrank' });
  let staffc = message.guild.channels.find("name", "logs")	
  var groupId = gid; //replace with stored stuff from earlier
  var maximumRank = mr; //replace with stored stuff from earlier
  
  roblox.login({username: un, password: pw}).catch(() => {console.log("Failed to login.");});

  var shoutmessage = args.join(' ');
  if(shoutmessage.length > 0) {
    roblox.shout(groupId, shoutmessage).then(() => {
      message.channel.send('Group shout posted')
      const embed = new Discord.RichEmbed()
        .setColor(0x8cff00)
        .setTimestamp()
        .setDescription(`**Action:** Group Shout\n**Shout Message:** ${shoutmessage}`);
      staffc.send({embed})
    }).catch(e => {
      message.channel.send('Failed to shout.')
    });
  } else {
    message.channel.send('Please enter a message to shout')
  }
  return;
}