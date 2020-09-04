import { UserEntity } from "../../../../core/lib/data/users/entities/userEntity";
import { BirthdayEntryEntity } from "../../data/entities/birthdayEntryEntity";

export class BirthdayEntry {
    id: string;
    name: string;
    date: Date;
    userId: string;

    constructor(id: string, name: string, date: Date, userId: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.userId = userId;
    }

    toBirthdayEntryEntity() {
        return new BirthdayEntryEntity(this.id, this.name, this.date, new UserEntity({ id: this.userId }));
    }
}
