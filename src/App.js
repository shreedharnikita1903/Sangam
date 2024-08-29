import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Services from './components/Services';
import It from './components/It';
import Training from './components/Training';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from  './components/About';
import Hr from  './components/Hr';
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/it" element={<It />} />
          <Route path="/Hr" element={<Hr />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
