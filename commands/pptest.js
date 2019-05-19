exports.run = (client, message, args) => {
    var i = 0;
    var pen = "8";
    var length = Math.floor(Math.random() * 25)
    if(message.author.id === "82173389657079808") {
    
    message.reply("This is your penis " + "8=================================================D")
  } else {
    while(i != length) {
      pen = pen + "="
      i = i + 1;
      }
      pen = pen + "D"
    message.reply("This is your penis " + pen)
  }
}

module.exports.help = {
  name: "pptest"
}