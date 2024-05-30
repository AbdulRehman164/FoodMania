import { useState, useEffect } from 'react';
import { SWIGGY_API_URL } from '../constants';

const useRestaurant = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    async function getRestaurants() {
        const response = await fetch(SWIGGY_API_URL);
        const result = await response.json();
        setFilteredRestaurants(
            result?.data?.success?.cards[1]?.card?.card?.gridElements
                ?.infoWithStyle?.restaurants
        );
        setAllRestaurants(
            result?.data?.success?.cards[1]?.card?.card?.gridElements
                ?.infoWithStyle?.restaurants
        );
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurant;
