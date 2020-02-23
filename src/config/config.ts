import '../env';

export class Config {
    static OWNER: string | undefined = process.env.OWNER;
    static TOKEN: string | undefined = process.env.TOKEN;
    static IS_DEVELOPMENT: boolean = process.env.NODE_ENV === 'development';
    static PREFIX: string = Config.IS_DEVELOPMENT ? '?' : '!';
    static STATUS_MESSAGE: string = Config.IS_DEVELOPMENT ? 'Ich werde gerade entwickelt.' : 'Ich bin produktiv.';
    static DATABASE_URL: string | undefined = process.env.DATABASE_URL;
}