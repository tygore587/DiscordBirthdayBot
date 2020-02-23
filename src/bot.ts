import 'reflect-metadata'; // needed for typeorm
import { AkairoClient, AkairoOptions } from 'discord-akairo';
import { join } from 'path';
import { Container } from 'typedi';
import { Connection, createConnection, useContainer } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Config } from './config/config';

export class App {
    async connectToDiscord(): Promise<void> {
        const akairoOptions: AkairoOptions = {
            ownerID: Config.OWNER,
            prefix: Config.PREFIX,
            commandUtil: true,
            blockBots: true,
            allowMention: true, // this allows to use @Bot <command> as well as <prefix>command
            commandDirectory: join(__dirname, 'commands'), // folder to declare commands
            inhibitorDirectory: join(__dirname, 'inhibitors'), // folder to declare when command should be ignored
            listenerDirectory: join(__dirname, 'listeners'), // just to listen to events of discord like ready or message or something else
        };

        const client = new AkairoClient(akairoOptions, {});
        client.login(`${Config.TOKEN}`);
    }

    async connectToDatabase(): Promise<Connection> {
        const connectionOptions: PostgresConnectionOptions = {
            type: 'postgres',
            host: Config.DatabaseConfig.DATABASE_URL,
            port: 5432,
            username: Config.DatabaseConfig.DATABASE_USERNAME,
            password: Config.DatabaseConfig.DATABASE_PASSWORD,
            database: 'bot',
            entities: [__dirname + '/entity/model/*.ts'],
            synchronize: true,
            logging: false,
        };

        useContainer(Container);
        try {
            const connection = await createConnection(connectionOptions);
            console.log('Successfully connected to postgres');
            return connection;
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    }

    async start(): Promise<void> {
        await this.connectToDatabase();
        this.connectToDiscord();
    }
}

const app = new App();
app.start();
