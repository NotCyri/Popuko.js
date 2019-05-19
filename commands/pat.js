const Discord = require('discord.js');
const {
  get
} = require('request-promise-native');
var fs = require('fs'); //FileSystem

exports.run = (client, message, args) => {

  const options = {
    url: 'https://nekos.life//api/pat',
    json: true
  }

  get(options).then(body => {
    const patEmb = new Discord.RichEmbed()
      .setColor(0xffffff)
      .setImage(body.url);
    const sadEmb = new Discord.RichEmbed()
      .setColor(0xffffff)
      .setImage('https://media.giphy.com/media/ZFySXgeLyeUIE/giphy.gif');
    if (!args[0]) {
      message.channel.send(`<@${message.author.id}> pat <@${message.author.id}>.. Oh wait! You can't pat yourself!`, {
        embed: sadEmb
      });
      return;
    }

    if (message.mentions.users.first().id == 464747957288435732) {
      message.channel.send(`<@${message.author.id}> pat me.. Oh, thanks, b-but i\'m only a bot...`, {
        embed: patEmb
      });
      return;
    }

    if (!message.mentions.users.first()) return message.channel.send({
      embed: {
        "description": "Please mention someone!",
        "color": 0xFF2222
      }
    }).then(msg => {
      if (conf[message.guild.id].delete == 'true') {
        msg.delete(conf[message.guild.id].deleteTime);
      }
    });
    message.channel.send(`<@${message.author.id}> pat ${args[0]}`, {
      embed: patEmb
    });
  });

}

module.exports.help = {
    name: "pat"
}