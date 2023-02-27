# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 23.2.23      | 0.0.1   | Datenbank mit Applikation verbunden                                                             |
| 24.2.23      | 0.0.2   | Admin login und normales login programmiert                                                             |
| 25.2.23      | 0.0.3   | Spiel und Leaderboard programmiert                                                             |
| 26.2.23      | 1.0.0   | Allgemeine verbesserungen                                                             |


# 0 Ihr Projekt

✍️ Glücksrad Wortratespiel bei welchem Redewendungen in einem Gitter erraten müssen.

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
| A    |Muss               |Funktional      |Als Benutzer möchte ich das Glücksrad drehen können um das Spiel zu spielen|
| B    |Muss               |Funktional      |Als Benutzer möchte ich meine Gewinne einlösen|
| C    |Muss               |Funktional      |Als Administrator möchte ich Phrasen und Wörter bearbeiten|
| D    |Muss               |Qualität        |Als Benutzer möchte ich meinen Kontostand und Lebenspunkt immer sehen|
| E    |Muss               |Funktional      |Als Benutzer möchte ich das Leaderboard sehen um mich mit anderen zu vergleichen|
| F    |Muss               |Funktional      |Als Administrator möchte ich mich mit einem login anmelden|
| G    |Muss               |Funktional      |Als Benutzer möchte ich den Korrekten Geldbetrag bekommen, wenn ich einen Buchstaben richtig rate|
| H    |Muss               |Funktional      |Als Benutzer möchte ich das jetzige Spiel immer das Jetzige Spiel beenden koennen und die Daten auf dem Leaderboard anzeigen lassen|
| I    |Muss               |Funktional      |Als Administrator möchte ich gewisse Leaderboard eintraege loeschen koennenn|
| J    |Muss               |Funktional      |Als Benutzer möchte ich mitgeteilt werden wann ich einen Buchstaben richtig geraten habe oder nciht|

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  |Benutzer angemeldet|Rad drehen|Preis wird angezeigt|
| A.2  |Kein Guthaben|Versuchen das Glücksrad drehen|Glücksrad wird nicht gedreht|
| B.1  |Preis gewonnen |Gewinn einlösen|Gewinn wird eingelöst|
| C.1  |Als Administrator angemeldet|Wort hinzufuegen|Wort wird hinzugefuegt|
| C.2  |Als Administrator angemeldet|Phrase hinzufuegen|Phrase wird hinzugefuegt|


# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
