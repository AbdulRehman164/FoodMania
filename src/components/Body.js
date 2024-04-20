import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

function handleSearch(inputText, resList) {
    const filteredData = resList.filter((res) =>
        res?.info?.name?.toLowerCase()?.includes(inputText?.toLowerCase())
    );
    return filteredData;
}

const Body = () => {
    const [inputText, setInputText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch(
                'https://www.swiggy.com/api/seo/getListing?lat=19.2133035606211&lng=72.87611371920241',
                { mode: 'cors' }
            );
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
        getRestaurants();
    }, []);

    return (
        <main>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        const filteredData = handleSearch(
                            inputText,
                            allRestaurants
                        );
                        setFilteredRestaurants(filteredData);
                    }}
                >
                    Search
                </button>
            </div>
            {filteredRestaurants.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="restaurant-list">
                    {filteredRestaurants.map((res) => {
                        return (
                            <RestaurantCard {...res.info} key={res.info.id} />
                        );
                    })}
                </div>
            )}
        </main>
    );
};

export default Body;
