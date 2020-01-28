import discord, { Message, User } from 'discord.js';
import { config } from 'dotenv';
import { Constants } from './constants';
import { UserEntity } from './userEntity';

var storage : string = "";
var userStorage : {[id : string] : UserEntity} = {};

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
    if (!message.content.startsWith(Constants.prefix)) {
        return;
    }
    const content = message.content.replace(Constants.prefix, '');

    if (content === 'hello') {
        message.reply('Hello you also');
    }
    if (content.startsWith('add')) {
        if (message.mentions.users.size > 1) {
            console.log('Mehr als 1 Mention in Nachricht!');
            message.reply('You can only add one person at a time');
        }
        const firstUser = message.mentions.users.first();
        if (firstUser) {
            const userEntity = new UserEntity(firstUser.id,false,new Date());
            userStorage[firstUser.id] = userEntity;
            firstUser.send("Is it ok if user adding your birthday? Type !confirm/!deny");
        }   
    }

    if (content === 'confirm') {
        let author = message.author;
        if (userStorage[author.id]) {
            message.reply('You have confirmed your birthday.')
            userStorage[author.id].confirmation = true;

        } else {
            message.reply(`Your birthday isn't added yet!`);
        }
    }
    if (content === 'deny') {
        let author = message.author;
        if (userStorage[author.id]) {
            message.reply('You have denied saving your birthday.');
            delete userStorage[author.id];
        } else {
            message.reply(`Your birthday isn't added yet!`);
        }
    }
    
    if (content == 'personal') {
        message.author.send('this is a personal message');
    }

    if (content == 'birthdays') {
        message.reply(`Here are all the birthdays. ${JSON.stringify(userStorage)}`);
    }
});

client.login(process.env.TOKEN);
