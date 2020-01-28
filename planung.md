mandatory:
 - Nutzer des Servers zu einer Bday-Liste hinzufügen
 - Nutzer am Tag des Bdays Mention und alles Gute wünschen
 - Nutzer aus der Liste löschen
 - Liste ausgeben, eventuell mit Flag von Originalnutzer, ob er das erlaubt
 - Nutzer fragen, der hingefügt werden soll, ob er es ok findet, dass er hinzugefügt wird
 - Nutzer entfernen, die den Server verlassen
	
optional:
 - Nutzer kann sich zu bestimmten BDays subscriben. (Er wird dann mit gementioned um ihn auf den Bday aufmerksam zu machen).
 - Mentions an Personen immer per PM. Bday selber in den Chat.
 - lustige texte bie den geburtstagen oder einen Wiki

prefix: !

commands:
```
	/add <date> -> /add 10.10.1991: Addet den eigenen Geburtstag
	/add <mention> <date> -> /add @Easy 10.10.1991: Fügt den Geburtstag des Nutzers hinzu
	/remove <mention> -> /remove @Easy: Entfernt jeweiligen User
	/remove me -> /remove me: Enfernt den User selber
	/list -> 10.10.1991 @Easy
			 05.12.1998 @Bob: Gibt eine Liste an Nutzern aus, dessen Bdays eingetragen sind
	/mylist -> @Easy, @Bob: Gibt die Liste aus, zu denen man sich selber eingetragen hat
	/subscribe or /sub <mention> -> /subscripe|sub @Easy: PM Mitteilung für jeweiligen Nutzer aktivieren
	/unsubscribe or /unsub <mention> -> /unsubscripe/unsub @Easy: PM Mittelung deaktivieren
```

Verbesserungen:
- eventuell @Mention erlauben oder auch Benutzernamen um Leute zu entfernen, die nicht mehr auf dem Server sind