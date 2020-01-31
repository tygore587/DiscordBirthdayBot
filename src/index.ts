import discord, { Message, User } from 'discord.js';

import { Constants } from './constants';
import { UserEntity } from './userEntity';


var userStorage : {[id : string] : UserEntity} = {};

const client = new discord.Client();

client.on('ready', () => {
    console.log(`I'm online, my name is ${client.user.username}`);
    console.log(`My prefix is: ${Constants.PREFIX}`);
    console.log(`I'm running in the following environment: ${process.env.ENVIRONMENT}`)
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
    if (!message.content.startsWith(Constants.PREFIX)) {
        return;
    }
    const content = message.content.replace(Constants.PREFIX, '');

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

    if (content == 'birthdays' || content === 'list') {
        message.reply(`Here are all the birthdays. ${JSON.stringify(userStorage)}`);
    }
});

client.login(process.env.TOKEN);
