import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class RequestCommand extends Command {
    constructor() {
        super('ratelimit', {
            aliases: ['ratelimit'],
            cooldown: 10000, // cooldown in ms before you can call command again, you can also add default cooldown to client on start
            ratelimit: 2, // how many times can a command be used before there is a ratelimit
        });
    }

    exec(message : Message) {
        return message.reply("This is a ratelimited command");
    }
}
