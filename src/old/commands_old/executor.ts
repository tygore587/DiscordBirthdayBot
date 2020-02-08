import { Message } from "discord.js";

export interface Executor {
    execute(args: string[], rawArgs: string, message: Message, command: string) : void;
}