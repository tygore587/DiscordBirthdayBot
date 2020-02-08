/*import { Executor } from './executor';
import { Message } from 'discord.js';

export class HelloWorldExecutor implements Executor {
    public static helloWorld = 'hello';

    public execute(args: string[], rawArgs: string, message: any, command: string): void {
        switch (command) {
            case HelloWorldExecutor.helloWorld:
                this.helloWorld(args,message);
                break;
        }
    }

    private helloWorld(args: string[], message: Message) {
        console.log(args);
        message.reply('world');
    }
}
*/