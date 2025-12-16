# AI Question Log

A React + TypeScript application for viewing and managing AI questions asked by customers, including their answers and performance metrics.

## Overview

This application provides a comprehensive interface for tracking AI interactions, featuring:

- **Questions Log Page**: A table view displaying all questions with filtering and sorting capabilities
- **Question Detail Page**: A detailed view showing complete question and answer information
- **Design System**: A reusable component library for consistent UI/UX

## Features

### Questions Log Page
- Display all questions in a sortable table format
- Filter questions by timestamp (start date and end date)
- Search functionality across questions, users, and responses
- Sort questions by timestamp (ascending/descending)
- Click on any question to view full details
- Shows question preview, timestamp, response time, and user information

### Question Detail Page
- Full question text display
- Complete AI response
- User information (name and ID)
- Timestamp with detailed formatting
- Response time with color-coded badges
- Navigation back to questions log

### Design System
The application includes a well-organized design system package (`src/design-system/`) with the following reusable components:

- **Button**: Interactive buttons with multiple variants (primary, secondary, outline) and sizes
- **Card**: Container component with consistent styling and hover effects
- **Table**: Data table component with customizable columns and row click handling
- **Input**: Form input fields with label and error message support
- **Badge**: Status indicators with color variants (success, warning, error, info)

All components are:
- Fully typed with TypeScript
- Documented with JSDoc comments
- Styled with Tailwind CSS
- Following consistent design patterns

## Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting

## Project Structure

```
src/
├── design-system/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Table.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   └── index.ts            # Design system exports
├── pages/                  # Application pages
│   ├── QuestionsLog.tsx    # Main questions list page
│   └── QuestionDetail.tsx  # Question detail view
├── data/                   # Mock data
│   └── mockData.ts         # Sample questions and responses
├── types/                  # TypeScript type definitions
│   └── index.ts
├── App.tsx                 # Main app component with routing
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

Build the application:
```bash
npm run build
```

The production build will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## Mock Data

The application uses static mock data located in `src/data/mockData.ts`. The mock data includes:

- 12 sample questions covering various topics
- Realistic timestamps spanning multiple days
- Varied response times (ranging from 245ms to 1234ms)
- Different users with unique identifiers
- Complete question texts and detailed AI responses

You can modify this file to add more questions or change the data structure as needed.

## Usage

### Viewing Questions

1. Navigate to the home page to see the Questions Log
2. Use the search bar to filter questions by text content
3. Use date filters to narrow down questions by timestamp
4. Click the sort button to toggle between newest and oldest first
5. Click on any question row to view its full details

### Question Details

1. Click on any question from the Questions Log
2. View the complete question text and AI response
3. See detailed user information and timestamp
4. Check response time with color-coded badge
5. Use the "Back" button to return to the questions list

## Design Decisions

### Styling Approach
- **Tailwind CSS** was chosen for its utility-first approach, rapid development, and excellent TypeScript support
- Custom color palette extends Tailwind's default theme with a primary color scheme
- Responsive design using Tailwind's responsive utilities

### Component Architecture
- Design system components are separated into their own package for reusability
- Components follow a consistent API pattern with TypeScript interfaces
- All components are documented with JSDoc comments

### State Management
- Local component state using React hooks (useState, useMemo)
- No external state management library needed for this scope
- Efficient filtering and sorting using useMemo for performance

### Routing
- React Router DOM for client-side routing
- Simple two-route structure (list and detail views)
- URL parameters for question IDs

## Future Enhancements

Potential improvements for future iterations:

- Pagination for large question sets
- Export functionality (CSV, JSON)
- Advanced filtering options (by user, response time range)
- Real-time updates with WebSocket integration
- User authentication and authorization
- Analytics dashboard with charts and metrics
- Question categorization and tagging

## License

This project is provided as a solution for the AI Question Log PRD.

