# Nockeby Bageri — Webbplats

Next.js 16 · Tailwind CSS v4 · App Router

## Kom igång

```bash
npm install
cp .env.local.example .env.local
# Fyll i miljövariabler (se nedan)
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Miljövariabler

Skapa `.env.local` från `.env.local.example` och fyll i:

| Variabel | Beskrivning |
|---|---|
| `GOOGLE_PLACES_API_KEY` | Google Cloud API-nyckel med Places API aktiverat |
| `GOOGLE_PLACE_ID` | Place ID för Nockeby Bageri (börjar med `ChIJ...`) |

**Hitta Place ID:**
1. Gå till https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
2. Sök på "Nockeby Bageri, Nockeby torg 9, Stockholm"
3. Kopiera Place ID (format: `ChIJ...`)

**Google Cloud-konfiguration:**
1. Skapa projekt på https://console.cloud.google.com
2. Aktivera **Places API (New)**
3. Skapa API-nyckel, begränsa till din domän

Reviews-sektionen döljs tyst om ingen nyckel är angiven.

## Kartan

Google Maps-embedden använder hårdkodade koordinater (lat 59.328954, lng 17.9279561) och kräver ingen API-nyckel.

## Deploy till Vercel

```bash
npm i -g vercel
vercel
vercel env add GOOGLE_PLACES_API_KEY
vercel env add GOOGLE_PLACE_ID
```

## TODOs — foton

Ersätt bildplatshållarna med riktiga foton i `public/`. Alla platshållare är markerade med `TODO:` i koden:

- Hero-bild: liggande foto av bageriet, brödet eller interiören med det sage-gröna panelet
- `public/sortiment/brod-cover.jpg` — surdegsbröd ur stenugnen
- `public/sortiment/bakverk-cover.jpg` — croissanter och bullar på disken
- `public/sortiment/smorgasar-cover.jpg` — smörgåsar på marmordisken
- `public/sortiment/kaffe-cover.jpg` — kaffekopp i keramikmugg
- `public/sortiment/pizzakvall-cover.jpg` — pizza ur stenugnen fredag
- `public/stenugn.jpg` — stenugnen inifrån (Om oss-sidan)

Tips: 1600–2400px bredd, JPEG 85% kvalitet, fotograferade ovanifrån (flat lay) eller interiörbilder med naturligt ljus.
Logotypen (`/logo.jpg`) är redan på plats.

## Anpassa sortimentet

Redigera `src/content/sortiment.ts` för att uppdatera produkter, priser och beskrivningar.

## Sidstruktur

| Route | Sida |
|---|---|
| `/` | Startsida |
| `/om-oss` | Om oss & historia |
| `/sortiment` | Sortiment-översikt |
| `/sortiment/brod` | Bröd |
| `/sortiment/bakverk` | Bakverk |
| `/sortiment/smorgasar` | Smörgåsar |
| `/sortiment/kaffe` | Kaffe & dryck |
| `/sortiment/pizzakvall` | Pizzakväll |
| `/hitta-oss` | Hitta oss + karta |
