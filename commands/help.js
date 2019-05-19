const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let helpembed = new Discord.RichEmbed()
    .addField(" ℹ [HELP MENU]", "--------------------------------------")
    .setColor("#7289DA")
    .addField("Help", "Shows list of commands or can show advice on using command [ex: !<command> help]")
    .addField("Ping", "Test bot connection")
    .addField("Serverinfo", "Gives information on current server")
    .addField("Userinfo", "Gives information on user of choice")
    .addField("Info", "Information on bot and creator.")
    .addField("Report", "Report a user for conflict or breaking rules. [ex: !report <user> <reason>]")
    .addField("Roleinfo", "Gives information on role of choice [ex: !roleinfo <role>]")
    .addField("Serverroles", "Shows list of all the roles in current server")
    .addField("Stats", "Get current server user statistics")
    .addField("Invite", "Get invite links")
    .addField("Git", "Popuko.js Github repository")
    message.channel.send(helpembed);

    let help2embed = new Discord.RichEmbed()
    .addField(" 🎲 [FUN COMMANDS]", "--------------------------------------")
    .setColor("#7289DA")
    .addField("8ball", "Shake the 8ball to answer your deepest questions [ex: !8ball <question>]")
    .addField("Coinflip", "Flip a coin")
    .addField("Coins", "Check your Popukoin ammount")
    .addField("Pay", "Transfer your Popukoins to a friend")
    .addField("Ship", "Ship your fav two people [ex: !ship <@user> <@user>]")
    .addField("Gay", "Gay meter, see how gay someone is[ex: !gay <@user>]")
    .addField("Meme", "Posts random meme from r/meme")
    .addField("Popuko", "Random posts from /r/PopTeamEpic")
    .addField("PPtest", "Test how big your pp is")
    .addField("Dice", "Rolls dice gives you random number")
    .addField("Slots", "Test your luck and spin some slots")
    .addField("Avatar", "Get a closer look at someones avatar [ex: !avatar <@user> ]")
    .addField("Ascii", "Convert text into ascii [ex: !ascii <random> ]")
    .addField("Textflip", "Flip word(s) of choice[ex: !textflip <random> ]")
    .addField("Math", "Make the bot do the math for you [ex: !math 1 + 1]")
    .addField("Roast", "Roast a plebtart of choice [ex: !roast <@user>]")
    .addField("Embed", "Make a small quick embed [ex: !embed <blah blah blah>]")
    .addField("Pat", "Pat pat [ex: !pat <@user>]")
    .addField("Hug", "Give someone a hug [ex: !hug <@user>]")
    .addField("Kiss", "Give someone a smooch [ex: !kiss <@user>]")
    .addField("Marry", "Marry a special someone [ex: !marry <@user>]")
    .addField("Dropkick", "Dropkick your enemy [ex: !dropkick <@user>]")
    .addField("Neko [NSFW]", "Random lewd nekos")
    message.channel.send(help2embed);

    let help3embed = new Discord.RichEmbed()
    .addField(" 🔍 [COMMANDS TO SEARCH THE WEB]", "--------------------------------------")
    .setColor("#7289DA")
    .addField("DDG", "Search something up on DuckDuckGo [ex: !ddg <search request>]")
    .addField("Google", "Look something up on google. [ex: !google <search request>]")
    .addField("Pornhub [NSFW]", "Look something up on Pornhub you lil perv [ex: !pornhub <search request>]")
    .addField("Wiki", "Look something up on wiki [ex. !wiki <search request>] ")
    .addField("Imgtfy", "Show these plebs how search engines work [ex: !imgtfy <search query>")
    .addField("Weather", "Look something up on urban [ex. !weather <city>] ")
    message.channel.send(help3embed);

    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .addField(" 👮 Popuko.js Moderator Help Menu", "--------------------------------------")
    .setColor("#7289DA")
    .addField("Ban", "Ban user of choice. [ex: !Ban <user>]")
    .addField("kick", "Kick user of choice [ex:!kick <user>]")
    .addField("Unban", "Unban specified user")
    .addField("Nick", "Change nickname of server member [ex: !nick <new nickname> <@user>")
    .addField("Removerole", "Remove role from user [ex: !removerole <user> <role>]")
    .addField("Addrole", "Give user role [ex: !addrole <user> <role>]")
    .addField("Prefix", "Change Popukos prefix [ex: !prefix <prefix>]")
    .addField("Warn", "Warn misbehaving user [ex: !warn <user> <reason>]")
    .addField("Warnlevel", "Check ammount user have been warned [ex: !warnlevel <user>]")
    .addField("Tempmute", "Mute user temporarily [ex: !tempmute <user> <1h> <1m> <1s>]")
    .addField("Poll", "Create a quick poll [ex: !poll <question>")
    
try{
    await message.author.send(modembed);
    message.react(" ")
 }catch(e){
        message.reply("Your DMs are locked. Please go to 'Privacy settings' and allow direct messages from server members to see list of mod commands");
    }
}

}

module.exports.help = {
    name: "help"
}