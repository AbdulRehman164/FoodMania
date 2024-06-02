import { useParams } from 'react-router-dom';
import { CLOUDINARY_IMG } from '../constants';
import useMenu from '../utils/useMenu';

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useMenu(id);

    const info = restaurant?.[2]?.card?.card?.info;
    const menus = restaurant?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return (
        <div className="mx-28 my-8 flex flex-col gap-8">
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
                    {menus
                        ?.map((menu) => {
                            return menu?.card?.card?.title ? (
                                <li
                                    className="list-none opacity-70 cursor-pointer hover:opacity-100 leading-9"
                                    key={menu?.card?.card?.title}
                                >
                                    {menu?.card?.card?.title}
                                </li>
                            ) : null;
                        })
                        .slice(2)}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
