import axios from 'axios';

const API_URL = 'http://localhost:3001';

const getRecipes = async () => {
    try {
        const response = await axios.get(`${API_URL}/recipe`);
    return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return { error: error}
    }
    };

export { getRecipes };
