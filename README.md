# Fasttrack Car Care Services

A modern React application for premium car care services specializing in luxury vehicles.

## Features

- Premium car care services showcase
- Paint Protection Film (PPF)
- Ceramic Coating services
- SRS Treatment
- Luxury car detailing
- Service enquiry system
- Responsive design with modern UI

## Tech Stack

This project is built with:

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern component library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vigneswarnalluri/f1.git
cd f1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── ...
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Deployment

To deploy this application:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider (Vercel, Netlify, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and proprietary.
