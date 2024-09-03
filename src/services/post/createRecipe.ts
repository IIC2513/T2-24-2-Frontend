import axios from 'axios'

const API_URL = 'https://t2-24-2-backend.onrender.com';

interface Recipe {
    title: string;
    description: string;
    ingredients: string[];
    tags: string[];
    preparation_time_in_minutes: number;
    steps: string[];
    evaluation: number;
    categories: string[];
    image: string;
  }

const createRecipe = async (recipe: Recipe) => {
    try {
        const response = await axios.post(`${API_URL}/recipes/`, recipe
            , { headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer panconqueso`
            } }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return { error: error}
    }
};

export { createRecipe };