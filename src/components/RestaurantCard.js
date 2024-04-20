import { CLOUDINARY_IMG } from '../constants';

const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
}) => {
    return (
        <div className="card">
            <img
                src={CLOUDINARY_IMG + cloudinaryImageId}
                alt={name + 'image'}
            />
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{deliveryTime} min</h4>
        </div>
    );
};

export default RestaurantCard;
