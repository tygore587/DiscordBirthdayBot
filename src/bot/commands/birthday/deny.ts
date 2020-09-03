import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { Config } from '../../../core/config/config';
import { StorageManager } from '../../entity/storageManager';

export default class ConfirmBirthdayCommand extends Command {
    constructor() {
        super('deny', {
            aliases: ['deny'],
            args: [
                {
                    id: 'confirmationCode',
                    type: 'string',
                },
            ],
            channelRestriction: 'dm',
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    exec(message: Message, args: any): Promise<Message | Message[]> {
        if (!args.confirmationCode) {
            return message.reply(`You have to use the command correctly: ${Config.PREFIX}deny <confirmationCode>`);
        }

        const userEntity = StorageManager.Get(args.confirmationCode);

        if (!userEntity) {
            return message.reply('Unknown confirmationcode');
        }

        if (message.author.id !== userEntity.userId) {
            return message.reply("You can't deny someone elses birthday!");
        }
        userEntity.confirmation = true;

        StorageManager.Remove(args.confirmationCode);
        // TODO: Save name of Guild in seperate DB table for this message to have the name.
        return message.reply(`You have deleted your birthday. It was NOT added to ${userEntity.guildId}`);
    }
}
