const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`unban` **You cannot use this Command in Private Messages.** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'reports', 'log');//mod-log channel name. change for you
  if (!modlog) return message.reply('Cannot find the reports channel ');//don't find mod-log channel.
  if (!user) return message.reply('** You must write ** ** __ ID __ **').catch(console.error);
  message.guild.unban(user);
  if (reason.length < 1) return message.reply('**You did not specify the reason for lifting the Ban!**');//don't forget unban reason

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Action:', 'Ban removal')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name: "unban"
}