import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import DetailBook from './pages/DetailBook';
import Home2 from './pages/Home2'
import TestData from './pages/TestData';
import CreateBook from './pages/CreateBook';
import Login from './pages/Login';
import Cart from './pages/Cart';




function App() {
  return (

    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />    
        <Route path="/test" element={<TestData/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home2/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<DetailBook />} />
        <Route path="/create" element={<CreateBook />} /> 
        <Route path="/create/:id" element={<CreateBook />} />
        <Route path="/cart" element={<Cart/>} /> 
      </Routes>
    </Router>
  
    </div>
    

  );
}

export default App;