import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Confirmation } from './confirmation';
import { User } from './user';
import { Guild as DiscordGuild } from 'discord.js';

@Entity()
export class Guild {
    @PrimaryColumn('varchar')
    id!: string;

    @Column('varchar')
    displayName!: string;

    @ManyToMany(
        () => User,
        user => user.guilds,
    )
    users!: User[];

    @OneToMany(
        () => Confirmation,
        confirmation => confirmation.guild,
        {
            nullable: true,
        },
    )
    confirmations?: Confirmation[];

    constructor(init?: Partial<Guild>) {
        Object.assign(this, init);
    }

    static FromDiscordGuild(discordGuild: DiscordGuild): Guild {
        return new Guild({
            id: discordGuild.id,
            displayName: discordGuild.name,
        });
    }
}
