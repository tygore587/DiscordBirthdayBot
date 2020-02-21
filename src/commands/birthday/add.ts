import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { parseDateExact } from '../../util/momentUtil';
import { Constants } from '../../util/constants';
import { Config } from '../../config/config';
import { UserEntity } from '../../models/userEntity';
import { StorageManager } from '../../persistence/storageManager';

export default class AddBirthdayCommand extends Command {
    constructor() {
        super('add', {
            aliases: ['add'],
            args: [
                {
                    id: 'user',
                    type: 'user',
                },
                {
                    id: 'date',
                    type: date => parseDateExact(date, Constants.DATE_FORMATS),
                },
            ],
            channelRestriction: 'guild',
        });
    }

    exec(message: Message, args: any) {
        if (!args.user || !args.date) {
            message.reply(
                `You have to use the command correctly: ${Config.PREFIX}add <userMention> <date in format:  ${Constants.DATE_FORMATS.join(' or ')}>`,
            );
            return Promise.reject();
        }

        let user = StorageManager.BirthdayExists(args.user.id,message.guild.id);

        if (user) {
            return message.reply('This person is already added to the server.')
        }

        let confirmationCode = Math.random()
            .toString(36)
            .substring(4);

        let userAndAuthorSame = args.user.id === message.author.id;

        const userEntity = new UserEntity(
            args.user.id,
            userAndAuthorSame,
            new Date(),
            confirmationCode,
            message.guild.id,
        );
        StorageManager.Set(confirmationCode, userEntity);

        let result: Promise<Message | Message[]>;

        if (!userAndAuthorSame) {
            args.user.send(
                `Is it ok if user adding your birthday to server ${message.guild}? Type ${Config.PREFIX}confirm ${confirmationCode} /${Config.PREFIX}deny ${confirmationCode}`,
            );
            result = message.reply('User is asked for confirmation to save the birthday.');
        } else {
            result = message.reply('You added yourself successfully to the birthday list.');
        }

        return result;
    }
}
