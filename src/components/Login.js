import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showError, setShowError] = useState(false);
    return isLoggedIn ? (
        <div>
            <h1>You are logged in</h1>
        </div>
    ) : (
        <div>
            <Formik
                initialValues={{ userName: '', password: '' }}
                onSubmit={(values) => {
                    if (
                        values.userName === 'rehman' &&
                        values.password === 'rehman'
                    ) {
                        setIsLoggedIn(true);
                    } else {
                        setShowError(true);
                    }
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <Field type="text" name="userName" />
                    </div>
                    <div>
                        <label htmlFor="password">Password : </label>
                        <Field type="password" name="password" />
                    </div>
                    {showError ? (
                        <div>Username or Password is incorrect</div>
                    ) : null}
                    <button type="submit">Sign in</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
