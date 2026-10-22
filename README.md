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

## CodeSandbox

Alle eksempler bruger samme struktur: `index.html`, `styles.css` og `app.js`, plus `sandbox.config.json` med `"template": "static"`.

| Mappe | Bruges til |
| --- | --- |
| `codesandbox/1-html-css` | Øvelse 1, start |
| `codesandbox/1-html-css-loesning` | Øvelse 1, løsning |
| `codesandbox/2-knap` | Øvelse 2: knap, der ændrer siden |
| `codesandbox/3-input` | Øvelse 3: input og hilsen |
| `infoside-starter` | Starteren til casen (demo-trinene ligger i `infoside-starter/demo`) |

Sådan kommer en mappe i CodeSandbox:

1. Opret en ny sandbox ud fra skabelonen *HTML + CSS* (static).
2. Slet skabelonens filer, og træk mappens indhold ind i filpanelet.
3. Kopiér linket, og indsæt det ved den tilsvarende `[LINK: CodeSandbox, …]` i `index.html`.

## Struktur

```
index.html            Decket
css/eaaa-tema.css     Dark mode-fortolkning af EAAA's designguide (farver som CSS-variabler)
css/kode.css          Syntax highlighting i EAAA-farver
js/main.js            Agenda på dividerne, fremvisningstimer, Reveal-opsætning
assets/               EAAA-logo (hvid) og billeder (bl.a. screenshots fra de gamle Keynote-slides)
codesandbox/          Øvelse 1–3 til CodeSandbox
infoside-starter/     Skabelonen, praktikanterne forker i CodeSandbox
```

Ret du i demo-koden, skal det ske i `infoside-starter/demo/trin-*` og i kodeslides i `index.html`. Billederne `assets/images/demo-trin-*.webp` er screenshots af demo-trinene og skal tages igen.
