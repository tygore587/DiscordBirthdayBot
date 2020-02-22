import { Config } from './config/config';
import { AkairoClient, AkairoOptions } from 'discord-akairo';
import { join } from 'path';

// new code here

const akairoOptions: AkairoOptions = {
    ownerID: Config.OWNER,
    prefix: Config.PREFIX,
    commandUtil: true,
    allowMention: true, // this allows to use @Bot <command> as well as <prefix>command
    commandDirectory: join(__dirname, 'commands'), // folder to declare commands
    inhibitorDirectory: join(__dirname, 'inhibitors'), // folder to declare when command should be ignored
    listenerDirectory: join(__dirname, 'listeners'), // just to listen to events of discord like ready or message or something else
};

const client = new AkairoClient(akairoOptions, {});
client.login(`${Config.TOKEN}`);
