import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RouteDetailsPage from './pages/RouteDetailsPage';
import EldLogsPage from './pages/EldLogsPage';
import { TripData } from './types/tripTypes';
export function App() {
  const [tripData, setTripData] = useState<TripData | null>(null);
  const handleTripSubmit = (data: TripData) => {
    setTripData(data);
  };
  return <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onTripSubmit={handleTripSubmit} />} />
            <Route path="/route-details" element={tripData ? <RouteDetailsPage tripData={tripData} /> : <Navigate to="/" />} />
            <Route path="/eld-logs" element={tripData ? <EldLogsPage tripData={tripData} /> : <Navigate to="/" />} />
          </Routes>
        </main>
        <footer className="py-4 text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
          &copy; {new Date().getFullYear()} Trip Route & ELD Log Generator
        </footer>
      </div>
    </Router>;
}