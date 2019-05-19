exports.run = (client, message, args) => {
  message.delete();
  var link = "https://github.com/seeth3r/Popuko.js";
  message.channel.send('', {
      embed: {
          
          color: 0x008AF3,
          title: 'Github repository link:',
          description: `Click [here](${link}) to go to the Popuko.js Github repository.`,
          timestamp: new Date,
          footer: {
              text: 'Popuko',
              icon_url: client.user.avatarURL
          }
      }
  });
};

module.exports.help = {
    name: "git"
}