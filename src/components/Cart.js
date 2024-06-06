import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const totalPrice = Math.ceil(
        items.reduce((prev, curr) => {
            curr =
                prev +
                (curr.price ? curr.price / 100 : curr.defaultPrice / 100) *
                    curr.quantity;
            return curr;
        }, 0)
    );

    return (
        <div className="flex flex-col px-28 py-4 gap-5">
            <h1 className="text-3xl font-bold">Cart</h1>
            {items.length > 0 ? (
                <>
                    <table className="w-full">
                        {items.map((item) => {
                            return <CartItem key={item.id} {...item} />;
                        })}
                        {items.length > 1 ? (
                            <tr className="shadow-md">
                                <td className="p-2 font-semibold">Total</td>
                                <td className="p-2 font-bold">
                                    Rs. {totalPrice}
                                </td>
                            </tr>
                        ) : null}
                    </table>
                    <div className="flex gap-6 justify-end">
                        <button
                            onClick={() => {
                                dispatch(clearCart());
                            }}
                            className="w-48 bg-red-500 font-bold text-white py-1 px-2 rounded-md opacity-90 hover:opacity-100 active:scale-[1.01]"
                        >
                            Clear Cart
                        </button>
                        <button className="w-48 bg-green-500 font-bold text-white py-1 px-2 rounded-md opacity-90 hover:opacity-100 active:scale-[1.01]">
                            Proceed to Payment
                        </button>
                    </div>
                </>
            ) : (
                <h3 className="text-center text-gray-400 ">
                    OMG!!!! Such an Empty Cart ...
                </h3>
            )}
        </div>
    );
};

export default Cart;
