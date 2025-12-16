# AI Question Log

A modern, responsive React + TypeScript application for viewing and managing AI questions asked by customers, including their answers and performance metrics. Built with a comprehensive design system and optimized for both desktop and mobile experiences.

## Overview

This application provides a comprehensive interface for tracking AI interactions, featuring:

- **Questions Log Page**: A responsive table view displaying all questions with advanced filtering and sorting capabilities
- **Question Detail Page**: A detailed view showing complete question and answer information with rich metadata
- **Design System**: A complete, reusable component library with typography, icons, and UI components for consistent UI/UX
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices

## Features

### Questions Log Page

- **Sortable Table**: Display all questions in a responsive table format with multi-column sorting
- **Advanced Filtering**: Filter questions by timestamp range (start date and end date)
- **Search Functionality**: Real-time search across questions, users, and responses
- **Interactive Sorting**: Sort questions by timestamp, response time, user, or question text
- **Row Navigation**: Click on any question row to view full details
- **Performance Metrics**: View question preview, timestamp, response time, and user information
- **Mobile-Optimized**: Responsive table layout with horizontal scrolling and touch-friendly interactions

### Question Detail Page

- **Complete Information Display**: Full question text and complete AI response
- **User Metadata**: Detailed user information including name and unique ID
- **Timestamp Formatting**: Human-readable timestamp with detailed date and time
- **Response Time Indicators**: Color-coded badges indicating response performance (success, info, warning, error)
- **Navigation**: Seamless navigation back to questions log with breadcrumb support

### Design System

The application includes a comprehensive, well-organized design system package (`src/design-system/`) designed for scalability and consistency.

#### Core UI Components

- **Button**: Interactive buttons with multiple variants (primary, secondary, outline, ghost) and sizes (sm, md, lg). Supports hover states and disabled states.
- **Card**: Container component with consistent styling, neumorphic shadows, and hover effects. Responsive padding and rounded corners.
- **Table**: Responsive data table component with customizable columns, row click handling, and mobile-optimized layout with horizontal scrolling.
- **Input**: Form input fields with label support, error message handling, and consistent styling across the application.
- **Badge**: Status indicators with semantic color variants (success, warning, error, info) and WCAG AA compliant contrast ratios.
- **Toggle**: Neumorphic toggle switch component for boolean settings with smooth animations.

#### Typography System

A comprehensive typography system providing consistent text styling across the application:

- **Typography Component**: Base component with multiple variants and flexible rendering
- **Variants Available**:
  - `display-1`, `display-2`: Large display headings for hero sections
  - `h1`, `h2`, `h3`, `h4`: Semantic heading components with serif/italic options
  - `body-lg`, `body`, `body-sm`: Body text variants for different content hierarchies
  - `caption`: Small text for captions and metadata
- **Convenience Components**: Pre-configured components (`H1`, `H2`, `H3`, `H4`, `Body`, `Caption`) for common use cases
- **Font Support**: Supports both sans-serif (default) and serif fonts with italic styling
- **Semantic HTML**: Automatically renders appropriate HTML tags based on variant

#### Icon System

A centralized icon library with custom-designed SVG icons:

- **QuestionsIcon**: Document icon for questions and content
- **AnalyticsIcon**: Chart/pie icon for analytics and metrics
- **SettingsIcon**: Slider/controls icon for settings and preferences
- **HelpIcon**: Question mark in circle for help and support
- **UserIcon**: User profile icon for user-related features
- **CalendarIcon**: Calendar icon for date selection and scheduling

All icons:

- Use `currentColor` for theme compatibility
- Include inner shadow effects for depth
- Accept `className` prop for flexible sizing and styling
- Optimized SVG with proper viewBox attributes
- Accessible with semantic markup

#### Design System Principles

All components follow these principles:

- **Type Safety**: Fully typed with TypeScript interfaces and props
- **Documentation**: Comprehensive JSDoc comments with usage examples
- **Styling**: Consistent Tailwind CSS utility classes with custom design tokens
- **Accessibility**: WCAG AA compliant with proper contrast ratios and semantic HTML
- **Responsiveness**: Mobile-first approach with responsive breakpoints
- **Consistency**: Unified design patterns and component APIs

## Tech Stack

- **React 18**: Modern UI library with hooks and functional components
- **TypeScript**: Full type safety and enhanced developer experience
- **Vite**: Fast build tool and development server with HMR
- **React Router DOM**: Client-side routing with URL parameters
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **TanStack Table**: Powerful table library for data display and manipulation
- **ESLint**: Code linting and quality assurance

## Project Structure

