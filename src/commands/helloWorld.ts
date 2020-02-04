import { MessageHandler } from 'discord-message-handler';
import { Constants } from '../constants';
import { Message } from 'discord.js';

export class HelloWorldCommands {
    private handler: MessageHandler;

    static setup(handler: MessageHandler): void {
        new HelloWorldCommands(handler);
    }

    private constructor(handler: MessageHandler) {
        this.handler = new MessageHandler(handler);
        this.initCommands();
    }

    private initCommands(): void {
        this.initHelloWorld();
    }

    private initHelloWorld() {
        this.handler.onCommand(`${Constants.PREFIX}hello`).do((args: string[], rawArgs: string, message: Message) => {
            console.log(args);
            message.reply('world');
        });
    }
}
