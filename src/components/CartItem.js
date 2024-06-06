import { useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const { id, name, price, defaultPrice } = props;
    const cartItems = useSelector((store) => store.cart.items);
    const noOfitems = cartItems.filter((item) => item.id === id)?.[0]?.quantity;
    const dispatch = useDispatch();

    function handleAdd(item) {
        dispatch(addItem(item));
    }
    function handleRemove(item) {
        dispatch(removeItem(item));
    }

    return (
        <tr className="shadow-md">
            <td className="p-2">
                <h3 className="font-semibold">{name}</h3>
            </td>
            <td className="p-2">
                <p className="font-bold">
                    Rs.{' '}
                    {Math.ceil(
                        price
                            ? (price / 100) * noOfitems
                            : (defaultPrice / 100) * noOfitems
                    )}
                </p>
            </td>
            <td className="p-2">
                <div className="bg-white text-green-500  text-sm font-bold  rounded-sm hover:scale-[0.99] h-7 w-20 flex justify-between px-2 items-center cursor-auto">
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
            </td>
        </tr>
    );
};

export default CartItem;
