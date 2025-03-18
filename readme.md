# Microfrontend App with Module Federation 2 and RSBuild

## Tech stack

- [x] [Module Federation 2](https://module-federation.io/)
- [x] [RSBuild](https://rsbuild.dev/index)
- [x] [TailwindCSS](https://tailwindcss.com/)
- [x] [Jotai](https://jotai.org/)
- [ ] [Tanstack Query](https://tanstack.com/query)
- [x] [Biome](https://biomejs.dev/guides/getting-started/) formatter and linter
- [x] React for both host and remote
- [x] TypeScript

## Note

- Use `npm`
- Use `Biome` for formatting and linting
- Sharing stores (Jotai) between host and remote is not recommended since it makes apps tightly coupled and lead to trouble later when change tech stack of one app.
