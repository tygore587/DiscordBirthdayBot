import { User } from "../../../data/users/entities/userEntity";

export default interface UserRepository {

    findById(id: string): Promise<User | undefined>
}