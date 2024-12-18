# This Year

> What's a life unexamined?

A simple tool to help you pause, reflect on your journey through the past year, and envision what lies ahead. Through carefully crafted prompts, explore your experiences, achievements, challenges, and aspirations.

## Demo
Try it out at [https://sabaimran.github.io/this-year/](https://sabaimran.github.io/this-year/)

## Development

### Local Setup

To run the project locally

1. Uncomment the next config in `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */

const nextConfig = {
};

export default nextConfig;
```

2. Install dependencies
```bash
yarn install
```

3. Start the development server
```bash
yarn dev
```

### Deployment

You can deploy your own fork to a Github Pages site in a few simple steps.

Before deploying, ensure you've configured your repository according to the [GitHub Pages / Next.js setup instructions](https://github.com/nextjs/deploy-github-pages).

1. Revert any changes made to `next.config.mjs` in the local setup.
```js
/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: '/this-year',
};

export default nextConfig;
```

2. Build & deploy
```bash
yarn deploy
```

## Contributing
Pull requests are welcome! Feel free to contribute to making this introspection tool even better.
