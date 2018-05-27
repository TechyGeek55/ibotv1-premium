var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
	
let staffc = message.guild.channels.find("name", "logs")	
var groupId = process.env.group;
var maximumRank = process.env.rank;
let rank2 = args[1];

roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});
.then(function(shout{
					
						roblox.shout(groupId, args[0])
						.then(function(roles){
							message.channel.send(`Shouted!`)
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`**Action:** Shout\n**Shouted:** ${rank2}\n**User:** ${message.author.tag}`);
							staffc.send({embed});
						}).catch(function(err){
							message.channel.send("Failed to shout.")
						});
					
				}).catch(function(err){
					message.channel.send("Couldn't shout.")
				});
			}).catch(function(err){ 
				message.channel.send(`Couldn't shout.`)
			});
    	} else {
    		message.channel.send("Couldn't shout.")
    	}
    	return;
}
