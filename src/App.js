import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ClientLogin from './components/ClientLogin';
import FinanceTypes from './components/FinanceTypes';
import OpenAccount from './components/OpenAccount';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename="/VsBanking">
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Security />
                <CTA />
              </>
            } />
            <Route path="/finance-types" element={<FinanceTypes />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/open-account" element={<OpenAccount />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
