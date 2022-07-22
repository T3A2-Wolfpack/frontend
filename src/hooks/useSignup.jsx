import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const api = import.meta.env.VITE_API_SERVER_URL;

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${api}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });
    console.log(response.body)
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
     }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      console.log(json);
      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
