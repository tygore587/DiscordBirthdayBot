import { Command } from "discord-akairo";
import { Message } from "discord.js";


export default class SecretCommand extends Command {
    constructor() {
        super('secret', {
            aliases: ['secret'],
            prefix: '???'
        });
    }

    exec(message : Message) {
        return message.reply('Woah! How did you find this!?');
    }
}