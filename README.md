# Padlógáz Autósiskola – új weboldal

Modern, mobilbarát egyoldalas weboldal a mosonmagyaróvári Padlógáz Autósiskolának (AM, A1, A2, A, B kategóriák).

## Felépítés

- `index.html` – az oldal szerkezete (hero, kategóriák, árak, folyamat, járművek, csapat, jelentkezés, kapcsolat)
- `styles.css` – megjelenés, reszponzív töréspontok (1080 / 880 / 640 px)
- `main.js` – **minden adat itt van**: kategóriák, árak, oktatók. Árváltozáskor csak a `CATEGORIES`, `PRICE_ROWS` és `EXTRA_ROWS` tömböket kell frissíteni.

Nincs build lépés és nincs függőség, a fájlok közvetlenül kiszolgálhatók (pl. GitHub Pages).

## Helyi előnézet

VS Code-ban a Live Server bővítménnyel, vagy:

```powershell
powershell -ExecutionPolicy Bypass -File .claude/serve.ps1
```

majd: http://localhost:5500

## Tudnivalók

- A jelentkezési űrlap jelenleg előre kitöltött e-mailt nyit (`mailto:`) a padlogazmovar@gmail.com címre, mert nincs szerveroldal. Később cserélhető pl. Formspree-re vagy PHP-s küldésre.
- A képek, PDF-ek jelenleg a régi oldalról (padlogazmovar.hu/images/…) töltődnek. Költözés előtt érdemes őket az `images/` mappába másolni.
