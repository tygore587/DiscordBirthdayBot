import { MessageHandler } from 'discord-message-handler';
import { Constants } from '../constants';
import { Message } from 'discord.js';
import { HelloWorldCommandExecutor } from '../commands/helloWorldCommandExecutor';

export class HelloWorldHandler {
    private handler: MessageHandler;
    private executor: HelloWorldCommandExecutor = new HelloWorldCommandExecutor();

    static setup(handler: MessageHandler): void {
        new HelloWorldHandler(handler);
    }

    private constructor(handler: MessageHandler) {
        this.handler = new MessageHandler(handler);
        this.initCommands();
    }

    private initCommands(): void {
        this.initHelloWorld();
    }

    private initHelloWorld() {
        this.handler.onCommand(`${Constants.PREFIX}${HelloWorldCommandExecutor.helloWorld}`).do((args: string[], rawArgs: string, message: Message) => {
            this.executor.execute(args,rawArgs,message,HelloWorldCommandExecutor.helloWorld);
            
        });
    }
}
