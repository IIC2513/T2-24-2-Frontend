import axios from 'axios';

const API_URL = 'https://t2-24-2-backend.onrender.com';

interface Recipe {
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
  preparation_time_in_minutes: number;
  evaluation: number;
  categories: string[];
}

const updateRecipe = async (id: number, recipe: Recipe) => {
  try {
    const response = await axios.patch(`${API_URL}/recipes/${id}`, recipe, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer panconqueso`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating recipe: ', error);
    return { error: error };
  }
};

export { updateRecipe };
