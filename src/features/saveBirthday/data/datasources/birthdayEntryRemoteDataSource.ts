import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { BirthdayEntryEntity } from "../entities/birthdayEntryEntity";

export interface BirthdayEntryRemoteDataSource {
    findById(id: string): Promise<BirthdayEntryEntity | undefined>;

    save(birthdayEntry: BirthdayEntryEntity): Promise<BirthdayEntryEntity>;
}

@Service()
export class BirthdayEntryRemoteDataSourceImpl implements BirthdayEntryRemoteDataSource {
    constructor(@InjectRepository(BirthdayEntryEntity) private repository: Repository<BirthdayEntryEntity>) {}

    async findById(id: string): Promise<BirthdayEntryEntity | undefined> {
        return await this.repository.findOne({ id });
    }

    async save(birthdayEntry: BirthdayEntryEntity): Promise<BirthdayEntryEntity> {
        var updatedEntry = await this.repository.save(birthdayEntry);

        return updatedEntry;
    }
}
