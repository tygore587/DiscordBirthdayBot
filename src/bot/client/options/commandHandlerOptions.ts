import { CommandHandlerOptions } from "discord-akairo";
import { Config } from "../../../core/config/config";
import { join } from "path";

export const commandHandlerOptions: CommandHandlerOptions = {

    prefix: Config.PREFIX,
    commandUtil: true,
    blockBots: true,
    allowMention: true, // this allows to use @Bot <command> as well as <prefix>command 
    directory: join(__dirname, "../../commands"), // folder to declare commands
};