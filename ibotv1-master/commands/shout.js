


var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
var jar = rbx.options.jar;	
	
var groupId = process.env.group;
var minimumRank = 1;
let staffc = message.guild.channels.find("name", "logs")
var message = args[0];

roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

roblox.shout(groupId, message.content.slice(message.content.indexOf(message.content.split(" ")[1])), jar)
