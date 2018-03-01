const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    msg = message.content.toLowerCase();
    
    if (msg.startsWith === 'ping') {
        message.channel.send('P-Pong!');
        }
    if (msg.startsWith === 'tomo is gay') {
        message.channel.send('A-Ah! Đúng rồi!');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
