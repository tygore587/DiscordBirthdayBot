import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class AyyCommand extends Command {
    constructor() {
        super('ayy', {
            regex: /ayy/g, // the trigger uses a regex to trigger on commands. Could be used to just autolog some stuff if you want to. Trigger can also come from function.
        });
    }

    exec(message: Message, ...args: any[]): any {
        console.log(args); // the original exec doesnt work, don't know why. In args you find all values. use debug zu find them
        return message.reply('lmao');
    }
}
