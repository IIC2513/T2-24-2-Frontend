import axios from 'axios'

const API_URL = 'http://localhost:3001';

interface Recipe {
    title: string;
    description: string;
    ingredients: string[];
    tags: string[];
}

const createRecipe = async (recipe: Recipe) => {
    try {
        const response = await axios.post(`${API_URL}/recipe`, recipe);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return { error: error}
    }
};

export { createRecipe };