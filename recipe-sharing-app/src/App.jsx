import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="p-6">
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
