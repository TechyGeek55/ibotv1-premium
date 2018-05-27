var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {;
let allowedRole = message.guild.roles.find("name", "Bot Ranker");	
if(!message.member.roles.has(allowedRole.id)) return message.channel.send("No can do pal! Only users with the `Bot Ranker` role can run this command.");
var groupId = 2633056;
var maximumRank = 6;
let staffc = message.guild.channels.find("name", "promotion-logs") 

roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
			        
				.then(function(rank){
					if(maximumRank <= rank){
						console.log("Command running")
					} else {
						roblox.setRank(groupId, id, args[1])
						
						.then(function(roles){
							message.channel.send("Ranked from ${roles.oldRole.Name} to ${roles.newRole.Name}")
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`**Action:** Rank\n**Target:** ${username}\n**User:** ${message.author.tag}\n**Old Rank:** ${roles.oldRole.Name}\n**New Rank:** ${roles.newRole.Name}`);
							staffc.send({embed});
						}).catch(function(err){
							message.channel.send("Failed to rank.")
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get them in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
}
