const Discord = require('discord.js');
const client = new Discord.Client();

const args = message.content.trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(command === 'ping') {
      message.channel.send('Pong!');
      } else
    if (command === 'blah') {
      message.channel.send('Meh.');
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
