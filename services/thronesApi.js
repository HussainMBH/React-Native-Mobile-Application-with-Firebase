// services/thronesApi.js

const API_URL = 'https://thronesapi.com/api/v2/Characters';

export const fetchCharacters = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching characters: ", error);
        throw error;
    }
};
