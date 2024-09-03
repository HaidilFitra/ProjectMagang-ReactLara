import { useEffect } from "react"

export const useLogout = () => {
  useEffect(() => {
    localStorage.removeItem("Authorization");
  }, []);
}