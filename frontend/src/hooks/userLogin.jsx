import { useEffect } from "react"

export const  useLogin = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");
    }, []);

}