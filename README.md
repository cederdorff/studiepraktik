# Studiepraktik dag 2 – Multimediedesigner

Slides til torsdag (reveal.js 5.1.0 via CDN) og starter-skabelonen til praktikanternes infoside i CodeSandbox.

## Start præsentationen

Den nemmeste måde er at åbne `index.html` direkte i browseren.

Til speaker view (tasten `S`) anbefales en lokal server:

```sh
python3 -m http.server 8000
# åbn http://localhost:8000
```

| Tast | Funktion |
| --- | --- |
| `S` | Speaker view med noter og tider |
| `T` | Start/pause fremvisningstimeren (på timer-sliden) |

## Indstillinger

`INDSTILLINGER` øverst i `js/main.js` styrer antal grupper, fremvisningstid, skift mellem grupper og hvornår timeren skifter farve. Antallet af grupper kan også ændres med −/+ på sliden »Sådan viser I«.

## Starteren i CodeSandbox

`infoside-starter/` er et statisk projekt (`sandbox.config.json` med `"template": "static"`). Sådan kommer det i CodeSandbox:

1. Opret en ny sandbox i CodeSandbox ud fra skabelonen *HTML + CSS* (static).
2. Slet skabelonens filer, og træk indholdet af `infoside-starter/` ind i filpanelet.
3. Kopiér linket, og indsæt det ved `[LINK: CodeSandbox med infoside-starter]` i `index.html`.

Demo-trinene i `infoside-starter/demo/trin-1..3` kan lægges op på samme måde, hvis du vil vise dem i CodeSandbox.

## Struktur

```
index.html            Decket
css/eaaa-tema.css     Dark mode-fortolkning af EAAA's designguide (farver som CSS-variabler)
css/kode.css          Syntax highlighting i EAAA-farver
js/main.js            Agenda på dividerne, fremvisningstimer, Reveal-opsætning
assets/               EAAA-logo (hvid) og billeder (bl.a. screenshots fra de gamle Keynote-slides)
infoside-starter/     Skabelonen, praktikanterne forker i CodeSandbox
```

Ret du i demo-koden, skal det ske i `infoside-starter/demo/trin-*` og i kodeslides i `index.html`. Billederne `assets/images/demo-trin-*.webp` er screenshots af demo-trinene og skal tages igen.
