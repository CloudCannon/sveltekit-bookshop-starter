# SvelteKit Bookshop Starter

A starter template for a new SvelteKit site using [Bookshop](https://github.com/CloudCannon/bookshop)

To run locally:
```bash
npm i
npm start
```

To see the component browser locally: (in another terminal)
```bash
npx @bookshop/browser
```
You can now load `/components` on your site and see the component library.

If building on CloudCannon, this page will also show a hosted version of the component library.

## Structure
The bookshop components live in `component-library`, which is defined as an alias for $components in `vite.config.js`

To learn more, read the [Bookshop SvelteKit Guide](https://github.com/CloudCannon/bookshop/blob/main/guides/sveltekit.adoc).
