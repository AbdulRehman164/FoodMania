import { IMG_LOGO } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import useIsOnline from '../utils/useIsOnline';
import LoginContext from '../utils/LoginContext';
import { useContext } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const isOnline = useIsOnline();
    const loginData = useContext(LoginContext);

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
                        <li className="hover:text-orange-400">
                            <Link to="">Cart</Link>
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
