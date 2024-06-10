import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LoginContext from './utils/LoginContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

const Instamart = lazy(() => import('./components/Instamart'));

const App = () => {
    const [user, setUser] = useState({ loginState: false, userLoginData: {} });
    return (
        <Provider store={store}>
            <LoginContext.Provider
                value={{
                    ...user,
                    setUser,
                }}
            >
                <div className="min-h-[100vh] flex flex-col">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </LoginContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body isLoginVisible={false} />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />,
            },
            {
                path: '/login',
                element: <Body isLoginVisible={true} />,
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
