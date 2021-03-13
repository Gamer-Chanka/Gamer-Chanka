const Discord = require('discord.js');
const bot = new Discord.Client();

// bot.on('message', (message) => {
//     if(message.content.includes('hi')) {
//         message.reply('hello');
//     }
// });

// client.once('ready', () => {
// 	console.log('Ready!');
// });

bot.on('message', message => {        
        const str = message.content;
        
        if (message.channel.id != '726368915545915413'){

                if ((str.startsWith("_play")==true) || (str.startsWith("-play")==true) || (str.startsWith("!play")==true) || (str.startsWith(";;play")==true)){
                        // send back "Pong." to the channel the message was sent in
                        message.channel.send('Please play music in the music channel');
                }
        }
});

bot.login(process.env.BOT_TOKEN);
