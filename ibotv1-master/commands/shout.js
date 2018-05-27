


var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
roblox.login({username: process.env.username, password: process.env.password}).then((success) => {


var jar = roblox.options.jar;	
	
var groupId = process.env.group;
var minimumRank = 1;
let staffc = message.guild.channels.find("name", "logs")
var message = args[0];
let shouter = args.slice(0).join(" ");

roblox.shout(groupId, shouter, jar)
}).catch(() => {console.log("Failed to login.");});



}
