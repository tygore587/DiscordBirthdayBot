import { BirthdayEntry } from "../models/birthdayEntry";

export interface BirthdayEntryManager {
    save(birthdayEntry: BirthdayEntry): Promise<BirthdayEntry>;
}
