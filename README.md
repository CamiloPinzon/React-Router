# React Router Multi-Page Application

This is a simple React application that demonstrates how to implement a multi-page application using React Router. The application includes routes for a homepage, about page, contact page, and services page, with nested routes and dynamic routing.

## Features

- **React Router**: Manage navigation and routing in the application.
- **Nested Routes**: Demonstrates how to create and use nested routes.
- **Dynamic Routing**: Uses URL parameters to render dynamic content.
- **Programmatic Navigation**: Utilizes `useNavigate` for programmatic navigation.

## Project Setup

### 1. Installation

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/CamiloPinzon/React-Router.git
cd React-Router
```

Then, install the dependencies:

```bash
npm install
```

### 2. Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the application on the default Vite port (usually `http://localhost:5173`).

### 3. Building for Production

To build the application for production, run:

```bash
npm run build
```

The optimized and minified build will be available in the `dist` directory.

## Application Structure

- **`src/pages/Home.tsx`**: The homepage of the application, includes links to the About and Contact pages, and uses `useNavigate` to navigate to the Services page.
- **`src/pages/About.tsx`**: The about page, which contains nested routes.
- **`src/pages/Contact.tsx`**: The contact page, accessible only via the `Link` component.
- **`src/pages/Services.tsx`**: The services page, navigated to programmatically from the Home page using `useNavigate`.
- **`src/pages/Team.tsx`**: A nested route within the about page that displays the team information.
- **`src/pages/TeamMember.tsx`**: A dynamic route that displays details for a specific team member based on the URL parameter.
- **`src/App.tsx`**: The main component that sets up the routes.

## React Router Implementation

1. **Basic Routing**: The application includes routes for the homepage (`/`), about page (`/about`), contact page (`/contact`), and services page (`/services`).
2. **Nested Routes**: The about page includes a nested route to the team section (`/about/team`).
3. **Dynamic Routing**: The application uses dynamic routing for displaying team members based on a `memberId` parameter (`/about/team/:memberId`).
4. **Programmatic Navigation**: The Services page is navigated to programmatically using the `useNavigate` hook.

## Example Usage

```tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import TeamMember from './pages/TeamMember';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="team/:memberId" element={<TeamMember />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
```

## How It Works

- **Routing**: The `Routes` component in `App.tsx` defines the different routes and nested routes.
- **Navigation**:
  - **`useNavigate`**: Used in the Home page to navigate programmatically to the Services page.
  - **`Link` Component**: Used for traditional navigation to the Contact page.
- **`useParams` Hook**: The `TeamMember` component uses the `useParams` hook to access the `memberId` from the URL.

## Branches

- **`main`**: Contains the main implementation with basic routing, nested routes, dynamic routing, and programmatic navigation.

## License

This project is licensed under the MIT License.