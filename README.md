Made by Senai Amanuel

# ShowcaseSERL

ShowcaseSERL is a curated collection of student and researcher-developed projects. It serves as a public portfolio for finished projects and inspires students to contribute their project ideas.

## Prerequisites for Building the Software

Before you can build and run the software, ensure you have the following prerequisites installed:

- **Node.js**: You need Node.js installed on your machine. You can download it from the [Node.js official website](https://nodejs.org/).
- **npm**: npm is included with Node.js. You can verify the installation by running:
    ```bash
    node -v
    npm -v
    ```
- **Git**: Ensure you have Git installed for version control. You can download it from the [Git official website](https://git-scm.com/).

## Instructions for Building/Testing the Software

### Cloning the Repository

First, clone the repository to your local machine:
```bash
git clone https://github.com/amanuel-sen/showcase-serl.git
cd showcase-serl
```

### Installing Dependencies

Install the necessary dependencies using npm:
```bash
npm install
```

### Building the Software

To build the software, run the following command:
```bash
npm run build
```
This will create an optimized production build of the application.

### Testing the Software

To run the tests, use the following command:
```bash
npm run test
```
This will execute all the test files in the project. You can also run tests in watch mode:
```bash
npm run test:watch
```

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

## Development

To ensure a consistent code style, this project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). You can run the following command to check for linting errors and format the code:
```bash
npm run lint
npm run format:fix
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

