import { User as DiscordUser } from "discord.js";
import _ from "lodash";
import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { BirthdayEntryEntity } from "../../../../../features/saveBirthday/data/entities/birthdayEntryEntity";
import { User } from "../../../domain/users/models/user";

@Entity("User")
export class UserEntity {
    @PrimaryColumn()
    id!: string;

    @OneToMany(
        type => BirthdayEntryEntity,
        birthdayEntry => birthdayEntry.user,
    )
    birthdayEntries!: BirthdayEntryEntity[];

    constructor(init?: Partial<UserEntity>) {
        Object.assign(this, init);
    }

    static fromDiscordUser(discordUser: DiscordUser): UserEntity {
        return new UserEntity({ id: discordUser.id });
    }

    toUser(): User {
        return new User({
            id: this.id,
            birthDayEntries: _.map(this.birthdayEntries, entry => entry.toBirthDayEntry()),
        });
    }
}
