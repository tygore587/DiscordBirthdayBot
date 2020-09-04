import { AkairoHandlerOptions } from "discord-akairo";
import { join } from "path";

export const listenerOptions: AkairoHandlerOptions = {
    directory: join(__dirname, "../../listeners"), // folder to declare inhibitors
};