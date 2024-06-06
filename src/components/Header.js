import { IMG_LOGO } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import useIsOnline from '../utils/useIsOnline';
import LoginContext from '../utils/LoginContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const isOnline = useIsOnline();
    const loginData = useContext(LoginContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="px-5 shadow-md">
            <nav className="flex justify-between items-center">
                <div className="h-14 w-14">
                    <a href="/">
                        <img
                            className="logo"
                            src={IMG_LOGO}
                            height="100px"
                            width="100px"
                        />
                    </a>
                </div>
                <div>
                    <ul className="flex gap-9 font-medium text-gray-700">
                        <li className="hover:text-orange-400">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-orange-400">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-orange-400">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="hover:text-orange-400 relative">
                            <Link to="/cart">Cart</Link>
                            {cartItems.length != 0 ? (
                                <span className="absolute text-[0.5rem] font-bold text-center rounded-full text-white flex bg-green-500 h-3 w-3 top-[-2] right-[-10] justify-center items-center">
                                    {cartItems.length}
                                </span>
                            ) : null}
                        </li>
                        <li className="hover:text-orange-400">
                            <Link to="/instamart">Instamart</Link>
                        </li>
                    </ul>
                </div>
                <div className="font-medium text-gray-700 flex gap-5 items-center">
                    <span className="text-xs text-center">
                        {isOnline ? '🟢' : '🔴'}
                    </span>

                    <button
                        className="hover:text-orange-400"
                        onClick={() => {
                            navigate('/login');
                        }}
                        id="login-btn"
                    >
                        {loginData.loginState
                            ? loginData.userLoginData.name
                            : 'Login'}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
