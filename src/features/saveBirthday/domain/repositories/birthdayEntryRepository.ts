import { BirthdayEntry } from "../models/birthdayEntry";

export interface BirthdayEntryRepository {
    find(name: string, birthday: Date, userId: string): Promise<BirthdayEntry | undefined>;

    findById(id: string): Promise<BirthdayEntry | undefined>;

    save(birthdayEntry: BirthdayEntry): Promise<BirthdayEntry>;
}
