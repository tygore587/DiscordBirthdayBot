import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { User } from '../model/user';
import { Guild } from '../model/guild';

@Service()
export class UserRepository {
    constructor(@InjectRepository(User) private repository: Repository<User>) {}

    async findById(id: string): Promise<User | undefined> {
        return this.repository.findOne({ id });
    }

    async addUserToAnotherGuild(user: User, guild: Guild): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .relation(User, 'guilds')
            .of(user)
            .add(guild);
    }

    async save(user: User): Promise<User> {
        return this.repository.save(user);
    }
}
