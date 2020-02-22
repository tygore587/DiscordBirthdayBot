import { Inhibitor } from "discord-akairo";
import { Message } from "discord.js";

export default class BlacklistInhibitor extends Inhibitor {
    constructor() {
        super('blacklist', {
            reason: 'blacklist'
        })
    }

    exec(message: Message): boolean {
        const blacklist = ['INSERT_ID_HERE'];
        return blacklist.includes(message.author.id); // return true/false or reject a promise if you want to block a specifig user/message
    }
}