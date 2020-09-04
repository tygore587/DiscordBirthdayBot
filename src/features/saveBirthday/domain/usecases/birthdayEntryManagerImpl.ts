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

    save(birthdayEntry: BirthdayEntry): Promise<BirthdayEntry> {
        return this.birthdayRepository.save(birthdayEntry);
    }
}
