
const Discord = require("discord.js")
exports.run = (client, message, args) => {
  var gayPerecent = Math.floor(Math.random() * 100)
  if(message.mentions.users.first()) {
    var user = message.mentions.users.first()
    var embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setFooter(`${message.author.username} requested this command`)
    if(gayPerecent > 50) {
    embed.setDescription(`${user.username} is ${gayPerecent}% gay :rainbow:`)
    } else {
    embed.setDescription(`${user.username} is ${gayPerecent}% gay 👍`)
    }
      message.channel.send({embed});
  } else {
    var embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setFooter(`${message.author.username} requested this command`)
    if(gayPerecent > 50) {
    embed.setDescription(`${message.author.username} is ${gayPerecent}% gay :rainbow:`)
    } else {
    embed.setDescription(`${message.author.username} is ${gayPerecent}% gay 👍`)
    }
      message.channel.send({embed});
  }
}
module.exports.help = {
  name: "gay"
}