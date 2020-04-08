# Brians Ostebiks 2.0

Brian er rigtig glad for ost. Så glad, at han har åbnet en lille forretning, hvor man kan købe oste, vin og andre delikatesser.

Du skal bygge en lille hjemmeside til Brians Ostebiks, hvor besøgende kan læse om de forskellige varer og vurdere dem på en skala fra 1-5 ostehjul.

Hjemmesiden skal være drevet af en serverside og en klientside. Klientsiden er HTML, CSS og JavaScript - backenden er et Node.js API med SQLite3 som database.

## Indhold
Her kan du læse hvilket indhold Brians Ostebiks skal have.

### Forside
2 tilfældigt valgte varer fra APIet.

### Oste
En liste over de oste, som er til salg. Listen kommer fra APIet.
Når en besøgende klikker på en vare, kommer de til enkelt-visning af denne vare og har der mulighed for at afgive en stemme.

### Vin
En liste over de vine, som er til salg. Listen kommer fra APIet.
Når en besøgende klikker på en vare, kommer de til enkelt-visning af denne vare og har der mulighed for at afgive en stemme.

### Delikatesser
En liste over andre delikatesser, som kan købes. Listen kommer fra APIet.
Når en besøgende klikker på en vare, kommer de til enkelt-visning af denne vare og har der mulighed for at afgive en stemme.

## Andet
Til alle varer skal der være et billede. Dette billede skal på en eller anden måde repræsenteres af APIet.

Forslag til API struktur:

* GET /pages/:id (forside)
* GET /category/:id/products
* GET /products
* GET /products/:id
* GET /products/:id/votes
* POST /products/:id/votes
* GET /assets
* GET /assets/:id

Du skal selv finde på tekster og layout, samt finde billeder til hjemmesiden.

Hovedvægten af denne opgave er på APIet og serversiden.

Opgaven skal afleveres på GitHub.
