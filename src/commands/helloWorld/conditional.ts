import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { Config } from "../../config/config";


export default class ComplimentCommand extends Command {
    constructor() {
        super('compliment', {
            category: 'random'
        });
    }

    // just override the condition function to set condition if the command should trigger
    condition(message : Message) {
        return message.author.id === Config.OWNER;
    }

    exec(message: Message) {
        return message.reply('You are a great person!');
    }
}