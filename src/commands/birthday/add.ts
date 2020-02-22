import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { Config } from '../../config/config';
import { UserEntity } from '../../models/userEntity';
import { StorageManager } from '../../entity/storageManager';
import { Constants } from '../../util/constants';
import { parseDateExact } from '../../util/momentUtil';
import { User } from '../../entity/models/user';
import { Guild } from '../../entity/models/guild';
import { getRepository, getConnection } from 'typeorm';

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
                    type: (date: string): string | undefined => parseDateExact(date, Constants.DATE_FORMAT),
                },
            ],
            channelRestriction: 'guild',
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async exec(message: Message, args: any): Promise<Message | Message[]> {
        if (!args.user || !args.date) {
            return message.reply(
                `You have to use the command correctly: ${Config.PREFIX}add <userMention> <date in format:  ${Constants.DATE_FORMAT}>`,
            );
        }

        const birthdayExists = StorageManager.BirthdayExists(args.user.id, message.guild.id);

        if (birthdayExists) {
            return message.reply('This person is already added to the server.');
        }

        const userAndAuthorSame = args.user.id === message.author.id;

        const messageGuild = message.guild;

        const guild = new Guild();
        guild.id = messageGuild.id;
        guild.displayName = messageGuild.name;

        
        const guildRepo = getRepository(Guild);
        await guildRepo.save(guild);

        const userRepo = getRepository(User);

        const confirmationCode = Math.random()
            .toString(36)
            .substring(4);

        const user = new User();
        user.id = args.user.id;
        user.birthDay = new Date(1, 1, 1);
        user.confirmation = userAndAuthorSame;
        user.confirmationCode = confirmationCode;
        
        await userRepo.save(user);

        await getConnection().createQueryBuilder().relation(User,'guilds').of(user).add(guild);

        
        
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
