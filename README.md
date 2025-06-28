# Haul Trackr - Trip Route & ELD Log Generator

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Component Architecture](#component-architecture)
6. [User Interface](#user-interface)
7. [Installation & Setup](#installation--setup)
8. [Usage Guide](#usage-guide)

## Project Overview

Haul Trackr is a modern web application designed for truck drivers and fleet managers to plan routes, generate ELD (Electronic Logging Device) logs, and stay compliant with hours of service regulations. The application provides an intuitive interface for planning trips, visualizing routes with rest stops, and generating compliant electronic logs.

## Features

### 1. Route Planning

- **Interactive Trip Form**: Easy-to-use form for entering trip details
- **Current Location Detection**: Automatic geolocation detection
- **Route Optimization**: Automatic calculation of optimal routes between pickup and delivery points
- **Rest Stop Planning**: Strategic placement of rest stops based on HOS regulations
- **Fuel Stop Integration**: Suggested fuel stops along the route

### 2. Route Visualization

- **Interactive Map**: Real-time route display using Leaflet maps
- **Color-coded Markers**: Different markers for pickup, dropoff, rest, and fuel stops
- **Route Details**: Comprehensive trip summary including:
  - Total distance
  - Estimated duration
  - Number of rest stops
  - Number of fuel stops
  - Detailed schedule

### 3. ELD Compliance

- **Hours of Service Tracking**: Real-time tracking of:
  - Driving hours
  - On-duty hours
  - Off-duty hours
  - Sleeper berth time
- **Cycle Hour Management**: Track and manage available cycle hours
- **Compliance Monitoring**: Automatic alerts for HOS violations
- **PDF Generation**: Downloadable ELD logs for record-keeping

### 4. User Experience

- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Live status updates and route calculations
- **Offline Support**: Basic functionality without internet connection

## Technology Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.2.0
- **Language**: TypeScript 5.5.4
- **Routing**: React Router DOM
- **UI Components**:
  - Lucide React (icons)
  - Leaflet (maps)
- **Styling**:
  - Tailwind CSS 3.4.17
  - CLSX (class utilities)
  - Tailwind Merge
- **Package Manager**: pnpm 10.6.4

## Project Structure

```
haul-trackr/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # App header with navigation
│   │   ├── RouteMap.tsx    # Map visualization component
│   │   └── TripForm.tsx    # Trip planning form
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── RouteDetailsPage.tsx  # Route visualization
│   │   └── EldLogsPage.tsx      # ELD logs display
│   ├── types/              # TypeScript definitions
│   │   └── tripTypes.ts    # Trip-related type definitions
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Helper utilities
│   ├── App.tsx            # Root component
│   └── index.tsx          # Application entry point
├── public/                # Static assets
└── config files          # Various configuration files
```

## Component Architecture

### Core Components

1. **TripForm (`components/TripForm.tsx`)**

   - Handles trip data input
   - Validates form data
   - Supports geolocation detection
   - Manages cycle hours input

2. **RouteMap (`components/RouteMap.tsx`)**

   - Renders interactive Leaflet map
   - Displays route with waypoints
   - Shows color-coded markers for different stop types
   - Provides popup information for each stop

3. **Header (`components/Header.tsx`)**
   - Main navigation component
   - Theme toggle functionality
   - Responsive menu system

### Page Components

1. **HomePage (`pages/HomePage.tsx`)**

   - Landing page with trip form
   - Feature highlights
   - Quick access to main functions

2. **RouteDetailsPage (`pages/RouteDetailsPage.tsx`)**

   - Route visualization
   - Trip summary display
   - Stop details and timing
   - Navigation to ELD logs

3. **EldLogsPage (`pages/EldLogsPage.tsx`)**
   - HOS status display
   - Daily log entries
   - Compliance information
   - PDF download functionality

## User Interface

### Design System

- **Color Scheme**:
  - Primary: Teal (`#0D9488`)
  - Dark Mode Background: Slate (`#0F172A`)
  - Light Mode Background: Slate 50 (`#F8FAFC`)
  - Accent Colors: Various contextual colors for status indicators

### Responsive Design

- Mobile-first approach
- Breakpoint system:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### UI Components

- Custom form inputs
- Interactive maps
- Status indicators
- Loading states
- Error messages
- Modal dialogs

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/haul-trackr.git
   cd haul-trackr
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Usage Guide

### Planning a Trip

1. Navigate to the home page
2. Fill in the trip form:
   - Current location (or use auto-detect)
   - Pickup location
   - Dropoff location
   - Current cycle hours used
3. Click "Generate Route & Log"

### Viewing Route Details

1. Review the generated route on the map
2. Check trip summary information:
   - Total distance and duration
   - Rest and fuel stops
   - Detailed schedule
3. Navigate to ELD logs for compliance information

### Managing ELD Logs

1. View daily log summary
2. Check HOS status and remaining cycle time
3. Download PDF reports for record-keeping

---

**Last Updated**: March 2024
