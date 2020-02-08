import { MessageHandler } from 'discord-message-handler';
import { Constants } from '../config/constants';
import { Message } from 'discord.js';
import { Dictionary } from '../models/dictionary';
import { UserEntity } from '../models/userEntity';
import { BirthdayExecutor } from '../old/commands_old/birthdayExecutor';

export class BirthdayHandler {
    private handler: MessageHandler;
    private executor: BirthdayExecutor = new BirthdayExecutor();

    static setup(handler: MessageHandler): void {
        new BirthdayHandler(handler);
    }

    private constructor(handler: MessageHandler) {
        this.handler = new MessageHandler(handler);
        this.initCommands();
    }

    private initCommands(): void {
        this.initAddCommands();
        this.initGetCommands();
    }

    private initAddCommands() {
        this.handler
            .onCommand(`${Constants.PREFIX}${BirthdayExecutor.addBirthday}`)
            .minArgs(2)
            .whenInvalid(`Use ${Constants.PREFIX}add <mention> <Date in dd.mm.YYYY>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayExecutor.addBirthday);
            });

        this.handler
            .onCommand(`${Constants.PREFIX}${BirthdayExecutor.confirmBirthday}`)
            .minArgs(1)
            .whenInvalid(`Please use ${Constants.PREFIX}confirm <confirmationCode>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayExecutor.confirmBirthday);
            });

        this.handler
            .onCommand(`${Constants.PREFIX}${BirthdayExecutor.denyBirthday}`)
            .minArgs(1)
            .whenInvalid(`Please use ${Constants.PREFIX}deny <confirmationCode>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayExecutor.denyBirthday);
            });
    }

    private initGetCommands() {
        this.handler
            .onCommand(`${Constants.PREFIX}${BirthdayExecutor.listBirthday}`)
            .alias(`${Constants.PREFIX}birthdays`)
            .minArgs(0)
            .whenInvalid(`Just use ${Constants.PREFIX}list`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayExecutor.listBirthday);
            });
    }
}
