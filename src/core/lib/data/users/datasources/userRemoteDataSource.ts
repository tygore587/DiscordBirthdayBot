import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserEntity } from "../entities/userEntity";

export interface UserRemoteDataSource {
    findById(id: string): Promise<UserEntity | undefined>;
    save(user: UserEntity): Promise<UserEntity>;
}

@Service()
export class UserRemoteDataSourceImpl implements UserRemoteDataSource {
    constructor(@InjectRepository(UserEntity) private repository: Repository<UserEntity>) {}

    async findById(id: string): Promise<UserEntity | undefined> {
        return await this.repository.findOne({ id: id });
    }

    async save(user: UserEntity): Promise<UserEntity> {
        return await this.repository.save(user);
    }
}
