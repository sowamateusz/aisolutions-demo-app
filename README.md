## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsowamateusz%2Faisolutions-demo-app&env=AUTH0_SECRET,AUTH0_BASE_URL,AUTH0_ISSUER_BASE_URL,AUTH0_CLIENT_ID,AUTH0_CLIENT_SECRET)

## Environment Variables

- `AUTH0_SECRET`: Use `[openssl rand -hex 32]` to generate a 32-byte value.
- `AUTH0_BASE_URL`: Set to `http://localhost:3000` for local development.
- `AUTH0_ISSUER_BASE_URL`: Set to `https://{yourDomain}`.
- `AUTH0_CLIENT_ID`: Replace `{yourClientId}` with your Auth0 Client ID.
- `AUTH0_CLIENT_SECRET`: Replace `{yourClientSecret}` with your Auth0 Client Secret.

## Additional Features

This app utilizes components from `aisolutions-react-components` - a library of reusable React components built with TypeScript. It includes components such as buttons, inputs, and forms, styled with TailwindCSS and optimized for modern React applications. This package is designed to be a starting point for building and scaling component libraries.
