import discord, { Message } from 'discord.js';
import { MessageHandler } from 'discord-message-handler';
import { Constants } from './constants';
import { UserEntity } from './userEntity';
import { HelloWorldHandler } from './handler/helloWorldHandler';
import { BirthdayHandler } from './handler/birthdayHandler';

function onReady(): void {
    console.log(`I'm online, my name is ${client.user.username}`);
    console.log(`My prefix is: ${Constants.PREFIX}`);
    console.log(`I'm running in the following environment: ${process.env.ENVIRONMENT}`);
    client.user.setPresence({
        status: 'online',
        game: {
            name: 'Ich werde gerade entwickelt.',
            type: 'WATCHING',
        },
    });
}

function onMessage(message: Message) {
    console.log(
        `${message.author.username} from Guild ${message.guild}(ID: ${message.guild?.id}) says: ${message.content}`,
    );
    handler.handleMessage(message);
}

const handler = new MessageHandler();
const client = new discord.Client();

client.on('ready', onReady);
client.on('message', onMessage);
HelloWorldHandler.setup(handler);
BirthdayHandler.setup(handler);

client.login(process.env.TOKEN);
