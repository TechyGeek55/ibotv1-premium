
exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Only admins can edit premium bot settings.!");
const sayMessage = args.join(" ");
client.user.setAvatar(sayMessage);
}

exports.run = (Discord, client, message, args) => {
if (message.member.hasPermission("ADMINISTRATOR") {
  const sayMessage = args.join(" ");
  client.user.setAvatar(sayMessage);
  }
else {
  message.channel.send('You are not cool enough to run this command!')
  return;
  }
}
