const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let warnchannel = message.guild.channels.find(`name`, "announcements");
  if(!warnchannel) return message.reply("Couldn't find named announcements. Please create channel if you havent done so already.");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  message.guild.channels.find("name", "announcements").send(`Poll by ${message.author.username}:\n${args.join(" ")}\n`)
    .then(function (message) {
      message.react("✅")
      message.react("❌")
      
    })
}

module.exports.help = {
  name: "poll"
}