optional:
 - Nutzer kann sich zu bestimmten BDays subscriben. (Er wird dann mit gementioned um ihn auf den Bday aufmerksam zu machen).
 - Mentions an Personen immer per PM. Bday selber in den Chat.
 - lustige texte bie den geburtstagen oder einen Wiki

prefix: ! für prod / ? für dev

# commands:
## MVP (adding myself)
```
	/add <date> -> /add 10.10.1991: Addet den eigenen Geburtstag
	/remove -> /remove me: Enfernt den User selber
	/list -> Listet alle User auf

	Announcements passieren dabei einfach auf allen Channeln, worauf der Bot Zugriff hat
```

Features 1 (Adding others, Announce folder):
```
	/add <mention> <date> -> /add @Easy 10.10.1991: Fügt den Geburtstag des Nutzers hinzu
	/remove <mention> -> /remove @Easy: Entfernt jeweiligen User
	/block -> setzt einen selber auf die Blacklist, dadurch ist es nicht hinzufügbar
	/announceOn <channelname> -> Channelname angeben, wo die Geburtstage announced werden sollen

```

Features 2 (Subscriptions):
```
	/add <name> <date>
		- adding someone (not on discord itself) => eventuell ein problem, weil es Leute vielleicht nicht wollen
		- vielleicht nur dann auch den einzelnen user sehen lassen
		- also nur zu den eigenen Subscriptions hinzugefügt
	/mylist -> whispert einem die eigene Subscription Liste zu
	/subscribe or /sub <mention> -> /subscripe|sub @Easy: PM Mitteilung für jeweiligen Nutzer aktivieren
	/unsubscribe or /unsub <mention> -> /unsubscripe/unsub @Easy: PM Mittelung deaktivieren

	Außerdem sollten dabei die Announcements umgebaut werden. Diese sollten nicht mehr in einem Channel passieren, sondern per PM laufen.
```

Verbesserungen:
- eventuell @Mention erlauben oder auch Benutzernamen um Leute zu entfernen, die nicht mehr auf dem Server sind