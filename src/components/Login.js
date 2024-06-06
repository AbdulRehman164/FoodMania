import { Formik, Field, Form } from 'formik';
import { useState, useContext } from 'react';
import useLocalStorage from '../utils/useLocalStorage';
import usernameIcon from '../assets/img/username-icon.svg';
import passwordIcon from '../assets/img/password-icon.svg';
import LoginContext from '../utils/LoginContext';
import { useNavigate } from 'react-router-dom';

const Login = ({ isLoginVisible }) => {
    const [showError, setShowError] = useState(false);
    const loginData = useContext(LoginContext);
    const navigate = useNavigate();

    if (!isLoginVisible) {
        return;
    }
    document.body.classList.add('overflow-hidden');
    return loginData.loginState ? (
        <div>
            <h1>You are logged in</h1>
            <button
                onClick={() => {
                    loginData.setUser({ ...loginData, loginState: false });
                }}
            >
                logout
            </button>
        </div>
    ) : (
        <div>
            {isLoginVisible ? (
                <div className="absolute inset-0 h-screen w-screen bg-black opacity-50"></div>
            ) : null}
            <div className=" shadow-lg shadow-gray-600 rounded-l h-3/4 w-96 z-10 absolute inset-x-1/3 bg-white pb-5 px-10 pt-10">
                <button
                    onClick={() => {
                        document.body.classList.remove('overflow-hidden');
                        navigate('/');
                    }}
                    className="text-orange-400 h-10 w-10 rounded outline-none font-bold text-xl absolute right-3 top-1 hover:bg-orange-400 hover:text-white transition-all duration-300"
                >
                    x
                </button>
                <Formik
                    initialValues={{ userName: '', password: '' }}
                    onSubmit={(values) => {
                        if (
                            values.userName === 'rehman' &&
                            values.password === 'rehman'
                        ) {
                            loginData.setUser({
                                ...loginData,
                                userLoginData: { name: values.userName },
                                loginState: true,
                            });
                            document.body.classList.remove('overflow-hidden');
                            navigate('/');
                        } else {
                            setShowError(true);
                        }
                    }}
                >
                    <Form className="flex flex-col h-full w-full">
                        <h1 className="text-3xl font-bold text-center text-orange-400">
                            Login
                        </h1>
                        <div className="flex flex-col gap-5 my-auto">
                            <div className="flex flex-col">
                                <label htmlFor="userName">Username</label>
                                <Field
                                    className="border-b border-gray-400 outline-none py-2 px-7 focus:border-orange-400"
                                    type="text"
                                    name="userName"
                                    placeholder="Type your username"
                                    required
                                />
                                <img
                                    className="h-5 w-5 relative top-[-2rem]"
                                    src={usernameIcon}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password">Password</label>
                                <Field
                                    className="border-b border-gray-400 outline-none py-2 px-7 focus:border-orange-400"
                                    type="password"
                                    name="password"
                                    placeholder="Type your password"
                                    required
                                />
                                <img
                                    className="h-5 w-5 relative top-[-2rem]"
                                    src={passwordIcon}
                                    alt=""
                                />
                            </div>
                            {showError ? (
                                <div className="text-red-500">
                                    Username or Password is incorrect
                                </div>
                            ) : null}
                            <button
                                className="bg-orange-400 font-bold text-white px-4 py-2 mt-7 rounded-full"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;
