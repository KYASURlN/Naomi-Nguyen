const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('P-Pong!');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.sendMessage('A-Ah! Đúng rồi!');
        }
    if (message.content.toLowerCase() === 'peter is gay') {
        message.channel.sendMessage('There is no mistaking this.');
        }
    if (message.content.toLowerCase() === 'rya has weird nostrils') {
        message.channel.sendMessage('AGREED');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
9
