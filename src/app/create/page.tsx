'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use this if you're on a client component
import { createRecipe } from '@/services/post/createRecipe';

const CreateRecipe: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [steps, setSteps] = useState('');
  const [evaluation, setEvaluation] = useState(''); // Default evaluation
  const [categories, setCategories] = useState('');
  const router = useRouter(); // Use this if you're on a client component

  const handleSubmit = async (e: React.FormEvent) => {
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

    // Example: await fetch('/api/recipes', { method: 'POST', body: JSON.stringify(newRecipe) });
    await createRecipe(newRecipe);

    console.log(newRecipe); // For testing purposes

    // Redirect to another page after successful submission
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center bg-gray-100"
    style={
        {backgroundImage: "url('https://chilena-cossas.myshopify.com/cdn/shop/collections/image_4b8214e2-2b1d-42d2-9530-5b799f4d0e0e.jpg?v=1692375836')",
        backgroundSize: "cover",
        backgroundRepeat: 'repeat',
        backgroundPosition: "center",}
    }>

      {/* Form Container */}
      <div className="flex-grow max-w-2xl mx-4 p-4 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Create a New Recipe</h1>
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
      </div>
    </div>
  );
};

export default CreateRecipe;
