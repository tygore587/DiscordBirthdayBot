import { Service } from "typedi";
import { BirthdayEntry } from "../domain/models/birthdayEntry";
import { BirthdayEntryRepository } from "../domain/repositories/birthdayEntryRepository";
import {
    BirthdayEntryRemoteDataSource,
    BirthdayEntryRemoteDataSourceImpl,
} from "./datasources/birthdayEntryRemoteDataSource";

@Service()
export class BirthdayEntryRepositoryImpl implements BirthdayEntryRepository {
    private remoteDataSource: BirthdayEntryRemoteDataSource;

    constructor(remoteDataSource: BirthdayEntryRemoteDataSourceImpl) {
        this.remoteDataSource = remoteDataSource;
    }
    async find(name: string, birthday: Date, userId: string): Promise<BirthdayEntry | undefined> {
        var entry = await this.remoteDataSource.find(name, birthday, userId);

        return entry?.toBirthDayEntry();
    }

    async findById(id: string): Promise<BirthdayEntry | undefined> {
        var entry = await this.remoteDataSource.findById(id);

        return entry?.toBirthDayEntry();
    }

    async save(birthdayEntry: BirthdayEntry): Promise<BirthdayEntry> {
        var updatedEntry = await this.remoteDataSource.save(birthdayEntry.toBirthdayEntryEntity());

        return updatedEntry.toBirthDayEntry();
    }
}
