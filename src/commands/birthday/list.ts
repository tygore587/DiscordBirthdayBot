import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { StorageManager } from '../../persistence/storageManager';

export default class ConfirmBirthdayCommand extends Command {
    constructor() {
        super('list', {
            aliases: ['list'],
            channelRestriction: 'guild',
        });
    }

    exec(message: Message): Promise<Message | Message[]> {
        const users = StorageManager.GetByGuildId(message.guild.id);
        return message.reply(JSON.stringify(users));
    }
}
