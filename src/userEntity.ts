export class UserEntity {
    userId: string;
    confirmation: boolean;
    birthDay: Date;

    constructor(userId: string, confirmation: boolean, birthDay: Date) {
        this.userId = userId;
        this.confirmation = confirmation;
        this.birthDay = birthDay;
    }
}
