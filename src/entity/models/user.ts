import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Guild } from './guild';

@Entity()
export class User {
    @PrimaryColumn()
    id!: string;

    @Column('varchar', {
        nullable: true,
    })
    confirmationCode?: string;

    @Column('date')
    birthDay!: Date;

    @Column('bool')
    confirmation!: boolean;

    @ManyToMany(
        () => Guild,
        guild => guild.users,
    )
    @JoinTable()
    guilds!: Guild[];
}
