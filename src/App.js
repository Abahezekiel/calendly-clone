// App.js or any other component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './Components/Nav'



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
