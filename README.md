# deckhouse-ecommerce

A modern e-commerce application built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **CI/CD**: GitHub Actions

## Project Structure

```
deckhouse-ecommerce/
├── .github/
│   └── workflows/          # CI/CD workflows
│       └── ci.yml          # GitHub Actions CI pipeline
├── api/                    # Serverless API functions
│   └── products.ts         # Products API endpoint
├── data/                   # Sample data files
│   └── products.json       # Product data
├── src/
│   ├── components/         # Reusable React components
│   │   └── Header.tsx      # Header component
│   ├── pages/              # Page components
│   │   └── Home.tsx        # Home page
│   ├── App.tsx             # Root application component
│   ├── index.css           # Global styles with Tailwind directives
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.ts          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Features (Coming Soon)

- Product catalog with filtering and search
- Shopping cart functionality
- User authentication
- Checkout and payment processing
- Order management
- Admin dashboard

## License

This project is licensed under the MIT License - see the LICENSE file for details.
