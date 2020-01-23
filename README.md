# DiscordBirthdayBot
This is a discord birthday bot, which saves and announces birthdays

## Setup
Copy `.env.example` to `.env` and add a token so the bot can connect to the discord server.


## Database

### User

- ID
- name
- Bday

### Subscribtion

- Username/UserID/ServerID
- User.ID (foreign key)
- Channel ID

Channel ID: Add channel ID for channel to post to or local if it is only a private subscription for a user