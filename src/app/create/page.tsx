'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { createRecipe } from '@/services/post/createRecipe';
import RecipeForm from '@/componentes/RecipeForm';

const CreateRecipe: React.FC = () => {
  const router = useRouter(); 

  const handleSubmit = async (recipe: {
    title: string;
    description: string;
    ingredients: string[];
    tags: string[];
    image: string;
    preparation_time_in_minutes: number;
    steps: string[];
    evaluation: number;
    categories: string[];
  }) => {
    await createRecipe(recipe);
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

 
      <div className="flex-grow max-w-2xl mx-4 p-4 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Create a New Recipe</h1>
       <RecipeForm onSubmit={handleSubmit}/>
      </div>
    </div>
  );
};

export default CreateRecipe;
