const Discord = require("discord.js")
exports.run = (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
  message.channel.send(`https://www.pornhub.com/video/search?search=${args.join("+")}`)
}
module.exports.help = {
  name: "pornhub"
}