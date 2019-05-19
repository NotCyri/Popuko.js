const Discord = require("discord.js")
exports.run = (client, message, args) => {
  message.channel.send(`https://en.wikipedia.org/wiki/${args.join("+")}`)
}
module.exports.help = {
  name: "wiki"
}