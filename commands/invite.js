const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let helpembed = new Discord.RichEmbed()
    .addField(" ℹ Invites", "-------------------")
    .setColor("#7289DA")
    .addField("Bot Invite", "http://popuko.cf/")
    .addField("Server Invite", "https://discord.me/popuko")
    .setFooter("Seeth#9090");

    message.channel.send(helpembed);
}


module.exports.help = {
    name: "invite"
}