import { User } from "../models/user";

export default interface UserRepository {
    getUserById(id: string): Promise<User | undefined>;

    save(user: User): Promise<User>;
}
