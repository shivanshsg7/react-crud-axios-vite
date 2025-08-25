# React CRUD App with Axios and Vite

A modern React application built with Vite that demonstrates CRUD (Create, Read, Update, Delete) operations using Axios for API calls.

## Features

- **Modern React**: Built with React 19 and modern hooks
- **Fast Development**: Powered by Vite for lightning-fast development experience
- **HTTP Client**: Uses Axios for API communication
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **Responsive Design**: Clean and modern UI

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Styling**: CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd react_full_stack_axios
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── api/
│   └── PostApi.jsx      # API functions for posts
├── components/
│   └── posts.jsx        # Posts component with CRUD operations
├── assets/
│   └── react.svg        # React logo
├── App.jsx              # Main App component
├── App.css              # App styles
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## API Integration

The app uses Axios to communicate with a REST API. The main API functions are located in `src/api/PostApi.jsx`:

- `getPost()` - Fetch all posts
- `deletePost(id)` - Delete a post by ID
- Additional CRUD functions can be added as needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- React documentation and community
- Axios for HTTP client functionality
