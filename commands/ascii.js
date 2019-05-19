var figlet = require('figlet');

exports.run = (bot, message, args, tools) => {
  
  var maxLen = 14 // You can modify the max characters here
  
  if(args.join(' ').length > maxLen) return message.channel.send('Only 14 characters admitted!') 
  
  if(!args[0]) return message.channel.send('Please specify a test to asciify!');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}

module.exports.help = {
    name: "ascii"
};