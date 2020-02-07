import { CommandExecutor } from './commandExecutor';
import { Message } from 'discord.js';

export class HelloWorldCommandExecutor implements CommandExecutor {
    public static helloWorld = 'hello';

    public execute(args: string[], rawArgs: string, message: any, command: string): void {
        switch (command) {
            case HelloWorldCommandExecutor.helloWorld:
                this.helloWorld(args,message);
                break;
        }
    }

    private helloWorld(args: string[], message: Message) {
        console.log(args);
        message.reply('world');
    }
}
