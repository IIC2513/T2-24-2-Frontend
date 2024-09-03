'use client'

import React, { useState, ChangeEvent } from 'react';

interface RecipeFormProps {
  onSubmit: (recipe: {
    title: string;
    description: string;
    ingredients: string[];
    tags: string[];
    image: string;
    preparation_time_in_minutes: number;
    steps: string[];
    evaluation: number;
    categories: string[];
  }) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [steps, setSteps] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [categories, setCategories] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe = {
      title,
      description,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      tags: tags.split(',').map((tag) => tag.trim()),
      image,
      preparation_time_in_minutes: Number(preparationTime),
      steps: steps.split('\n').map((step) => step.trim()),
      evaluation: Number(evaluation),
      categories: categories.split(',').map((cat) => cat.trim()),
    };

    onSubmit(newRecipe);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-lg font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          placeholder='Flan de atún'
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Description</label>
        <textarea
          value={description}
          placeholder='Un delicioso flan de atún'
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Ingredients (comma separated)</label>
        <input
          type="text"
          value={ingredients}
          placeholder='Atún, leche, huevo'
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Tags (comma separated)</label>
        <input
          type="text"
          value={tags}
          placeholder='Atún, postre'
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Image URL</label>
        <input
          type="text"
          value={image}
          placeholder='https://example.com/flan_de_atun.jpg'
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Preparation Time (in minutes)</label>
        <input
          type="number"
          min="1"
          value={preparationTime}
          placeholder='30'
          onChange={(e) => setPreparationTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Steps (one per line)</label>
        <textarea
          value={steps}
          placeholder='Mezclar los ingredientes, hornear por 30 minutos'
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Evaluation (1-5)</label>
        <input
          type="number"
          min="1"
          max="5"
          value={evaluation}
          placeholder='5'
          onChange={(e) => setEvaluation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Categories (comma separated)</label>
        <input
          type="text"
          value={categories}
          placeholder='Postres, Saludable'
          onChange={(e) => setCategories(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Cook
      </button>
    </form>
  );
};

export default RecipeForm;
