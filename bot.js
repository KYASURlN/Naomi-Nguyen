const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    if (message.content === 'ping') {
        message.channel.send('P-Pong!');
        }
    if (message.content === 'tomo is gay') {
        message.channel.send('A-Ah! Đúng rồi!');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
