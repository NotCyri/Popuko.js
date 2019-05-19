const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Nice try nerd.");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: `prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./json/prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./json/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Prefix has been successfully changed.")
  .setDescription(`Your prefix is now: ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
