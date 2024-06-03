import { CLOUDINARY_IMG } from '../constants';
import { Link } from 'react-router-dom';

const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    id,
}) => {
    return (
        <div className="w-52 rounded-md hover:scale-95 transition-all">
            <Link to={'/restaurant/' + id}>
                <img
                    className="h-52 w-52 rounded-md"
                    src={CLOUDINARY_IMG + cloudinaryImageId}
                    alt={name + 'image'}
                />
                <div className="p-2">
                    <h1 className="font-bold">{name}</h1>
                    <h2 className="font-bold">{avgRating} ⭐</h2>
                    <h3 className="opacity-70">{cuisines.join(', ')}</h3>
                </div>
            </Link>
        </div>
    );
};

export default RestaurantCard;
