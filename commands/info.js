const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Popuko.js")
  .setDescription("Popuko is an open-source Discord.js bot created by Seeth#9090. If support is needed be sure to type !invite and join our main support server to get the most sufficiant help")
  .setColor("#7289DA")
  .setThumbnail(bicon)
  .setFooter("Popuko v1.3.2");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"info"
}
