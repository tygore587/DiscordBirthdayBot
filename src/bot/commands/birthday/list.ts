import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class ConfirmBirthdayCommand extends Command {
    constructor() {
        super("list", {
            aliases: ["list"],
            channelRestriction: "guild",
        });
    }

    exec(message: Message): void {}
}
