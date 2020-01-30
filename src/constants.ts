import "./env"
export class Constants {
    static PREFIX : string = process.env.ENVIRONMENT == "production" ? "!" : "?";
}