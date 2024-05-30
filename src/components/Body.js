import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';
import useRestaurant from '../utils/useRestaurant';

const Body = () => {
    const [inputText, setInputText] = useState('');
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
        useRestaurant();

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
                        const filteredData = filterData(
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
