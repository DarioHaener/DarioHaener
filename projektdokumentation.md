# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

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
| D    |Muss               |Qualität        |Als Benutzer möchte ich eine übersichtliche GUI haben, damit ich mich zurechtfinden kann|
| E    |Muss               |Rand            |Als Benutzer möchte ich auf dem Liederboard sehen|

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  |Benutzer angemeldet|Rad drehen|Preis wird angezeigt|
| A.2  |Kein Guthaben|Versuchen das Glücksrad drehen|Glücksrad wird nicht gedreht|
| B.1  |Preis gewonnen |Gewinn einlösen|Gewinn wird eingelöst|
| C.1  |Als Administrator angemeldet|Wort hinzufuegen|Wort wird hinzugefuegt|
| C.2  |Als Administrator angemeldet|Phrase hinzufuegen|Phrase wird hinzugefuegt|

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

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
