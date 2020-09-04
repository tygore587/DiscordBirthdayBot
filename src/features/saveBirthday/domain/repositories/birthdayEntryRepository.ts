import { BirthdayEntry } from "../models/birthdayEntry";

export interface BirthdayEntryRepository {
    getBirthdayEntryById(id: string): Promise<BirthdayEntry | undefined>;

    save(birthdayEntry: BirthdayEntry): Promise<BirthdayEntry>;
}
