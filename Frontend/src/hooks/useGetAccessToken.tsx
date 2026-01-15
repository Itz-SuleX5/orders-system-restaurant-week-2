import { useEffect, useState } from "react";

export function useGetAccessToken() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false)

    const getAccessToken = async () => {
        setLoading(true)
        const refreshToken = localStorage.getItem('refresh');
        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/token/refresh/' , {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({'refresh': refreshToken})
            });
            if (!response.ok){
                const errorData = await response.json();
                throw new Error (errorData.message);
            }
            const responseData = await response.json();
            localStorage.setItem('access', responseData.access)
            setSuccess(true);
        } catch (err:any){
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const id = setInterval(() => {
            if (localStorage.getItem('refresh')) {
                void getAccessToken();
            }
        }, 1 * 6 * 1000);
        return () => clearInterval(id);
    }, [])

    return { getAccessToken, loading, error, success }
}