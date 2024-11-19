import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginSignup from './Components/LoginSignUp/LoginSignup';
import Categories from './Components/Categories/Categories';
import CategoryDetail from './Components/Categories/CategoryDetail';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/:id" element={<CategoryDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
