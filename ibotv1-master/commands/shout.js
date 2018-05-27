


var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
	
	
var groupId = process.env.group;
var minimumRank = 1;
let staffc = message.guild.channels.find("name", "logs")
var message = args[0];

roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		console.log("You have correct permissions.")
			.then(function(id){
				console.log("Shouting....")
			        
				.then(function(shout){
					
						roblox.shout(groupId, message)
						.then(function(roles){
							message.channel.send(`Shouted.`)
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`**Action:** Shout\n**Shouted:** ${message}\n**User:** ${message.author.tag}`);
							staffc.send({embed});
						}).catch(function(err){
							message.channel.send("Failed to Shout.")
						});
					
				}).catch(function(err){
					message.channel.send("Failed to Shout.")
				});
			}).catch(function(err){ 
				message.channel.send(`Failed to Shout.`)
			});
    	} else {
    		message.channel.send("Failed to Shout.")
    	}
    	return;
}
