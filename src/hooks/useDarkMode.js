import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

    useEffect(() => {
        const $body = document.querySelector("body");
        if (darkMode) {
            $body.classList.add("dark-mode");
        } else {
            $body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};
