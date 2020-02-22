import '../env';


export class DatabaseConfig {
    DATABASE_URL: string | undefined = process.env.DATABASE_URL;
    DATABASE_USERNAME: string | undefined = process.env.DATABASE_USERNAME;
    DATABASE_PASSWORD: string | undefined = process.env.DATABASE_PASSWORD;
}


export class Config {
    static OWNER: string | undefined = process.env.OWNER;
    static TOKEN: string | undefined = process.env.TOKEN;
    static IS_DEVELOPMENT: boolean = process.env.ENVIRONMENT === 'development';
    static PREFIX: string = Config.IS_DEVELOPMENT ? '?' : '!';
    static STATUS_MESSAGE: string = Config.IS_DEVELOPMENT ? 'Ich werde gerade entwickelt.' : 'Ich bin produktiv.';
    static DatabaseConfig: DatabaseConfig = new DatabaseConfig();
}
