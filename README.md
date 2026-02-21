# Restaurant Menu

A multilingual restaurant menu showcasing locale-aware pricing, dietary labels, and full content translation with [gt-next](https://generaltranslation.com/docs/next).

**[Live Demo](https://restaurant-menu.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app presents a dark-themed restaurant menu with starters, mains, and desserts. Every string — dish names, descriptions, dietary badges, and UI chrome — is fully translated across five locales (English, Spanish, French, Japanese, and Chinese). Prices render in locale-appropriate currency formatting.

## GT Features Used

- `<T>` — JSX translation for headings, descriptions, and UI text
- `<Currency>` — Locale-aware USD price formatting
- `<Num>` — Number formatting (dish count, spice levels)
- `<Branch>` — Conditional dietary badge rendering (Vegetarian / Vegan)
- `getGT` — Server-side string translations for menu data
- `<LocaleSelector>` — Built-in language picker
- `loadTranslations` — Local translation file loading

## Getting Started

```bash
git clone https://github.com/gt-examples/restaurant-menu.git
cd restaurant-menu
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and switch locales to see the menu adapt.

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
