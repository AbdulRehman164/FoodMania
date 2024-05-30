import { useState, useEffect } from 'react';
import { MENU_FETCH_URL } from '../constants';

const useMenu = (id) => {
    const [restaurant, setRestaurant] = useState(null);

    async function getRestaurantMenu() {
        const response = await fetch(MENU_FETCH_URL + id);
        const result = await response.json();
        setRestaurant(result?.data?.cards);
    }

    useEffect(() => {
        getRestaurantMenu();
    }, []);

    return restaurant;
};

export default useMenu;
