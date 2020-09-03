import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class TokenCommand extends Command {
    constructor() {
        super('owner', {
            aliases: ['owner'],
            ownerOnly: true, // only the owner can use this command
            channelRestriction: 'dm',
        } as any);
    }

    exec(message : Message) {
        return message.reply("Das ist eine Message, die nur der Owner sehen kann.");
    }
}
