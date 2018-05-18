exports.run = (Discord, client, message, args) => {
    if(message.channel.id !== "281060171730649089") return message.channel.send("This command can only be executed in the `Alert eSports roles` channel!");
    if(message.member.roles.has(role.id)) return message.channel.send("You already have the role!");
        let myRole = message.guild.roles.find("name", "Supporter");
        message.reply("You've been given the support role!")
        let member = message.author;
        member.addRole(myRole).catch(console.error);
    
}
