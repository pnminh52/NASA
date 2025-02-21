import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
