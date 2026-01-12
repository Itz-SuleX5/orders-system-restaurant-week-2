import { useState } from "react";
import { useGetAccessToken } from "./useGetAccessToken";

export function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const { getAccessToken, loading: loadingToken, error: errorToken, success: succesToken } = useGetAccessToken();

    const login = async (data: {email: string, password: string}) => {
        setLoading(true)
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/login/' , {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(data),
            });
            if(!response.ok){
                const errorData = await response.json();
                throw new Error (errorData.message)
            }
            const responseData = await response.json();
            localStorage.setItem('refresh', responseData.refresh);
            await getAccessToken();
            localStorage.setItem('first_name', responseData.first_name);
            const testLog = localStorage.getItem('first_name');
            console.log(testLog);
            localStorage.setItem('last_name', responseData.last_name);
            localStorage.setItem('role', responseData.role);
            setSuccess(true);
        } catch (err:any){
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return { login, loading, success, error }
}