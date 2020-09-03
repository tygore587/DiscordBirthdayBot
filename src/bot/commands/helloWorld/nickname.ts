import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class NicknameCommand extends Command {
    constructor() {
        super('nickname', {
            aliases: ['nickname'],
            channelRestriction: 'guild', // restricts command to only be used in guilds
        });
    }

    exec(message: Message) {
        return message.reply(`Your nickname is ${message.member.nickname}.`);
    }
}
