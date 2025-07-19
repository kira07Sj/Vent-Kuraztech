# Vent App - Anonymous Sharing Platform

![Vent App Screenshot](./public/images/Hero.png.png) 

A secure, anonymous venting platform built with React, Tailwind CSS, and localStorage for simulated backend functionality.

## Features

- 🔒 **User Authentication**
  - Secure login/registration
  - Persistent sessions using localStorage
- 📝 **Vent Creation**
  - Post anonymous vents
  - Edit/delete your own vents
- 👍👎 **Voting System**
  - Like/dislike vents (one vote per user)
- 💬 **Comments**
  - Add comments to vents
  - View comment history
- 🎨 **Modern UI**
  - Responsive Tailwind CSS design
  - Interactive elements with animations

## Technologies Used

- ⚛️ React 18
- 🎨 Tailwind CSS
- 🏷️ Iconify for icons
- 🗄️ localStorage for data persistence
- 🚀 Vite for ultra-fast development

## Live Demo

👉 [https://vent-kuraztech.vercel.app](https://vent-kuraztech.vercel.app)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kira07Sj/Vent-Kuraztech.git
2. Install dependencies:
    npm install
3. Start development server:
    npm run dev

## Deployment
This project is configured for easy deployment on Vercel:

Push your code to GitHub

Create a new Vercel project

Connect your GitHub repository

Deploy!

Vercel will automatically:

Detect the Vite project

Run npm run build

Deploy the optimized production build

## Project Structure

src/
├── components/
│   ├── Auth/        # Login/Register forms
│   ├── Vent/        # Vent components
│   └── Navbar.jsx   # Navigation
├── context/         # Auth context
├── App.jsx          # Main app
└── main.jsx         # Entry point

## Configuration
Edit vite.config.js for:

Base path configuration

Build optimization settings

