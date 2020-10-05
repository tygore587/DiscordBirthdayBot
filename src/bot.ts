import "reflect-metadata"; // needed for typeorm
import { Container } from "typedi";
import { Connection, createConnection, useContainer } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Config } from "./core/config/config";
import { BotClient } from "./bot/client/botclient";
import { appendFile } from "fs";

// organize-imports-ignore


export class App {


    static async connectToDatabase(): Promise<Connection> {
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

    static initializeDependencyInjection() {
        useContainer(Container);
    }

    static addToDependencyInjection(client: BotClient) {
        Container.set("BotClient", client);
    }

    static async start(): Promise<void> {
        try {
            this.initializeDependencyInjection();

            await this.connectToDatabase();

            const client = await BotClient.initialize();

            this.addToDependencyInjection(client);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}

App.start();
