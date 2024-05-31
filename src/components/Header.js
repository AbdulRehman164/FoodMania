import { IMG_LOGO } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import useIsOnline from '../utils/useIsOnline';

const Header = () => {
    const navigate = useNavigate();
    const isOnline = useIsOnline();
    return (
        <header>
            <nav>
                <div className="logo-container">
                    <a href="/">
                        <img
                            className="logo"
                            src={IMG_LOGO}
                            height="100px"
                            width="100px"
                        />
                    </a>
                </div>
                <div className="nav-items-container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="">Cart</Link>
                        </li>
                        <li>
                            <Link to="/instamart">Instamart</Link>
                        </li>
                    </ul>
                </div>
                <div>{isOnline ? 'Online' : 'Offline'}</div>
                <button
                    onClick={() => {
                        navigate('/login');
                    }}
                    id="login-btn"
                >
                    login
                </button>
            </nav>
        </header>
    );
};

export default Header;
