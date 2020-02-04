import { MessageHandler } from 'discord-message-handler';
import { Constants } from '../constants';
import { Message } from 'discord.js';
import { Dictionary } from '../dictionary';
import { UserEntity } from '../userEntity';

export class BirthdayCommands {
    private handler: MessageHandler;
    private userStorage: Dictionary<UserEntity>;

    static setup(handler: MessageHandler, userStorage: Dictionary<UserEntity>): void {
        new BirthdayCommands(handler, userStorage);
    }

    private constructor(handler: MessageHandler, userStorage: Dictionary<UserEntity>) {
        this.handler = new MessageHandler(handler);
        this.userStorage = userStorage;
        this.initCommands();
    }

    private initCommands(): void {
        this.initAddCommands();
        this.initGetCommands();
    }

    private initAddCommands() {
        this.handler
            .onCommand(`${Constants.PREFIX}add`)
            .minArgs(2)
            .whenInvalid(`Use ${Constants.PREFIX}add <mention> <Date in dd.mm.YYYY>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                const firstUser = message.mentions.users.first();
                //FIXME: Remove after regex is done
                if (firstUser) {
                    let confirmationCode = Math.random()
                        .toString(36)
                        .substring(4);
                    const userEntity = new UserEntity(
                        firstUser.id,
                        false,
                        new Date(),
                        confirmationCode,
                        message.guild.id,
                    );
                    this.userStorage[confirmationCode] = userEntity;
                    firstUser.send(
                        `Is it ok if user adding your birthday to server ${message.guild}? Type ${Constants.PREFIX}confirm ${confirmationCode} /${Constants.PREFIX}deny ${confirmationCode}`,
                    );
                    message.reply('User is asked for confirmation to save the birthday.');
                }
            });

        this.handler
            .onCommand(`${Constants.PREFIX}confirm`)
            .minArgs(1)
            .whenInvalid(`Please use ${Constants.PREFIX}confirm <confirmationCode>`)
            .do((args: string[], rawArgs: string, message: Message) => {
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
            });

        this.handler
            .onCommand(`${Constants.PREFIX}deny`)
            .minArgs(1)
            .whenInvalid(`Please use ${Constants.PREFIX}deny <confirmationCode>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                let confirmationCode = args[0]
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
            });
    }

    private initGetCommands() {
        this.handler
            .onCommand(`${Constants.PREFIX}list`)
            .alias(`${Constants.PREFIX}birthdays`)
            .minArgs(0)
            .whenInvalid(`Just use ${Constants.PREFIX}list`)
            .do((args: string[], rawArgs: string, message: Message) => {
                message.reply(`Here are all the birthdays. ${JSON.stringify(this.userStorage)}`);
            });
    }
}
