import { Dictionary } from '../models/dictionary';
import { UserEntity } from '../models/userEntity';

export class StorageManager {
    static tempStorage: Dictionary<UserEntity> = {};

    static Set(key: string, value: UserEntity) {
        this.tempStorage[key] = value;
    }

    static Get(key: string): UserEntity | undefined {
        return this.tempStorage[key];
    }

    static Clear() {
        this.tempStorage = {};
    }
}
