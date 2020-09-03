import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Confirmation } from './confirmation';
import { Guild } from './guild';
import { User as DiscordUser } from 'discord.js';

@Entity()
export class UserEntity {
    @PrimaryColumn()
    id!: string;

    @Column('date')
    birthDay!: Date;

    @OneToMany(
        
    )
    confirmations?: Confirmation[];

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    static FromDiscordUser(discordUser: DiscordUser): User {
        return new User({ id: discordUser.id });
    }
}
