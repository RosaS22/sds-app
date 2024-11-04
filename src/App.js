// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SeasoningsPage from './pages/SeasoningsPage';
import SweeteningsPage from './pages/SweeteningsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './/App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="appBody">
    <Router>
    <Header />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seasonings" element={<SeasoningsPage />} />
          <Route path="/sweetenings" element={<SweeteningsPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
