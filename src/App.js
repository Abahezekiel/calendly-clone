import React from 'react';
import { Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="/enterprise" element={<Enterprise />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/signup" element={<SignInPage />} /> {/* Set up Sign Up route */}
        <Route path="/sign-in" element={<SignUpPage />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;



// function App() {
//   return (
//    <a href='/sign-in'>Sign In</a>
   
//   );
// }

// export default App;