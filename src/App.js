import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Resources from './Pages/Resources';
import Pricing from './Pages/Pricing';
import Product from './Pages/Product';
import Solutions from './Pages/Solutions';
import Enterprise from './Pages/Enterprise';
import Footer from './Pages/Footer';
import SignUp from './Pages/SignUp';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import UpgradeDash from './Pages/UpgradeDash';
import AdminCenterDash from './Pages/AdminCenterDash';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Only render Nav and Footer if the current route is not '/Dashboard' */}
      {location.pathname !== '/Dashboard' && <Nav />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/signup" element={<SignInPage />} /> {/* Set up Sign Up route */}
        <Route path="/sign-in" element={<SignUpPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/UpgradeDash" element={<UpgradeDash />} />
        <Route path="/AdminCenterDash" element={<AdminCenterDash />} />
      </Routes>
      
      {/* Only render Footer if the current route is not '/Dashboard' */}
      {location.pathname !== '/Dashboard' && <Footer />}
    </>
  );
}

export default App;



