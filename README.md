# W3School Learning Platform

A modern, interactive learning platform built with Next.js 14, TypeScript, and Material-UI. This platform provides a seamless learning experience with course management and interactive challenges.

## 🚀 Features

- **Modern Tech Stack**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Material-UI (MUI) for beautiful, responsive UI
  - Server and Client Components optimization

- **Core Functionality**
  - User Authentication System
  - Course Listing and Management
  - Interactive Challenges
  - Responsive Design
  - Client-side Navigation

- **Pages**
  - Login Page (`/login`)
  - Course Listing (`/courses`)
  - Challenge Details (`/challenges/[id]`)

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-w3school
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000` (or `3001` if port 3000 is in use)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
next-w3school/
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── courses/
│   │   ├── challenges/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ThemeRegistry.tsx
│   │   └── NavigationButton.tsx
│   └── theme.ts
├── public/
├── package.json
└── tsconfig.json
```

## 🎨 Styling and Theming

The project uses Material-UI with a custom theme configuration. The theme can be modified in `src/theme.ts`. All components are styled using MUI's styling solution with Emotion.

## 📝 Additional Notes

- The project uses Next.js 14's App Router for improved performance and better developer experience
- TypeScript is configured with strict mode enabled for better type safety
- Material-UI is set up with SSR support through a custom ThemeRegistry
- Client-side navigation is handled through custom components to maintain server/client component separation

## 🔧 Requirements

- Node.js 18.17 or later
- npm 9.x or later

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/getting-started/usage/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
