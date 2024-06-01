const useLocalStorage = () => {
    const getValue = (key) => {
        return localStorage.getItem(key);
    };

    const setValue = (key, value) => {
        localStorage.setItem(key, value);
    };

    return [getValue, setValue];
};

export default useLocalStorage;
