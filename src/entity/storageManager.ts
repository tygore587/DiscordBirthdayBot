import { Dictionary } from '../models/dictionary';
import { UserEntity } from '../models/userEntity';
import _ from 'lodash';

export class StorageManager {
    static tempStorage: Dictionary<UserEntity> = {};

    static Set(key: string, value: UserEntity) : void{
        this.tempStorage[key] = value;
    }

    static Get(key: string): UserEntity | undefined {
        return this.tempStorage[key];
    }

    static Remove(key: string): void {
        delete this.tempStorage[key];
    }

    static GetByGuildId(guildId: string): UserEntity[] {
        return _.filter(Object.values(this.tempStorage), { guildId: guildId });
    }

    static BirthdayExists(userId: string, guildId: string ): boolean {
        return _.filter(Object.values(this.tempStorage), { userId: userId, guildId : guildId }).length > 0;
    }

    static Clear() : void {
        this.tempStorage = {};
    }
}
