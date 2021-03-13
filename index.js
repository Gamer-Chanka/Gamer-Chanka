require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});


client.on('message', message => {        
        const str = message.content;
        
        if (message.channel.id != '726368915545915413'){

                if ((str.startsWith("_play")==true) || (str.startsWith("-play")==true) || (str.startsWith("!play")==true) || (str.startsWith(";;play")==true)){
                        message.channel.send('Please play music in the music channel');
                }
        }
});

client.login(process.env.CLIENT_TOKEN);
