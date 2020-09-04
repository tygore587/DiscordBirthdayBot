import { User } from "../models/user";

export interface UserManager {
    getUserById(id: string): Promise<User | undefined>;

    save(user: User): Promise<User>;
}
