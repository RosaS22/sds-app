// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SeasoningsPage from './pages/SeasoningsPage';
import SweeteningsPage from './pages/SweeteningsPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling
import './App.css'; // Importing custom styles for the app
import Header from './components/Header';

// Main App component that serves as the root of the application
const App = () => {
  return (
    <div className="appBody"> {/* Main container for the app layout */}
      <Router> {/* Router component to manage navigation between pages */}
        <Header /> {/* Header component that displays navigation links */}
        
        <Container className="mt-4"> {/* Container for page content, with Bootstrap margin */}
          <Routes> {/* Define routes to different pages */}
            <Route path="/" element={<HomePage />} /> {/* Home page route */}
            <Route path="/seasonings" element={<SeasoningsPage />} /> {/* Seasonings page route */}
            <Route path="/sweetenings" element={<SweeteningsPage />} /> {/* Sweetenings page route */}
          </Routes>
        </Container>
        
        <Footer /> {/* Footer component displayed at the bottom of every page */}
      </Router>
    </div>
  );
};

export default App;
