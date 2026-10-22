# Studiepraktik dag 2 – Multimediedesigner

Slides til torsdag (reveal.js 5.1.0 via CDN) og starter-skabelonen til praktikanternes infoside i CodeSandbox.

## Start præsentationen

Kør decket fra en lokal server. Ellers virker YouTube-videoen ikke, og speaker view er ustabilt:

```sh
cd ~/Developer/studiepraktik
python3 -m http.server 8000
# åbn http://localhost:8000
```

Tryk `S` for speaker view med noter og tider.

## Links i CodeSandbox

| Hvad | Link |
| --- | --- |
| Øvelse 1, start | https://codesandbox.io/p/sandbox/1-html-css-ck92px |
| Øvelse 1, løsning | https://codesandbox.io/p/sandbox/1-html-css-loesning-3gq2kt |
| Øvelse 2, løsning | https://codesandbox.io/p/sandbox/2-knap-loesning-ndkvwj |
| Øvelse 3, løsning | https://codesandbox.io/p/sandbox/3-input-loesning-rj9qx5 |
| Infoside-starter | https://codesandbox.io/p/sandbox/infosite-starter-f3pjsd |

CSS- og grid-eksemplerne åbnes lokalt fra decket (»Åbn live-demo«).

## CodeSandbox

Alle eksempler bruger samme struktur: `index.html`, `styles.css` og `app.js`, plus `sandbox.config.json` med `"template": "static"`.

| Mappe | Bruges til |
| --- | --- |
| `codesandbox/grid-eksempel` | Kort i et responsivt gitter (vis live efter CSS-sliden) |
| `codesandbox/css-eksempel` | Samme HTML med fire CSS-temaer (vis live efter trin 2) |
| `codesandbox/1-html-css` | Øvelse 1, start |
| `codesandbox/1-html-css-loesning` | Øvelse 1, løsning |
| `codesandbox/2-knap-loesning` | Øvelse 2, løsning (praktikanterne fortsætter i deres fork fra øvelse 1) |
| `codesandbox/3-input-loesning` | Øvelse 3, løsning (bygger videre på øvelse 2) |
| `codesandbox/demo` | Demo-trinene 1–3 fra kodeslides |
| `infoside-starter` | Starteren til casen: kun `index.html`, `styles.css` og `app.js` |

Sådan kommer en mappe i CodeSandbox:

1. Opret en ny sandbox ud fra skabelonen *HTML + CSS* (static).
2. Slet skabelonens filer, og træk mappens indhold ind i filpanelet.
3. Kopiér linket, og opdatér det i `index.html` og i tabellen ovenfor.

## Struktur

```
index.html            Decket
css/eaaa-tema.css     Dark mode-fortolkning af EAAA's designguide (farver som CSS-variabler)
css/kode.css          Syntax highlighting i EAAA-farver
js/main.js            Agenda på dividerne, baggrundsvideo, Reveal-opsætning
assets/               EAAA-logo (hvid) og billeder (bl.a. screenshots fra de gamle Keynote-slides)
codesandbox/          Øvelser, løsninger, demo-trin og CSS/grid-eksempler
infoside-starter/     Skabelonen, praktikanterne forker i CodeSandbox
```

Ret du i demo-koden, skal det ske i `codesandbox/demo/trin-*` og i kodeslides i `index.html`. Billederne `assets/images/demo-trin-*.webp` er screenshots af demo-trinene og skal tages igen.
