import React from 'react';
import ReactDOM from 'react-dom/client';
import resList from './data';

/*

- Body
    - Restaurant List
        - Restaurant cards
            - image
            - name
            - rating
            - tags
            
 */

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-container">
                    <a href="/">
                        <img
                            className="logo"
                            src="https://dhgf5mcbrms62.cloudfront.net/33296561/header-HnrssT/YMDsfIA-600x600.webp"
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

const RestaurantCard = ({ name, cuisines, avgRating, deliveryTime }) => {
    return (
        <div className="card">
            <img
                src={
                    'https://repstack.co/wp-content/uploads/2021/08/placeholder.png'
                }
                alt={name + 'image'}
            />
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{deliveryTime} min</h4>
        </div>
    );
};

const Body = () => {
    return (
        <main>
            {resList.map((res) => {
                return <RestaurantCard {...res.data} key={res.data.id} />;
            })}
        </main>
    );
};

const Footer = () => {
    return <h2>footer</h2>;
};

const App = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
