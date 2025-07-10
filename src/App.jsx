// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
