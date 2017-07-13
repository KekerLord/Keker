const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const prefix = '.';

function Spam() {
    client.guilds.first().members.find('id', '107544010687545344').send('Normal?'); //Andrey
    client.guilds.first().members.find('id', '108560701366210560').send('Dopili menya!'); //Me
    console.log('>spam');
};

function Ava(message) {
    message.reply(message.author.avatarURL);
    console.log ('>ava');
};

function Samokat(message) {
    message.channel.send('https://www.youtube.com/watch?v=qQ1H9WtratY');
    console.log('>samokat');
};

function Mops(message) {
    message.channel.send('http://dogcatfan.com/uploads/posts/2016-11/1480462125_pug.jpg');
    console.log('>mops');
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
        break; 
        case message.content.startsWith(prefix+'ava'):
        Ava(message);
        break;
        case message.content.startsWith(prefix+'samokat'):
        Samokat(message);
        break;
        case message.content.startsWith(prefix+'mops'):
        Mops(message);
        break;
    }
});
