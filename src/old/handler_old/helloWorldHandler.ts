import { MessageHandler } from 'discord-message-handler';
import { Config } from '../../config/config';
import { Message } from 'discord.js';
import { HelloWorldExecutor } from '../commands_old/helloWorldExecutor';

export class HelloWorldHandler {
    private handler: MessageHandler;
    private executor: HelloWorldExecutor = new HelloWorldExecutor();

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
        this.handler.onCommand(`${Config.PREFIX}${HelloWorldExecutor.helloWorld}`).do((args: string[], rawArgs: string, message: Message) => {
            this.executor.execute(args,rawArgs,message,HelloWorldExecutor.helloWorld);
            
        });
    }
}
