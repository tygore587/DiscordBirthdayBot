import discord, { Message } from 'discord.js';
import { MessageHandler } from 'discord-message-handler';
import { Constants } from './constants';
import { UserEntity } from './userEntity';
import { HelloWorldCommands } from './commands/helloWorld';
import { BirthdayCommands } from './commands/birthday';

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
const userStorage: { [id: string]: UserEntity } = {};

client.on('ready', onReady);
client.on('message', onMessage);
HelloWorldCommands.setup(handler);
BirthdayCommands.setup(handler, userStorage);

client.login(process.env.TOKEN);
