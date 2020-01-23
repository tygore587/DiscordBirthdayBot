const discord = require("discord.js");
const {
    config
} = require("dotenv");

config({
    path: __dirname + "/.env"
})

const client = new discord.Client();

client.on("ready", () => {
    console.log(`I'm online, my name is ${client.user.username}`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "Ich werde gerade entwickelt.",
            type: "WATCHING"
        }

    })
})

client.on("message", async message => {
    console.log(`${message.author.username} says: ${message.content}`);
    if (message.content === "Hello World") {
        message.reply("Hello you also");
    }
});

client.login(process.env.TOKEN);