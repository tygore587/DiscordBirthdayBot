import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from "discord-akairo";
import { Config } from "../../core/config/config";
import { akairoOptions } from "./options/akairoOptions";
import { commandHandlerOptions } from "./options/commandHandlerOptions";
import { inhibitorOptions } from "./options/inhibitorHandlerOptions";
import { listenerOptions } from "./options/listenerHandlerOptions";

export class BotClient extends AkairoClient {
    commandHandler: CommandHandler;
    inhibitorHandler: InhibitorHandler;
    listenerHandler: ListenerHandler;


    constructor() {
        super(akairoOptions);

        this.commandHandler = new CommandHandler(this, commandHandlerOptions);
        this.commandHandler.loadAll();

        this.inhibitorHandler = new InhibitorHandler(this, inhibitorOptions);
        this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
        this.inhibitorHandler.loadAll();

        this.listenerHandler = new ListenerHandler(this, listenerOptions);
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            inhibitorHandler: this.inhibitorHandler,
            listenerHandler: this.listenerHandler,
        });
        this.listenerHandler.loadAll();
    }

    static async initialize(): Promise<BotClient> {
        const client = new BotClient();
        client.login(`${Config.TOKEN}`);
        return client;
    }
}
