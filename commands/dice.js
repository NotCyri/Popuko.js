const Discord = require("discord.js")
exports.run = (client, message, args) => {
  var random = Math.ceil(Math.random() * 20);
  var embed = new Discord.RichEmbed()
    .setDescription(`You rolled a ${random}`)
  message.channel.send("", {
    embed: embed
  });
}

module.exports.help = {
  name: "dice"
}