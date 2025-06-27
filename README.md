# My Portfolio

## Showcase of My Work and Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)](https://react.dev/)
[![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat)](https://vitejs.dev/)

---

## 🚀 Overview

Welcome to my personal portfolio! This repository hosts the source code for my professional online presence, designed to showcase my projects, skills, and experience. It serves as a central hub where potential employers, collaborators, and clients can learn more about me and my work.

The portfolio is built with a focus on modern web development practices, featuring a clean, responsive design and a smooth user experience.

## ✨ Features

* **Modern & Responsive Design:** Crafted to ensure a beautiful and functional experience across all devices (desktops, tablets, and mobile phones).
* **Project Showcase:** Dedicated sections to highlight key projects with descriptions, technologies used, and links to live demos or repositories.
* **Skills Section:** A clear overview of my technical proficiencies.
* **Interactive Contact Form:** A user-friendly form to facilitate direct communication (currently simulates submission, can be integrated with backend services).
* **VS Code Inspired Code Blocks:** Unique styling for contact information, mimicking a VS Code editor environment.
* **Optimized Performance:** Leverages Vite for fast development and efficient production builds.
* **Professional Icons:** Utilizes `react-icons` for crisp and scalable iconography.

## 🛠️ Technologies Used

* **React.js:** A declarative, efficient, and flexible JavaScript library for building user interfaces.
* **Vite:** A next-generation frontend tooling that provides an extremely fast development experience.
* **React Icons:** A library that provides popular icon sets (like Font Awesome, Material Design, etc.) as React components.
* **JavaScript:** The primary programming language for the application's logic.

## 📦 Installation & Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (LTS version recommended)
* npm (Node Package Manager) or Yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/manirht/my-portfolio.git](https://github.com/manirht/my-portfolio.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd my-portfolio
    ```
3.  **Install core dependencies:**
    ```bash
    npm install
    # OR
    # yarn install
    ```
4.  **Install React Icons:**
    ```bash
    npm install react-icons
    ```
5.  **Ensure your main CSS file (`src/index.css` or similar) contains your global styles:**
    ```css
    /* src/index.css */
    /* Define your custom CSS variables here for global use */
    :root {
      --bg-primary: #1a1a2e;
      --bg-secondary: #212a3e;
      --bg-tertiary: #2e3b55;
      --text-primary: #e0e0e0;
      --text-secondary: #a0a0a0;
      --accent-primary: #63b3ed;
      --accent-secondary: #e53e3e;
      --border-color: #4a5568;

      /* VS Code like colors for the code block */
      --vs-green: #4ec9b0;
      --vs-purple: #c586c0;
      --vs-yellow: #dcdcaa;
      --vs-orange: #ce9178;
      --vs-blue: #569cd6;
    }

    body {
      font-family: "Inter", sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }
    ```
6.  **Ensure your main CSS file is imported in `src/main.jsx`:**
    ```javascript
    // src/main.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import './index.css'; // Make sure this line is present

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    ```
7.  **Run the development server:**
    ```bash
    npm run dev
    # OR
    # yarn dev
    ```
    This will start the development server, usually at `http://localhost:5173/`. Open your browser to view the application.

## 🚀 Deployment

This project can be easily deployed to various static site hosting services like Netlify, Vercel, GitHub Pages, or Firebase Hosting.
To create a production-ready build:

```bash
npm run build
# OR
# yarn build
