import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Guild } from '../model/guild';

@Service()
export class GuildRepository {
    constructor(@InjectRepository(Guild) private repository: Repository<Guild>) {}

    async findById(id: string): Promise<Guild | undefined> {
        return this.repository.findOne({ id });
    }

    async save(guild: Guild) : Promise<Guild> {
        return this.repository.save(guild);
    }
}
