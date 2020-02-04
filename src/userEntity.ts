export class UserEntity {
    userId: string;
    confirmation: boolean;
    birthDay: Date;
    confirmationCode: string;
    guildId: string;

    constructor(userId: string, confirmation: boolean, birthDay: Date, confirmationCode: string, guildId: string) {
        this.userId = userId;
        this.confirmation = confirmation;
        this.birthDay = birthDay;
        this.confirmationCode = confirmationCode;
        this.guildId = guildId;
    }
}
