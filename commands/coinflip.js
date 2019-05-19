const Discord =require("discord.js");

module.exports.run = async (bot, message, args) => {


    let replies = ["Heads", "Tails", "Tails", "Heads", "Tails", "Heads", "Tails"];
    let result = Math.floor((Math.random() * replies.length));

    let ballembed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .addField("The Coin has landed on: ", replies[result]);

    message.channel.send(ballembed);



}

module.exports.help = {
    name: "coinflip"
}