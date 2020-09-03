import { Message } from 'discord.js';
import { Command } from 'discord-akairo';

export default class BanCommand extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            args: [
                {
                    id: 'member',
                    type: 'member', // args for one command
                },
            ],
            clientPermissions: ['BAN_MEMBERS'],
            channelRestriction: 'guild',
        });
        this.userPermissions = this.checkPermissions; // set permissions for a specific command
    }

    checkPermissions(message: Message) : boolean {
        console.log(message.member.roles);
        return message.member.roles.some(role => role.name === "Moderator"); // test custom permissions if you don't want to test like the clientPermissions
    }

    exec(message: Message, args: any) {
        if (!args.member) {
            return message.reply('No member found with that name.');
        }
        return message.reply(`${args.member} ban was simulated!`); 
        /*
        return args.member.ban().then(() => {
            return message.reply(`${args.member} was banned!`);
        });
        */
    }
}
