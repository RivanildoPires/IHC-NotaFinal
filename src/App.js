import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/home';
import ProductPage from './components/PaginaProdutos';
import PaginaBusca from './components/PaginaBusca'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {}
        <Route path="/product/:id" element={<ProductPage />} /> {}
        <Route path="/search" element={<PaginaBusca />} /> {}
      </Routes>
    </Router>
  );
}

export default App;