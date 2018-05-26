var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {
let allowedRole2 = message.guild.roles.find("name", process.env.role);




if (message.member.hasPermission(process.env.perm)) {
    message.channel.send("You have permission to run this command")
} else if (message.member.hasPermission(allowedRole2)) {
    message.channel.send("You have permission to run this command")
} else {
    return message.channel.send("You have invalid permissions.")
}
	
	
var groupId = process.env.group;
var maximumRank = process.env.rank;
let allowedRole = message.guild.roles.find("name", process.env.role);
if (!staffc) return message.channel.send("I can not find the gamenight channel!");
roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		message.channel.send(`Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not promotable.`)
					} else {
						message.channel.send(`${id} is rank ${rank} and promotable.`)
						roblox.promote(groupId, id)
						.then(function(roles){
							message.channel.send(`Promoted from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
						}).catch(function(err){
							message.channel.send("Failed to promote.")
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
