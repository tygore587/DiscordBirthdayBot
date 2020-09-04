import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "../../../../core/lib/data/users/entities/userEntity";
import { BirthdayEntry } from "../../domain/models/birthdayEntry";

@Entity("BirthdayEntry")
export class BirthdayEntryEntity {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column("date")
    birthDay!: Date;

    @ManyToOne(
        type => UserEntity,
        userEntity => userEntity.birthdayEntries,
    )
    user!: UserEntity;

    constructor(id: string, name: string, birthDay: Date, user: UserEntity) {
        this.id = id;
        this.name = name;
        this.birthDay = birthDay;
        this.user = user;
    }

    toBirthDayEntry(): BirthdayEntry {
        return new BirthdayEntry(this.id, this.name, this.birthDay, this.user.id);
    }
}
