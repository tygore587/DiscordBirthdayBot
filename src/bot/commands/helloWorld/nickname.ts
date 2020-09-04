import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class NicknameCommand extends Command {
    constructor() {
        super('nickname', {
            aliases: ['nickname'],
            channel: 'guild', // restricts command to only be used in guilds
        });
    }

    exec(message: Message) {

        const messageText = message.member ? `Your nickname is ${message.member?.nickname}.` : `You don't have a nickname.`;
        return message.reply(messageText);
    }
}
