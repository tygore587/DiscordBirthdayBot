import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from './user';

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
}
