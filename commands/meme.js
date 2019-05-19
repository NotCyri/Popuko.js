const request = require("request")
const Discord = require("discord.js")
exports.run = (client, message, args) => {
  request("https://reddit.com/r/meme/random.json", function (error, response, body) {
    body = JSON.parse(body)
    var bod = body[0]
    var data = bod["data"]
    var children = data["children"]
    var childre = children[0]
    var data2 = childre["data"]
    if(data2["url"].match(".jpg") || data2["url"].match(".png")) {
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Popuko")
    .setTitle("r/meme")
    .setURL(`https://reddit.com${data2["permalink"]}`)
    .setFooter(`Meme by ${data2["author"]}`)
    .setImage(data2["url"])
    message.channel.send({embed});
    } else {
     var embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor("Popuko")
     .setTitle("r/meme")
     .setURL(`https://reddit.com${data2["permalink"]}`)
     .setFooter(`Meme by ${data2["author"]}`)
     .setImage(data2["url"]+".jpg")
     message.channel.send({embed});
    }
 })
}

module.exports.help = {
  name: "meme"
}