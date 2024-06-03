import { createContext } from 'react';

const LoginContext = createContext({ loginState: false, userLoginData: {} });

export default LoginContext;
