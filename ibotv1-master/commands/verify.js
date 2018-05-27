var rbx = require('noblox.js');

exports.run = (Discord, client, message, args) => {
var jar = rbx.options.jar;


let amount = args[0];
 
let godRole = message.guild.roles.find("name", "Verified");
if (message.member.roles.has(godRole.id)) {
  return message.reply("Already verified, please contact an administrator if you're having a problem.")
}
    message.reply("please check your ROBLOX.com messages. We've messaged you with a verification code, follow instructions found in the message. **Change your settings so all users can message, you may change your settings back once verified.**  \nCopy and paste the specific code that was sent to you.")
 
    var code = [
      "asdlkasdlkjasdlkj&2918347",
      "faslkdasldoij$28",
      "sfdklsdflksdjflskdfjl%",
      "sdlkfjsdlkfjsdlfkjsdlfkjsdflkjqw123123123",
      "asldkfasdlkfj*@#(@3812391238)",
      "zlkjxvlkzjxcvlkjzxcvlk2u34e902183102938",
      "sdflksdflksdf12812392389",
      "asdlkasldasdaksdjvxbcvxcvi128u!!!",
      "asdlfkjasdflkjasdflkjasdfuq30984q023948;;213123",
      "vjksdanvzxcviewr839"
    ]
    let zz = code[Math.floor(Math.random()*code.length)]
    rbx.login({username: process.env.username, password: process.env.password})
        .then(function (info) {
          rbx.message("AaronnSmh", "iBot Verification", "Post the code in the channel.\n" + "\n" + zz + "\n" + "\nKind regards, \niBot Team", jar)
 
      })
 
 
      .then(() => {
        message.channel.awaitMessages(response => code.includes(response.content), {
          max: 1,
          time: 60000,
          errors: ['time'],
        })
        .then((collected) => {
          message.delete()
          let member = message.author
  let guild = member.guild;
  message.member.setNickname(args[1])
          message.member.addRole(message.guild.roles.find('name', 'Verified')).catch(console.error);
          message.author.sendMessage("You've been officially verified!");
        })
 
          .catch((c) => {
            console.log(c)
            message.channel.sendMessage('Please try again later...');
          });
    })
}
