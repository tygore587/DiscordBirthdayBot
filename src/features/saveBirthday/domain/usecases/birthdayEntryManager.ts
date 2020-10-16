import { BirthdayEntry } from "../models/birthdayEntry";

export interface BirthdayEntryManager {
    save(birthdayEntry: BirthdayEntry): Promise<BirthdayEntry>;

    exists(name: string, birthday: Date, userId: string): Promise<boolean>;
}
