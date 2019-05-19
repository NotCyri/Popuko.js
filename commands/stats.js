const Discord = require("discord.js");
var fs = require('fs'); //FileSystem
const {
  get
} = require('request-promise-native');

exports.run = (client, message, args) => {

  if (!message.channel.nsfw) return message.channel.send({
    embed: {
      "color": 0xFF2222,
      "description": "You can use that only in NSFW channels, nya!",
      "footer": {
        "text": message + ""
      }
    }
  }).then(msg => {
    if (conf[message.guild.id].delete == 'true') {
      msg.delete(conf[message.guild.id].deleteTime);
    }
  });

  const options = {
    url: 'https://nekos.life/api/lewd/neko',
    json: true
  }

  const waitMessage = new Discord.RichEmbed()
    .setColor(0x999999)
    .setDescription("Catching lewd neko...")

  message.channel.send(waitMessage).then(msg => {

    get(options).then(body => {
      return msg.edit({
        embed: {
          title: `:eyes: Lewd Neko`,
          image: {
            url: body.neko
          },
          "color": 0xffffff
        }
      })
    }).catch(error => {
      return msg.edit({
        title: `No lewd nekos for ${message.author.username} today :tired_face: `,
        description: `\`\`\`js\n${error}\`\`\``,
      })
    })
  });

}

module.exports.help = {
    name: "lewd"
}