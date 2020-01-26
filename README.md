# DiscordBirthday Bot

This is a discord birthday bot, which saves and announces birthdays

## Setup
1. Run `npm i` to install all packages.
1. Copy `.env.example` to `.env` and add a token so the bot can connect to the discord server.

## Setup for typescript

I used the following tutorial. Click [here](https://khalilstemmler.com/blogs/typescript/node-starter-project/).
The Project is now using typescript.

## Setup eslint for typescript
[Tutorial](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

VSCode now shows problems with styling and programming while developing. You can also activate styling on save if you want to. (See tutorial)

## Developing and deploying
There are multiple scripts for developing, building and running the project.

### Developing
`npm run dev`: Start the bot. It is autoreloading on save, so you get the correct code every time.

`npm run debug`: Start the bot. You can attach to the debug session in vscode just by clicking run and using the first process to attach to the debug session. It is also hot reloading.

### Deploying & Starting
`npm run build`: Builds the bot and puts output to build folder.

`npm run start`: Builds the bot and starts it from the `index.js`.

## Database

### User

- ID
- Birthday


