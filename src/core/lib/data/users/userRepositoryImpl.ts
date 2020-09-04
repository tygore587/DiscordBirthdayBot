import { Service } from "typedi";
import { User } from "../../domain/users/models/user";
import UserRepository from "../../domain/users/repositories/userRepository";
import { UserRemoteDataSource, UserRemoteDataSourceImpl } from "./datasources/userRemoteDataSource";

@Service()
export class UserRepositoryImpl implements UserRepository {
    remoteDataSource: UserRemoteDataSource;

    constructor(remoteDataSource: UserRemoteDataSourceImpl) {
        this.remoteDataSource = remoteDataSource;
    }

    async getUserById(id: string): Promise<User | undefined> {
        const findResult = await this.remoteDataSource.findById(id);

        return findResult?.toUser();
    }

    async save(user: User): Promise<User> {
        const saveResult = await this.remoteDataSource.save(user.toUserEntity());

        return saveResult.toUser();
    }
}
