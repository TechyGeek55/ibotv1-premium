
exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Only admins can edit premium bot settings.!");
const sayMessage = args.join(" ");
client.user.setAvatar(sayMessage);
  
