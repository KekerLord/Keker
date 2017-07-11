const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const prefix = '.';

function Spam() {
    client.guilds.first().members.find('id', '107544010687545344').send('Normal?'); //Andrey
    client.guilds.first().members.find('id', '108560701366210560').send('Dopili menya!'); //Me
};
client.on('ready', () => {
    console.log('Dorou');
});

client.login(config.token);

client.on('message', (message) => {
    if (message.author.bot) return;
    switch (true) {
        case message.content.startsWith(prefix+'spam'):
        Spam();
        console.log('>spam');
        break;        
    }
})