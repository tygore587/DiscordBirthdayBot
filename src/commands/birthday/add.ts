import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import Container, { Inject, Service } from 'typedi';
import { getConnection, getRepository } from 'typeorm';
import { Config } from '../../config/config';
import { Confirmation } from '../../entity/model/confirmation';
import { Guild } from '../../entity/model/guild';
import { User } from '../../entity/model/user';
import { ConfirmationRepository } from '../../entity/repository/confirmationRepository';
import { StorageManager } from '../../entity/storageManager';
import { UserEntity } from '../../models/userEntity';
import { Constants } from '../../util/constants';
import { parseDateExact } from '../../util/momentUtil';
import { UserRepository } from '../../entity/repository/userRepository';
import { GuildRepository } from '../../entity/repository/guildRepository';
import { ConfirmationService } from '../../service/confirmationService';

@Service()
export default class AddBirthdayCommand extends Command {

    confirmationService : ConfirmationService;
    userRepo : UserRepository;
    guildRepo: GuildRepository;

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

        this.confirmationService = Container.get(ConfirmationService);
        this.userRepo = Container.get(UserRepository);
        this.guildRepo = Container.get(GuildRepository);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async exec(message: Message, args: any): Promise<Message | Message[]> {
        if (!args.user || !args.date) {
            return message.reply(
                `You have to use the command correctly: ${Config.PREFIX}add <userMention> <date in format:  ${Constants.DATE_FORMAT}>`,
            );
        }

        const messageGuild = message.guild;
        const argsUser = args.user;

        const birthdayExists = await this.confirmationService.confirmationExists(messageGuild.id,argsUser.id);

        if (birthdayExists) {
            return message.reply('This person is already added to the server.');
        }

        const userAndAuthorSame = args.user.id === message.author.id;

        const guild = Guild.FromDiscordGuild(messageGuild);
        await this.guildRepo.save(guild);

        const confirmationCode = Math.random()
            .toString(36)
            .substring(4);

        const user = User.FromDiscordUser(argsUser);
        user.birthDay = new Date(1, 1, 1);

        await this.userRepo.save(user);
        await this.userRepo.addUserToAnotherGuild(user,guild);
        
        const confirmation = new Confirmation({
            confirmationCode : confirmationCode,
            guild : guild,
            user : user
        });
        
        await this.confirmationService.addOrUpdate(confirmation);

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
