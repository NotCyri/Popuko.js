
//888~-_                               888   _            
//888   \   e88~-_  888-~88e  888  888 888 e~ ~   e88~-_  
//888    | d888   i 888  888b 888  888 888d8b    d888   i 
//888   /  8888   | 888  8888 888  888 888Y88b   8888   | 
//888_-~   Y888   ' 888  888P 888  888 888 Y88b  Y888   ' 
//888       "88_-~  888-_88"  "88_-888 888  Y88b  "88_-~  
//                  888                                  .js   

const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const tokenfile = require("./botconfig.json");
let coins = require("./json/coins.json");
let xp = require("./json/xp.json");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
  ` | ${bot.guilds.size} servers`,
  ` | ${bot.channels.size} channels`,
  ` | ${bot.users.size} users`
];

const random = Math.floor(Math.random() * statuslist.length);

try {
  await bot.user.setPresence({
    game: {
      name: `${statuslist[random]}`,
      type: "WATCHING"
      //url: 'https://www.twitch.tv/'
    },
    status: "idle"
  });
} catch (error) {
  console.error(error);
}
}, 10000);
});


bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./json/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };

  fs.writeFile("./json/coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)

  });

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#7289DA")
  .addField("💸", `${coinAmt} Popukoins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#7289DA")
    .addField("You have leveled up to level ", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./json/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(tokenfile.token);
