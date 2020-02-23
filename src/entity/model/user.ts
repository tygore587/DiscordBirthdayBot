import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Confirmation } from './confirmation';
import { Guild } from './guild';
import { User as DiscordUser } from 'discord.js';

@Entity()
export class User {
    @PrimaryColumn()
    id!: string;

    @Column('date')
    birthDay!: Date;

    @ManyToMany(
        () => Guild,
        guild => guild.users,
    )
    @JoinTable()
    guilds!: Guild[];

    @OneToMany(
        () => Confirmation,
        confirmation => confirmation.user,
        {
            nullable: true,
        },
    )
    confirmations?: Confirmation[];

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    static FromDiscordUser(discordUser: DiscordUser): User {
        return new User({ id: discordUser.id });
    }
}
