const google = require('google');
exports.run = (client, message, args) => {
    let input = args.join(" ");
    google.resultsPerPage = 3
    var nextCounter = 0
    google(input, function (err, res){
        if (err) console.error(err);
        for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
            message.channel.send('', {
            embed: {
                author: {
                    name: "Google Search",
                    icon_url: "http://i.imgur.com/EdV2r11.png"
                },
                title: `${link.title}`,
                url: `${link.href}`,
                color: 0x008AF3,
                description: `${link.description}\n**Click [here](${link.href}) to go to the link.**`,
                timestamp: new Date(),
                footer: {
                    text: 'Popuko',
                    icon_url: client.user.avatarURL
                }
            }
        })
    }
    })
};

module.exports.help = {
    name: "google"
}