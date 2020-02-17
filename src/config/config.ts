import '../env';
export class Config {
    static OWNER: string | undefined = process.env.OWNER;
    static TOKEN: string | undefined = process.env.TOKEN;
    static ENVIRONMENT: string | undefined = process.env.ENVIRONMENT;
    static PREFIX: string = Config.ENVIRONMENT == 'production' ? '!' : '?';
    static STATUS_MESSAGE: string =
        Config.ENVIRONMENT == 'production' ? 'Ich bin produktiv.' : 'Ich werde gerade entwickelt.';
}
