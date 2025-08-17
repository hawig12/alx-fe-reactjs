import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.value; // Explicitly using target.value here
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
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
      setSubmissionStatus('success');
      setFormData({
        title: '',
        ingredients: '',
        steps: '',
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
            <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-1">
              Preparation Steps (each step on a new line)
            </label>
            <textarea
              id="steps"
              name="steps" // Renamed from 'instructions' to 'steps'
              rows="8"
              value={formData.steps}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                errors.steps ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.steps && <p className="mt-1 text-sm text-red-500">{errors.steps}</p>}
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
