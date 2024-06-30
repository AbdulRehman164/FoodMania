import { useParams } from 'react-router-dom';
import { CLOUDINARY_IMG } from '../constants';
import useMenu from '../utils/useMenu';
import { useState } from 'react';
import MenuItem from './MenuItem';
import { MenuShimmer as Shimmer } from './Shimmer';

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useMenu(id);
    const [category, setCategory] = useState('');

    const info = restaurant?.[2]?.card?.card?.info;
    const categoryCards =
        restaurant?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if (restaurant && category === '') {
        setCategory(categoryCards?.[1]?.card?.card?.title);
    }
    return !info ? (
        <Shimmer />
    ) : (
        <div className="mx-28 my-8 flex flex-col gap-8 min-h-[100vh]">
            <h1 className="text-3xl font-bold">{info?.name}</h1>
            <div className="flex gap-10">
                <div className="restaurantMenu-info">
                    <img
                        className="w-96 h-96 rounded-lg"
                        src={CLOUDINARY_IMG + info?.cloudinaryImageId}
                        alt=""
                        height="250px"
                        width="250px"
                    />
                    <h2 className="font-bold">
                        {info?.city}, {info?.areaName}
                    </h2>
                    <h2 className="font-bold">{info?.avgRating} ⭐</h2>
                    <h2 className="font-bold">{info?.costForTwoMessage}</h2>
                </div>
                <div className="restaurantMenu-menu">
                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    >
                        {categoryCards
                            ?.map((categoryCard, index) => {
                                return categoryCard?.card?.card?.title ? (
                                    <option
                                        className="cursor-pointer"
                                        key={
                                            categoryCard?.card?.card?.title +
                                            index
                                        }
                                        value={categoryCard?.card?.card?.title}
                                    >
                                        {categoryCard?.card?.card?.title}
                                    </option>
                                ) : null;
                            })
                            .slice(1)}
                    </select>
                    <div>
                        <h1 className="text-3xl font-bold">{category}</h1>
                        <div className="flex flex-col gap-5">
                            {categoryCards
                                ?.filter(
                                    (categoryCard) =>
                                        categoryCard?.card?.card?.title ===
                                        category
                                )[0]
                                ?.card?.card?.itemCards?.map((itemCard) => {
                                    const item = itemCard?.card?.info;
                                    return <MenuItem key={item.id} {...item} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
