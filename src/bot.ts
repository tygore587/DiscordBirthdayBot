import { Config } from './config/config';
import { AkairoClient, AkairoOptions } from 'discord-akairo';
import { join } from 'path';

// new code here

const akairooptions: AkairoOptions = {
    ownerID: Config.OWNER,
    prefix: Config.PREFIX,
    commandUtil: true,
    allowMention: true, // this allows to use @Bot <command> as well as <prefix>command
    commandDirectory: join(__dirname, 'commands'), // folder to declare commands
    inhibitorDirectory: join(__dirname, 'inhibitors'), // folder to declare when command should be ignored
    listenerDirectory: join(__dirname, 'listeners'), // just to listen to events of discord like ready or message or something else
};

const client = new AkairoClient(akairooptions, {});
client.login(`${Config.TOKEN}`);

// old code here

/*
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
*/
