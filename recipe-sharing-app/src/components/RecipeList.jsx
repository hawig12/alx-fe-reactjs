import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

import React from 'react';
import useRecipeStore from '../useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
