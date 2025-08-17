import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm'; // Import the new component
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* New route for the form */}
      </Routes>
    </Router>
  );
}

export default App;
