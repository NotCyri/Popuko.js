const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let helpembed = new Discord.RichEmbed()
    .addField(" ℹ Oneiida Nofilters Contact Information", "--------------------------------------")
    .setColor("#7289DA")
    .addField("Youtube", "https://www.youtube.com/channel/UCLPv53y5MsaE0TYN-lrL5NA")
    .addField("Instagram", "https://www.instagram.com/oneiida_nofilter/")
    .addField("Facebook", "https://www.facebook.com/oneiida.nofilter")
    .setFooter("Discord contact: Oneiida#7046");

    message.channel.send(helpembed);
}


module.exports.help = {
    name: "oneiida"
}