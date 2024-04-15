import { IMG_LOGO } from '../constants';

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
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
