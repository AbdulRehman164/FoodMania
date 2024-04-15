import { IMG_PLACEHOLDER } from '../constants';

const RestaurantCard = ({ name, cuisines, avgRating, deliveryTime }) => {
    return (
        <div className="card">
            <img src={IMG_PLACEHOLDER} alt={name + 'image'} />
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{deliveryTime} min</h4>
        </div>
    );
};

export default RestaurantCard;
