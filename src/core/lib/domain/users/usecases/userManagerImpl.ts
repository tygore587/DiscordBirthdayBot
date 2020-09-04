import { Service } from "typedi";
import { UserRepositoryImpl } from "../../../data/users/userRepositoryImpl";
import { User } from "../models/user";
import UserRepository from "../repositories/userRepository";
import { UserManager } from "./userManager";

@Service()
export class UserManagerImpl implements UserManager {
    userRepository: UserRepository;

    constructor(userRepository: UserRepositoryImpl) {
        this.userRepository = userRepository;
    }

    getUserById(id: string): Promise<User | undefined> {
        return this.userRepository.getUserById(id);
    }
    save(user: User): Promise<User> {
        return this.userRepository.save(user);
    }
}
