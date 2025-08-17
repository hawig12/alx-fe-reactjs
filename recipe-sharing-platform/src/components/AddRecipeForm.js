import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // For this task, we will just log the data.
      // In a real application, you would send this to a backend.
      console.log('Form Submitted:', formData);
      setSubmissionStatus('success');
      setFormData({
        title: '',
        ingredients: '',
        instructions: '',
      });
    } else {
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Add a New Recipe
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                errors.title ? 'border-red-500' : ''
              }`}
            />
            {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
              Ingredients (each on a new line)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="5"
              value={formData.ingredients}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                errors.ingredients ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.ingredients && <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
              Instructions (each step on a new line)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="8"
              value={formData.instructions}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                errors.instructions ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.instructions && <p className="mt-1 text-sm text-red-500">{errors.instructions}</p>}
          </div>

          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="text-indigo-600 hover:underline text-sm font-medium"
            >
              &larr; Back to Home
            </Link>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Recipe
            </button>
          </div>
          
          {submissionStatus === 'success' && (
            <p className="mt-4 text-center text-green-600 font-medium">Recipe submitted successfully!</p>
          )}
          {submissionStatus === 'error' && (
            <p className="mt-4 text-center text-red-600 font-medium">Please fix the errors before submitting.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
