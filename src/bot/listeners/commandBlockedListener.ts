import { Listener, Command } from "discord-akairo";
import { Message } from "discord.js";

export default class CommandBlockedListener extends Listener {
    constructor() {
        super('commandBlocked',{
            emitter: 'commandHandler',
            eventName: 'commandBlocked',
            type: 'once' // only run once if started, if triggerred 
        });
    }

    exec(message: Message, command : Command, reason: string) : void {
        console.log(`${message.author.username} was blocked from using ${command.id} because of ${reason}!`);
    }
}