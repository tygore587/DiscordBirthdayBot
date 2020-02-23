import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Guild } from './guild';
import { User } from './user';

@Entity()
export class Confirmation {
    @PrimaryColumn('varchar')
    confirmationCode!: string;

    @ManyToOne(
        () => Guild,
        guild => guild.confirmations,
    )
    guild!: Guild;

    @ManyToOne(
        () => User,
        user => user.confirmations,
    )
    user!: User;

    constructor(init?:Partial<Confirmation>) {
        Object.assign(this,init);
    }
}
