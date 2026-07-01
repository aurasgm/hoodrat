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

## Contrato

El contrato actual esta en [src/App.tsx](src/App.tsx):

```ts
const CONTRACT_ADDRESS = '0x0ec597eeab963e07cb64c0620861e3e4c7a5e0c7'
```

## Assets

- Hero y OpenGraph: [public/assets/hoodrat-hero.png](public/assets/hoodrat-hero.png)
- Token logo y favicon source: [public/assets/hoodrat-token.png](public/assets/hoodrat-token.png)
- Icono 1000x1000: [public/assets/hoodrat-icon-1000.png](public/assets/hoodrat-icon-1000.png)
- Banner 1500x500: [public/assets/hoodrat-banner-1500x500.png](public/assets/hoodrat-banner-1500x500.png)
- OpenGraph final: [public/og-image.png](public/og-image.png)
- Favicon: [public/favicon.png](public/favicon.png)
- Concept visual generado: [docs/design-concept.png](docs/design-concept.png)

## Nota

Pagina fan-made sin afiliacion oficial con Robinhood Markets, Inc. `$HOODRAT` se presenta como meme coin de entretenimiento, sin promesa financiera.
