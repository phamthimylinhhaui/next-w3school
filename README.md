# Web3School - Interactive Blockchain Learning Platform

A modern, interactive platform for learning blockchain development with hands-on coding challenges and real-time feedback.

## Features

- 🎯 Interactive Coding Challenges
- 💻 Built-in Code Editor
- ✅ Real-time Code Compilation
- 📊 Progress Tracking
- 🎓 Comprehensive Course Structure
- 🌐 Web3 Integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Material-UI (MUI)
- **Code Editor**: Monaco Editor
- **State Management**: React Hooks
- **Authentication**: Next Auth (planned)

## Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   └── login/
│   └── (main)/
│       ├── courses/
│       │   └── [courseId]/
│       │       └── challenges/
│       │           └── [challengeId]/
│       └── layout.tsx
├── components/
│   ├── challenge/
│   │   ├── ChallengeContent.tsx
│   │   ├── CodeEditorSection.tsx
│   │   ├── CompileSuccessModal.tsx
│   │   └── OutputConsole.tsx
│   ├── ChallengeCard.tsx
│   ├── ChallengeFilters.tsx
│   ├── CourseCard.tsx
│   ├── Header.tsx
│   └── ThemeRegistry.tsx
├── config/
│   └── site.ts
└── theme.ts
```

## Key Components

### Challenge System
- **ChallengeContent**: Displays challenge description, tasks, and tests
- **CodeEditorSection**: Monaco-based code editor with syntax highlighting
- **CompileSuccessModal**: Success feedback after challenge completion
- **OutputConsole**: Shows compilation and execution results

### Navigation
- **Header**: Main navigation and user controls
- **CourseCard**: Course preview and selection
- **ChallengeCard**: Individual challenge preview

## Getting Started

1. **Installation**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

## Development Guidelines

- Follow TypeScript best practices
- Use Material-UI components for consistency
- Implement responsive design patterns
- Write clean, documented code
- Follow the established folder structure

## Planned Features

- [ ] Authentication system
- [ ] User progress tracking
- [ ] More challenge types
- [ ] Interactive tutorials
- [ ] Community features
- [ ] Achievement system

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
