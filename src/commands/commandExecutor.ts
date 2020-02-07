export interface CommandExecutor {
    execute(args: string[], rawArgs: string, message: Message, command: string) : void;
}