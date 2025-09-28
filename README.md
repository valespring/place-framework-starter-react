# PLACE Framework Starter - React

A React starter pack for the PLACE SCSS framework.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run format` - Format code with Prettier and ESLint
- `npm run lint:js` - Lint JavaScript/TypeScript files
- `npm run lint:scss` - Lint SCSS files

## Features

- React 18 with TypeScript
- PLACE Framework integration
- Webpack configuration
- ESLint and Prettier setup
- Stylelint for SCSS
- Hot module replacement in development

## Project Structure

```
src/
├── components/
│   └── place/          # PLACE framework components
├── scss/
│   ├── site/           # Site-specific styles
│   ├── _variables.scss # Custom variables
│   └── global.scss     # Main stylesheet
├── views/              # Page components
├── types/              # TypeScript type definitions
├── App.tsx             # Main App component
└── main.tsx            # Application entry point
```

## License

ISC