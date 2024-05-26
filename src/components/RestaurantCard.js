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
        <div className="card">
            <Link to={'/restaurant/' + id}>
                <img
                    src={CLOUDINARY_IMG + cloudinaryImageId}
                    alt={name + 'image'}
                />
                <h1>{name}</h1>
                <h2>{avgRating}</h2>
                <h3>{cuisines.join(', ')}</h3>
                <h4>{deliveryTime} min</h4>
            </Link>
        </div>
    );
};

export default RestaurantCard;
