import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';
import useRestaurant from '../utils/useRestaurant';
import searchIcon from '../assets/img/search-icon.svg';
import Login from './Login';
import NetworkError from './NetworkError';

const Body = ({ isLoginVisible }) => {
    const [inputText, setInputText] = useState('');
    const [
        allRestaurants,
        filteredRestaurants,
        setFilteredRestaurants,
        isError,
    ] = useRestaurant();
    if (isError) {
        return <NetworkError />;
    }
    return (
        <main className="m-10 mx-28 flex flex-col gap-10 flex-1">
            <Login isLoginVisible={isLoginVisible} />
            <div>
                <input
                    className="border-b border-solid border-gray-300 rounded focus:border-orange-400 outline-none px-2 font-semibold"
                    type="text"
                    placeholder="Search..."
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                />
                <button
                    className="hover:opacity-50 active:opacity-100"
                    onClick={() => {
                        const filteredData = filterData(
                            inputText,
                            allRestaurants
                        );
                        setFilteredRestaurants(filteredData);
                    }}
                >
                    <img className="h-5 w-5" src={searchIcon} alt="" />
                </button>
            </div>
            {filteredRestaurants.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="flex flex-wrap gap-16 justify-center">
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
