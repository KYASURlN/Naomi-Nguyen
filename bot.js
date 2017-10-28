const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('P-Pong!');
  	}
    if (message.content === 'quote') {
    	message.reply('A-Ah... I really miss the c-children back at the o-orphanage! How l-long has it been since I have seen t-them? No m-matter, I will never f-forget them! I-I must keep trying my best to see their smiling faces once m-more!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
