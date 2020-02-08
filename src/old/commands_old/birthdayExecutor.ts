/*
import { Message } from 'discord.js';
import { UserEntity } from '../../models/userEntity';
import { Dictionary } from '../../models/dictionary';
import { Config } from '../../config/config';
import { Executor } from './executor';

export class BirthdayExecutor implements Executor {
    public static addBirthday: string = 'add';
    public static confirmBirthday: string = 'confirm';
    public static denyBirthday: string = 'deny';
    public static listBirthday: string = 'list';

    private userStorage: Dictionary<UserEntity> = {};

    constructor() {}

    public execute(args: string[], rawArgs: string, message: Message, command: string): void {
        switch (command) {
            case BirthdayExecutor.addBirthday:
                this.addBirthday(message);
                break;
            case BirthdayExecutor.confirmBirthday:
                this.confirmSave(args, message);
                break;
            case BirthdayExecutor.denyBirthday:
                this.denySave(args, message);
                break;
            case BirthdayExecutor.listBirthday:
                this.listBirthdays(message);
                break;
        }
    }

    private addBirthday(message: Message): void {
        const firstUser = message.mentions.users.first();
        //FIXME: Remove after regex is done
        if (firstUser) {
            let confirmationCode = Math.random()
                .toString(36)
                .substring(4);
            const userEntity = new UserEntity(firstUser.id, false, new Date(), confirmationCode, message.guild.id);
            this.userStorage[confirmationCode] = userEntity;
            firstUser.send(
                `Is it ok if user adding your birthday to server ${message.guild}? Type ${Config.PREFIX}confirm ${confirmationCode} /${Config.PREFIX}deny ${confirmationCode}`,
            );
            message.reply('User is asked for confirmation to save the birthday.');
        }
    }

    private confirmSave(args: string[], message: Message) {
        const confirmationCode = args[0];
        if (this.userStorage[confirmationCode]) {
            let userId = this.userStorage[confirmationCode].userId;
            if (message.author.id !== userId) {
                message.reply("You can't confirm someone elses birthday!");
                return;
            }
            message.reply('You have confirmed your birthday.');
            this.userStorage[confirmationCode].confirmation = true;
        } else {
            message.reply(`Your birthday isn't added yet!`);
        }
    }

    private denySave(args: string[], message: Message) {
        let confirmationCode = args[0];
        let authorId = message.author.id;

        if (this.userStorage[confirmationCode]) {
            if (this.userStorage[confirmationCode].userId !== authorId) {
                message.reply("You can't deny someone elses birthday!");
                return;
            }
            message.reply('You have denied saving your birthday.');
            delete this.userStorage[confirmationCode];
        } else {
            message.reply(`Your birthday isn't added yet!`);
        }
    }

    private listBirthdays(message: Message) {
        message.reply(`Here are all the birthdays. ${JSON.stringify(this.userStorage)}`);
    }
}
*/