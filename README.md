# puni.cc

Landing page for [puni.cc](https://puni.cc) — a directory of web apps hosted on `*.puni.cc`.

## Stack

- [SvelteKit](https://kit.svelte.dev/) + Svelte 5
- TypeScript
- Cloudflare Workers

## Development

```bash
pnpm install
pnpm dev
```

## Adding an App

Edit `src/lib/apps.ts` and add an entry to the `apps` array:

```ts
{
  name: 'My App',
  url: 'https://my-app.puni.cc',
  description: 'A short description.',
  tags: ['tag1', 'tag2'],
},
```

## Deploy

```bash
pnpm deploy
```
