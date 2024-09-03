'use client';
import React, { useState, ChangeEvent } from 'react';
import { updateRecipe } from '@/services/patch/updateRecipe';
import { deleteRecipe } from '@/services/delete/deleteRecipe';

interface RecipeModalProps {
  recipe: {
    id: number;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    steps: string[];
    preparation_time_in_minutes: number;
    evaluation: number;
    categories: string[];
  };
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState(recipe);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedRecipe({ ...editedRecipe, [name]: value });
    };

    const handleUpdateClick = async () => {
        try {
            const result = await updateRecipe(recipe.id, editedRecipe);
            if (!result.error) {
                alert('Recipe updated successfully!');
                setIsEditing(false);
            } else {
                alert('Error updating recipe');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        }
    };

    const handleDeleteRecipe = async (id: number) => {
        try {
            const result = await deleteRecipe(id, recipe);
            if (!result.error) {
                alert('Recipe deleted successfully!');
                onClose();
                window.location.reload();
            } else {
                alert('Error deleting recipe');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        }
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            style={{
                position: "fixed",
                backgroundColor: "white",
                overflowY: "auto",
                borderRadius: "0.5rem",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    maxWidth: "90%", 
                    width: "auto",
                
                }}
            >
                {isEditing ? (
                    <div
                    style={{
                        // padding: "1rem",
                        borderRadius: "0.5rem",
                        maxWidth: "100%", 
                        width: "800px"
                    }}>
                        <h2 className="text-2xl font-bold mb-4">Edit {recipe.title}</h2>
                        <input
                            type="text"
                            name="image"
                            value={editedRecipe.image}
                            onChange={handleInputChange}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="text"
                            name="title"
                            value={editedRecipe.title}
                            onChange={handleInputChange}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <textarea
                            name="description"
                            value={editedRecipe.description}
                            onChange={handleInputChange}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                            rows={4}
                        />
                        <input
                            type="text"
                            name="ingredients"
                            value={editedRecipe.ingredients.join(', ')}
                            onChange={(e) => setEditedRecipe({ ...editedRecipe, ingredients: e.target.value.split(',').map(item => item.trim()) })}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="text"
                            name="steps"
                            value={editedRecipe.steps.join(', ')}
                            onChange={(e) => setEditedRecipe({ ...editedRecipe, steps: e.target.value.split(',').map(item => item.trim()) })}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="number"
                            name="preparation_time_in_minutes"
                            value={editedRecipe.preparation_time_in_minutes}
                            onChange={handleInputChange}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="number"
                            name="evaluation"
                            value={editedRecipe.evaluation}
                            onChange={handleInputChange}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="text"
                            name="categories"
                            value={editedRecipe.categories.join(', ')}
                            onChange={(e) => setEditedRecipe({ ...editedRecipe, categories: e.target.value.split(',').map(item => item.trim()) })}
                            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleUpdateClick}
                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 ml-2"
                                style={{ background: 'red', }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                            <img src={recipe.image} alt={recipe.title} className="w-full object-cover mb-4 rounded-md" 
                                style={{
                                    padding: "1rem",
                                }}/>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className="text-2xl font-bold">{recipe.title}</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-600 hover:text-gray-900 text-4xl"
                            >
                                &times;
                            </button>
                        </div>
                        <p className="mb-4">{recipe.description}</p>
                        <h3 className="text-xl font-semibold mb-2"><strong>Ingredients</strong>:</h3>
                        <ul className="list-disc list-inside mb-4">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>- {ingredient}</li>
                            ))}
                        </ul>
                        <h3 className="text-xl font-semibold mb-2"><strong>Steps:</strong></h3>
                        <ol className="list-decimal list-inside mb-4">
                            {recipe.steps.map((step, index) => (
                                <li key={index}>{index+1}. {step}</li>
                            ))}
                        </ol>
                        <p><strong>Preparation Time:</strong> {recipe.preparation_time_in_minutes} minutes</p>
                        <p><strong>Evaluation:</strong> {recipe.evaluation} / 5</p>
                        <p><strong>Categories:</strong> {recipe.categories.join(', ')}</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                            >
                                Edit Recipe
                            </button>
                            <button
                                className="bg-red-500  text-white p-2 rounded-md hover:bg-red-600 ml-2"
                                style={{ background: 'red', }}
                                onClick={() => handleDeleteRecipe(recipe.id)}
                            >
                                Delete Recipe
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RecipeModal;
