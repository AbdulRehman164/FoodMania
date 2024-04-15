import RestaurantCard from './RestaurantCard';
import { resList } from '../constants';

const Body = () => {
    return (
        <main>
            {resList.map((res) => {
                return <RestaurantCard {...res.data} key={res.data.id} />;
            })}
        </main>
    );
};

export default Body;
