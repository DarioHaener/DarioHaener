# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 23.2.23      | 0.0.1   | Datenbank mit Applikation verbunden.                                                             |
| 24.2.23      | 0.0.2   | Admin login und normales login programmiert.                                                             |
| 25.2.23      | 0.0.3   | Spiel und Leaderboard programmiert.                                                             |
| 26.2.23      | 1.0.0   | Allgemeine verbesserungen.                                                             |


# 0 Ihr Projekt

✍️ Glücksrad Wortratespiel bei welchem Woerter in einem Gitter erraten müssen und so Geldbetraege vom Gluecksrad gewinnen kann.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Glückspiel anzeigen
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Funktionen der Glücksrades, auswertung.
* Tier 4 (Dataserver): Benutezrdaten speichern, Phrasen und Rätselwörter anlegen, ändern und löschen.

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

Tier 1 (Presentation): Next.js, CSS, HTML
Tier 2 (Webserver): Next.js
Tier 3 (Application Server): Next.js
Tier 4 (Dataserver): Firebase

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 



# 4.1 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| A    |Muss               |Funktional      |Als Benutzer möchte ich das Glücksrad drehen können um einen gewinn oder verlust zu machen.|
| B    |Muss               |Qualität      |Als Benutzer möchte ich mitgeteilt werden wann ich einen Buchstaben richtig oder falsch geraten habe|
| C    |Muss               |Funktional      |Als Administrator möchte ich Phrasen und Wörter bearbeiten.|
| D    |Muss               |Rand        |Als Benutzer möchte ich meinen Kontostand und Lebenspunkt immer sehen.|
| E    |Muss               |Rand      |Als Benutzer möchte ich das Leaderboard sehen um mich mit anderen zu vergleichen.|
| F    |Muss               |Funktional      |Als Administrator möchte ich mich mit einem login anmelden.|
| G    |Muss               |Funktional      |Als Benutzer möchte ich den korrekten Geldbetrag bekommen, wenn ich das Wort richtig rate.|
| H    |Muss               |Funktional      |Als Benutzer möchte ich das jetzige Spiel immer das Jetzige Spiel beenden koennen und die Daten auf dem Leaderboard anzeigen lassen.|
| I    |Muss               |Funktional      |Als Administrator möchte ich gewisse Leaderboard eintraege loeschen koennenn.|

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  |Spiel gestartet|Glücksrad drehen|Preis wird angezeigt|
| A.2  |Spiel gestartet|Glücksrad drehen und Buchstabe richtig geraten| Betrag wird hinzugefuegt |
| B.1  |Spiel gestartet|Richtiger Buchstabe|Gesuchtes Wort wird gruen|
| B.2  |Spiel gestartet|Falscher Buchstabe|Gesuchtes Wort wird rot|
| C.1  |Als Administrator angemeldet|"ADD"|Wort wird hinzugefuegt|
| C.2  |Als Administrator angemeldet|"DELETE"|Wort wird geloescht|
| D.1 | Benutzer angemeldet | - | Lebenspunkte und Kontostand werden immer angezeigt |
| E.1 | Benutzer angemeldet | - | Leaderboard wird immer dargestellt |
| F.1 | Noch nicht angemeldet | Richtiges ADmin passwort und Name ingegeben | Als Admin angemeldet  |
| G.1 | Spiel gestartet  | Richtiges Wort geraten | Korrekter Geldbetrag wird zum Kontostand hinzugefuegt |
| H.1 | Spiel gestartet | "End Game" druecken| Daten werden in das LEaderboard uebernommen |
| I.1 | Als Administrator angemeldet | "DELETE" bei LEaderboard gedrueckt| Leaderboard eingabe wird geloescht |


# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).
Admin

![Admin](https://user-images.githubusercontent.com/69902881/221517969-aef33b27-0e91-40b6-baa8-103ef934f54f.JPG)

Quiz

![GUI](https://user-images.githubusercontent.com/69902881/221518051-eb07f8bc-787e-4362-aad9-ac1dd2915bef.JPG)


# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| A      |   25.2.23    |      gemacht        |
| B      |   26.2.23    |      gemacht        |
| C      |   24.2.23    |      gemacht        |
| D      |   24.2.23    |      gemacht        |
| E      |   25.2.23    |      gemacht        |
| F      |   24.2.23    |      gemacht        |
| G      |   25.2.23    |      gemacht        |
| H      |   25.2.23    |      gemacht        |
| I      |   24.2.23    |      gemacht        |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| A    | ja  | game.js                                           |
| B    | ja  | game.js                                          |
| C    | ja  | admin.js                                          |
| D    | ja  | game.js                                          |
| E    | ja  | game.js                                          |
| F    | ja  | idnex.js                                          |
| G    | ja  | game.js                                          |
| H    | ja  | game.js                                          |
| I    | ja  | admin.js                                          |

# 8 Testprotokoll

Download: https://github.com/DarioHaener/DarioHaener_LB151/blob/main/DarioHaener_LB151.mp4

YouTube: https://youtu.be/wNLdfM9rYpk

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| A.1  |   27.2.23    |    OK      |Dario Haener        |
| A.2  |   27.2.23    |      OK    |Dario Haener        |
| B.1  |   27.2.23    |        OK  |  Dario Haener      |
| B.2  |   27.2.23    |          OK|       Dario Haener |
| C.1  |   27.2.23    |       OK   |       Dario Haener |
| C.2  |   27.2.23   |       OK   |       Dario Haener |
| D.1  |   27.2.23    |      OK    |       Dario Haener |
| E.1  |   27.2.23    |      OK    |       Dario Haener |
| F.1  |   27.2.23    |      OK    |       Dario Haener |
| G.1  |   27.2.23    |      OK    |       Dario Haener |
| H.1  |   27.2.23    |      OK    |       Dario Haener |
| I.1  |   27.2.23    |      OK    |       Dario Haener |

# 8.1 Fazit

Alle Testfälle sind positiv ausgefallen und fast alle Vorgaben sind erfuellt. Das Spiel zu programmieren viel mir eher leicht, da ich viel spass daran hatte und bereits mit Datenbanken gearbeitet habe. Wobei ich jedoch schwiergkeiten hatte war mich in next.js einzuarbeiten. Da ich bisher nur mit React programmiert habe. Da React jedoch ein betsnadteil von next.s ist konnte ich diese Problem schnell ueberwinden.

# 9 `README.md`


# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
