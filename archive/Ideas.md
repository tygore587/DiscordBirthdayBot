Using the bot also for other birthdays other than the on the server itself.

# Ideas 
## Idea
was es können soll:
	- nuzter zu einer bday liste hinzufügen [Datum {01.01.1990 / 02.02.}, Name/username]
	- nutzer aus liste löschen
	- liste mit nutzern ausgeben
	- nutzer sollen einträge auswählen können von denen sie benachrichtigungen erhalten wollen
	- bot soll nutzer bei geburtstagen benachrichtigen [entweder PM oder in channel]
	[lustige texte bie den geburtstagen]
	
commands:
	?add "name" "date" -> ?add kitty 10.10.1991
	?add "date" -> ?add 10.10.1991 [fügt den nutzer selbst hinzu]
	?remove "name" "date" -> ?remove kitty 10.10.1991
	?remove "date" -> ?remove 10.10.1991 [löscht den nutzer selbst]
	?list -> 10.10.1991 kitty
			 05.12.1998 Bob
	?mylist
	?alert "name"
	?setchannel.this

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