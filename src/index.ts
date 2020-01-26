import discord, { Message } from 'discord.js';
import { config } from 'dotenv';

config({
    path: __dirname + '/../.env',
});

const client = new discord.Client();

client.on('ready', () => {
    console.log(`I'm online, my name is ${client.user.username}`);
    client.user.setPresence({
        status: 'online',
        game: {
            name: 'Ich werde gerade entwickelt.',
            type: 'WATCHING',
        },
    });
});

client.on('message', async (message: Message) => {
    console.log(`${message.author.username} says: ${message.content}`);
    const content = message.content;
    if (message.mentions.users.size > 1) {
        console.log('Mehr als 1 Mention in Nachricht!');
    }
    if (content === 'Hello World') {
        message.reply('Hello you also');
    }
});

client.login(process.env.TOKEN);
