import { useState } from "react";

export function useSignUp() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const signUp = async (data: {first_name: string, last_name: string, email: string, password: string}) => {
        setLoading(true)
        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/register/' , {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(data),
            });
            if (!response.ok){
                const errorData = await response.json();
                throw new Error (errorData.message)
            }
            setSuccess(true);
        } catch (err:any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    return { signUp, loading, error, success };
}