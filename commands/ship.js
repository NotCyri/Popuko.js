const Discord = require("discord.js")
exports.run = (client, message, args) => {
    if(message.mentions.users.array()[0]) {
        var user = message.mentions.users.array()[0]["username"];
        if (message.mentions.users.array()[1]) {
        var user1 = message.mentions.users.array()[1]["username"];
        var leng = user.length
        var leng1 = user1.length
        if(user && user1) {
        var take = user.substring(0,leng * 0.5)
        var take1 = user1.substring(leng1 * 0.5,leng1)
        var shipname = (take + take1)
        var embed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .setFooter(`${message.author.username} requested this command`)
        .setDescription(`❤ Aww the shipname is ${shipname} ❤`)
          message.channel.send({embed});
        } else {
          message.reply("Hey pleb, looks like you forgot to mention somebody")
        }
        } else {
          message.reply("Hey pleb, looks like you forgot to mention somebody")
        }
        }
}
module.exports.help = {
  name: "ship"
}