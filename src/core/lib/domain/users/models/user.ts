import _ from "lodash";
import { BirthdayEntry } from "../../../../../features/saveBirthday/domain/models/birthdayEntry";
import { UserEntity } from "../../../data/users/entities/userEntity";

export class User {
    public id!: string;
    public birthDayEntries?: BirthdayEntry[];

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    toUserEntity(): UserEntity {
        return new UserEntity({
            id: this.id,
            birthdayEntries: _.map(this.birthDayEntries, entry => entry.toBirthdayEntryEntity()),
        });
    }
}
