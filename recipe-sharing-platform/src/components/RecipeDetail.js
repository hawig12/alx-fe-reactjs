import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID from the JSON data
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Recipe not found.</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-10">
        <Link to="/" className="text-indigo-600 hover:underline mb-6 block">
          &larr; Back to Home
        </Link>
        
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              {recipe.summary}
            </p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