```text
src/
├── design-system/          # Comprehensive design system
│   ├── icons/              # Icon component library
│   │   ├── QuestionsIcon.tsx
│   │   ├── AnalyticsIcon.tsx
│   │   ├── SettingsIcon.tsx
│   │   ├── HelpIcon.tsx
│   │   ├── UserIcon.tsx
│   │   ├── CalendarIcon.tsx
│   │   └── index.ts
│   ├── Button.tsx          # Button component
│   ├── Card.tsx            # Card container component
│   ├── Table.tsx           # Table component
│   ├── Input.tsx           # Input field component
│   ├── Badge.tsx           # Badge status indicator
│   ├── Toggle.tsx          # Toggle switch component
│   ├── Typography.tsx      # Typography system
│   └── index.ts            # Design system exports
├── components/             # Application-specific components
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── BottomNavigation.tsx # Mobile bottom navigation
│   ├── DataTable.tsx       # Table wrapper with TanStack Table
│   ├── FilterDropdown.tsx  # Date filter component
│   ├── DatePicker.tsx      # Date picker component
│   └── ui/                 # UI primitives
│       ├── table.tsx        # Table primitives
│       └── dropdown-menu.tsx
├── pages/                  # Application pages
│   ├── QuestionsLog.tsx    # Main questions list page
│   └── QuestionDetail.tsx  # Question detail view
├── contexts/              # React contexts
│   ├── SidebarContext.tsx  # Sidebar state management
│   └── ThemeContext.tsx    # Theme state management
├── data/                   # Mock data
│   └── mockData.ts         # Sample questions and responses
├── types/                  # TypeScript type definitions
│   └── index.ts
├── App.tsx                 # Main app component with routing
├── main.tsx                # Application entry point
└── index.css               # Global styles and CSS variables
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
- **Custom Design Tokens**: Extended Tailwind's default theme with a comprehensive color palette, typography scale, and spacing system
- **CSS Variables**: Theme-aware color system supporting light and dark modes via CSS custom properties
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities with custom breakpoints
- **Neumorphism**: Subtle neumorphic design elements for depth and modern aesthetics

### Component Architecture

- **Design System Separation**: Components are organized into a dedicated design system package for maximum reusability
- **Consistent API Patterns**: All components follow unified prop interfaces and naming conventions
- **Composition Over Configuration**: Flexible components that can be composed for complex use cases
- **TypeScript-First**: Full type safety with exported interfaces for all component props
- **Documentation**: Comprehensive JSDoc comments with usage examples for all components

### Typography Design Decisions

- **Semantic Variants**: Typography variants map to semantic HTML elements for accessibility
- **Font Flexibility**: Support for both sans-serif and serif fonts with optional italic styling
- **Responsive Scaling**: Typography scales appropriately across device sizes
- **Convenience Components**: Pre-configured components for common typography patterns

### Icon Design Decisions

- **Custom SVG Icons**: Hand-crafted SVG icons with consistent styling and effects
- **Theme Integration**: Icons use `currentColor` for seamless theme integration
- **Accessibility**: Proper semantic markup and ARIA considerations
- **Centralized Management**: All icons organized in a dedicated icons directory

### State Management

- **React Hooks**: Local component state using useState, useMemo, and useEffect
- **Context API**: React Context for shared state (sidebar, theme) without external dependencies
- **Performance Optimization**: Efficient filtering and sorting using useMemo to prevent unnecessary re-renders
- **TanStack Table**: Powerful table state management for complex data operations

### Routing

- **React Router DOM**: Client-side routing with browser history API
- **URL Parameters**: Clean URL structure with question IDs as route parameters
- **Navigation**: Seamless navigation between list and detail views with back button support

### Accessibility

- **WCAG AA Compliance**: All components meet WCAG AA contrast ratio requirements
- **Semantic HTML**: Proper use of semantic HTML elements for screen readers
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Attributes**: Appropriate ARIA labels and roles where needed

## Development Guidelines

### Adding New Components

When adding new components to the design system:

1. Create the component file in `src/design-system/`
2. Export the component and its types from `src/design-system/index.ts`
3. Add JSDoc comments with usage examples
4. Ensure TypeScript types are properly defined
5. Follow existing component patterns and naming conventions
6. Test responsive behavior across breakpoints

### Adding New Icons

When adding new icons:

1. Create the icon component in `src/design-system/icons/`
2. Use the existing icon pattern with `currentColor` fill
3. Export from `src/design-system/icons/index.ts`
4. Ensure SVG is optimized and includes proper viewBox
5. Test icon sizing and color inheritance

### Styling Conventions

- Use Tailwind utility classes for styling
- Leverage CSS custom properties for theme values
- Follow mobile-first responsive design patterns
- Maintain consistent spacing using Tailwind's spacing scale
- Use semantic color tokens from the design system

## Future Enhancements

Potential improvements for future iterations:

- **Performance**: Virtual scrolling for large datasets, pagination improvements
- **Data Export**: Export functionality (CSV, JSON, PDF) with customizable formats
- **Advanced Filtering**: Multi-criteria filtering (by user, response time range, tags)
- **Real-time Updates**: WebSocket integration for live question updates
- **Authentication**: User authentication and authorization system
- **Analytics Dashboard**: Advanced analytics with charts, metrics, and insights
- **Question Management**: Categorization, tagging, and organization features
- **Search Enhancements**: Full-text search with highlighting and advanced query syntax
- **Dark Mode**: Complete dark mode theme implementation
- **Internationalization**: Multi-language support with i18n

## Contributing

This project follows best practices for React and TypeScript development. When contributing:

- Maintain TypeScript type safety
- Follow existing code patterns and conventions
- Ensure components are responsive and accessible
- Add appropriate documentation and examples
- Test across different screen sizes and browsers

## License

This project is provided as a solution for the AI Question Log PRD.
