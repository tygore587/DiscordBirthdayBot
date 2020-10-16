import { Service } from "typedi";
import { BirthdayEntryRepositoryImpl } from "../../data/BirthdayEntryRepositoryImpl";
import { BirthdayEntry } from "../models/birthdayEntry";
import { BirthdayEntryRepository } from "../repositories/birthdayEntryRepository";
import { BirthdayEntryManager } from "./birthdayEntryManager";

@Service()
export class BirthdayEntryManagerImpl implements BirthdayEntryManager {
    private birthdayRepository: BirthdayEntryRepository;

    constructor(birthdayRepository: BirthdayEntryRepositoryImpl) {
        this.birthdayRepository = birthdayRepository;
    }
    async exists(name: string, birthday: Date, userId: string): Promise<boolean> {
        let birthdayEntry = await this.birthdayRepository.find(name, birthday, userId);
        return birthdayEntry != undefined;
    }

    save(birthdayEntry: BirthdayEntry): Promise<BirthdayEntry> {
        return this.birthdayRepository.save(birthdayEntry);
    }
}
