import { Listener } from "discord-akairo";
import { Config } from "../config/config";

export default class ReadyListener extends Listener {
    constructor() {
        super('ready',{
            emitter: 'client',
            eventName: 'ready'
        });
    }

    exec() : void {
        console.log(`I'm online, my name is ${this.client.user.username}`);
        console.log(`My prefix is: ${Config.PREFIX}`);
        console.log(`I'm running in the following environment:  ${Config.IS_DEVELOPMENT ? 'development' : 'production'}`);
        this.client.user.setPresence({
            status: 'dnd',
            game: {
                name: Config.STATUS_MESSAGE,
                type: 'WATCHING',
            },
        });
    }
}