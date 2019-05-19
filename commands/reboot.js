const {RichEmbed} = require("discord.js"); // [package required: discord.js]
exports.run = async (client, message, args, level) => {
  // EMBED
  let embed = new RichEmbed()
  .setColor("#ff1d00")
  .setTitle("Bot is shutting down!")
  await message.channel.send(embed); // send the embed
  // unload all commands before shutting down

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
}; // end of code

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["boot off", "shutdown"],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "Owner",
  description: "Shuts down the bot, unless running under pm2 or on an VPN/VPS bot will reboot automatically",
  usage: "reboot"
};