import RestaurantCard from './RestaurantCard';
import { resList } from '../constants';
import { useState } from 'react';

function handleSearch(inputText) {
    const filteredData = resList.filter((res) =>
        res.data.name.toLowerCase().includes(inputText.toLowerCase())
    );
    return filteredData;
}

const Body = () => {
    const [inputText, setInputText] = useState('');
    const [restaurants, setRestaurants] = useState(resList);
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
                        const filteredData = handleSearch(inputText);
                        setRestaurants(filteredData);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((res) => {
                    return <RestaurantCard {...res.data} key={res.data.id} />;
                })}
            </div>
        </main>
    );
};

export default Body;
