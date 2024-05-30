import { useParams } from 'react-router-dom';
import { CLOUDINARY_IMG } from '../constants';
import useMenu from '../utils/useMenu';

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useMenu(id);

    const info = restaurant?.[2]?.card?.card?.info;
    const menus = restaurant?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return (
        <div id="restaurantMenu">
            <div className="restaurantMenu-info">
                <h1>{info?.name}</h1>
                <img
                    src={CLOUDINARY_IMG + info?.cloudinaryImageId}
                    alt=""
                    height="250px"
                    width="250px"
                />
                <h2>
                    {info?.city}, {info?.areaName}
                </h2>
                <h2>{info?.avgRating} stars</h2>
                <h2>{info?.costForTwoMessage}</h2>
            </div>
            <div className="restaurantMenu-menu">
                {menus
                    ?.map((menu) => {
                        return menu?.card?.card?.title ? (
                            <li key={menu?.card?.card?.title}>
                                {menu?.card?.card?.title}
                            </li>
                        ) : null;
                    })
                    .slice(2)}
            </div>
        </div>
    );
};

export default RestaurantMenu;
