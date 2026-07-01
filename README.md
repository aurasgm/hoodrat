# Hoodrat $HOODRAT

Landing page para Hoodrat `$HOODRAT`, meme coin en Robinhood Chain inspirada en Hoodrat, personaje asociado a Matt Furie y The Night Riders.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build para Netlify

```bash
npm run build
```

Netlify queda configurado con `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

No requiere `.env`.

## Cambiar el contrato

El contrato placeholder esta en [src/App.tsx](src/App.tsx):

```ts
const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'
```

Sustituye ese valor por el CA real cuando este listo.

## Assets

- Hero y OpenGraph: [public/assets/hoodrat-hero.png](public/assets/hoodrat-hero.png)
- Token logo y favicon source: [public/assets/hoodrat-token.png](public/assets/hoodrat-token.png)
- OpenGraph final: [public/og-image.png](public/og-image.png)
- Favicon: [public/favicon.png](public/favicon.png)
- Concept visual generado: [docs/design-concept.png](docs/design-concept.png)

## Nota

Pagina fan-made sin afiliacion oficial con Robinhood Markets, Inc. `$HOODRAT` se presenta como meme coin de entretenimiento, sin promesa financiera.
