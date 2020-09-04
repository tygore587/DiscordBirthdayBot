import { InhibitorOptions, AkairoHandlerOptions } from "discord-akairo";
import { join } from "path";

export const inhibitorOptions: AkairoHandlerOptions = {
    directory: join(__dirname, "../../inhibitors"), // folder to declare inhibitors
};