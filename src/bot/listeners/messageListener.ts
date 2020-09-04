import { Listener } from "discord-akairo";
import { Message } from "discord.js";

export default class MessageListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message'
        });
    }

    exec(message: Message): void {
        console.log(`${message.author.username} from Guild ${message.guild}(ID: ${message.guild?.id}) says: ${message.content}`);
    }
}