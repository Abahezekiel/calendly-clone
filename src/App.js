// App.js or any other component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './Components/Nav'
import Resources from './Pages/Resources';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import Solutions from './Pages/Solutions';
import Enterprise from './Pages/Enterprise';



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path='resources' element ={<Resources />} />
        <Route path="pricing" element = {<Pricing />} />
        <Route path="product" element = {<Product />} />
        <Route path="solution" element = {<Solutions />} />
        <Route path="enterprise" element = {<Enterprise />} />


      </Routes>
    </Router>
  );
}

export default App;
