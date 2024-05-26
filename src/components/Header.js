import { IMG_LOGO } from '../constants';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
