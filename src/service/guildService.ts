import { Guild } from '../entity/model/guild';
import { Service } from 'typedi';
import { GuildRepository } from '../entity/repository/guildRepository';

@Service()
export class GuildService {
    constructor(private repo: GuildRepository) {}

    async save(guild: Guild): Promise<Guild> {
        return this.repo.save(guild);
    }
}
