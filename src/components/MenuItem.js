import { CLOUDINARY_IMG } from '../constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { useSelector } from 'react-redux';

const MenuItem = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const { name, price, imageId, defaultPrice, id } = props;
    const noOfitems = cartItems.filter((item) => item.id === id)?.[0]?.quantity;

    function handleAdd(item) {
        dispatch(addItem(item));
    }
    function handleRemove(item) {
        dispatch(removeItem(item));
    }
    return (
        <div className="flex justify-between h-28 border border-gray-400 p-4 rounded-lg shadow-lg gap-x-16">
            <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p>Rs. {!price ? defaultPrice / 100 : price / 100}</p>
            </div>
            <div className="relative">
                <img
                    className="h-20 w-20 rounded-md  cursor-pointer"
                    src={CLOUDINARY_IMG + imageId}
                    alt={name + ' img'}
                />
                {Boolean(noOfitems) === false ? (
                    <button
                        className="absolute bg-white text-green-500 border border-gray-400 text-sm font-bold  rounded-sm hover:scale-[0.99] active:scale-100 h-7 w-20"
                        onClick={() => {
                            handleAdd(props);
                        }}
                    >
                        Add
                    </button>
                ) : (
                    <div className="absolute bg-white text-green-500 border border-gray-400 text-sm font-bold  rounded-sm hover:scale-[0.99] h-7 w-20 flex justify-between px-2 items-center cursor-auto">
                        <button
                            className="text-red-400 hover:scale-125 outline-none text-xl active:scale-100"
                            onClick={() => handleRemove(props)}
                        >
                            -
                        </button>
                        <span>{noOfitems}</span>
                        <button
                            className="text-xl hover:scale-125 active:scale-100"
                            onClick={() => handleAdd(props)}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuItem;
