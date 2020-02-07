import { MessageHandler } from 'discord-message-handler';
import { Constants } from '../constants';
import { Message } from 'discord.js';
import { Dictionary } from '../dictionary';
import { UserEntity } from '../userEntity';
import { BirthdayCommandExecutor } from '../commands/birthdayCommandExecutor';

export class BirthdayHandler {
    private handler: MessageHandler;
    private executor: BirthdayCommandExecutor = new BirthdayCommandExecutor();

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
            .onCommand(`${Constants.PREFIX}${BirthdayCommandExecutor.addBirthday}`)
            .minArgs(2)
            .whenInvalid(`Use ${Constants.PREFIX}add <mention> <Date in dd.mm.YYYY>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayCommandExecutor.addBirthday);
            });

        this.handler
            .onCommand(`${Constants.PREFIX}${BirthdayCommandExecutor.confirmBirthday}`)
            .minArgs(1)
            .whenInvalid(`Please use ${Constants.PREFIX}confirm <confirmationCode>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayCommandExecutor.confirmBirthday);
            });

        this.handler
            .onCommand(`${Constants.PREFIX}${BirthdayCommandExecutor.denyBirthday}`)
            .minArgs(1)
            .whenInvalid(`Please use ${Constants.PREFIX}deny <confirmationCode>`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayCommandExecutor.denyBirthday);
            });
    }

    private initGetCommands() {
        this.handler
            .onCommand(`${Constants.PREFIX}${BirthdayCommandExecutor.listBirthday}`)
            .alias(`${Constants.PREFIX}birthdays`)
            .minArgs(0)
            .whenInvalid(`Just use ${Constants.PREFIX}list`)
            .do((args: string[], rawArgs: string, message: Message) => {
                this.executor.execute(args,rawArgs,message,BirthdayCommandExecutor.listBirthday);
            });
    }
}
