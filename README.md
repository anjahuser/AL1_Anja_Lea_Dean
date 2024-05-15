# M291-2024/2025

# Richtlinien für die Ordnerstruktur und Code-Konventionen

## Ordnerstruktur
- **HTML-Dateien** im Hauptverzeichnis.
- **CSS-Dateien** im Ordner `css`.
- **JS-Dateien** im Ordner `js`.
- **Bilder** im Ordner `images`. 

**Dateinamen für HTML, CSS und JS Dateien**: 
- Der Dateiname entspricht immer dem Namen der Web Page, zu der die Datei gehört. Beispiel: `promotion.html` für die Promotion Page. 
- Dateien, die auf mehreren Web Pages eingebunden werden, müssen mit "common" angeschrieben werden. Beispiel: `common.css` enthält das Page Layout, das für alle Webpages gleich ist.

## Code-Praktiken
- **Kein Inline CSS oder Inline JS**: JavaScript Code muss in `.js` Dateien, CSS-Code in `.css`-Dateien stehen.
- **Keine Code-Duplikate**: In HTML-Dateien darf HTML-Code mehrfach vorkommen (z.B. derselbe Code für Header und Footer). Derselbe CSS- und JS-Code darf jedoch nicht mehrfach vorkommen, weder in derselben Datei noch über alle Dateien hinweg.

## Verwendung externer Quellen
- Die Verwendung externer Quellen ist erlaubt. Trennen Sie eigenen Code und kopierten Code in separaten Dateien.
- Alle externen Quellen müssen durch einen Link dokumentiert werden. Dieser Link muss den kopierten Code enthalten.
- Lehrmaterial gilt nicht als externe Quelle und muss nicht dokumentiert werden.
- Für Code aus Sprachgeneratoren/LLMs (ChatGPT) gelten andere Regeln für die Dokumentation (Screenshots statt Links), siehe Merkblatt.
