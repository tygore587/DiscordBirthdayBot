import "reflect-metadata"; // needed for typeorm
import { AkairoClient } from "discord-akairo";
import { Container } from "typedi";
import { Connection, createConnection, useContainer } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { akairoOptions } from "./bot/config";
import { Config } from "./core/config/config";

// organize-imports-ignore

export class App {
    async connectToDiscord(): Promise<void> {
        const client = new AkairoClient(akairoOptions, {});
        client.login(`${Config.TOKEN}`);
    }

    async connectToDatabase(): Promise<Connection> {
        const fileEnding = Config.IS_DEVELOPMENT ? "*.ts" : "*.js";
        const connectionOptions: PostgresConnectionOptions = {
            type: "postgres",
            url: Config.DATABASE_URL,
            entities: [
                `${__dirname}/core/lib/data/**/entities/${fileEnding}`,
                `${__dirname}/features/**/data/entities/${fileEnding}`,
            ],
            synchronize: true,
            logging: false,
        };

        try {
            const connection = await createConnection(connectionOptions);
            console.log("Successfully connected to postgres");
            return connection;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    initializeDependencyInjection() {
        useContainer(Container);
    }

    async start(): Promise<void> {
        try {
            this.initializeDependencyInjection();
            await this.connectToDatabase();
            await this.connectToDiscord();
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}

const app = new App();
app.start();
