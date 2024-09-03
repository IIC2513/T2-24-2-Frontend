import axios from 'axios';

const API_URL = 'https://t2-24-2-backend.onrender.com';

const getRecipes = async (page: number) => {
    try {
        const response = await axios.get(`${API_URL}/recipes?page_size=${100}`, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer panconqueso`
            } });
    return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return { error: error}
    }
    };

export { getRecipes };
