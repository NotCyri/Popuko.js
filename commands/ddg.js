const Discord = require("discord.js")
exports.run = (client, message, args) => {
  message.channel.send(`https://duckduckgo.com/?q=${args.join("+")}`)
}
module.exports.help = {
  name: "ddg"
}