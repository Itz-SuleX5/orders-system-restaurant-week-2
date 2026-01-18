import { useEffect, useState } from "react";

export function useGetDishes() {
    const [dishes, setDishes] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getDishes = async () => {
        setLoading(false)
        setError(null)
        setSuccess(false)
        try {
            const response = await fetch('http://127.0.0.1:8000/api/restaurant/dishes/', {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'}
            });
            if (!response.ok){
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.detail || errData.message || `HTTP ${response.status}`)
            }
            const data = await response.json();
            setDishes(data);
           setSuccess(true);
            return data;
        } catch (err:any){
            setError(err?.message)
            return null;
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDishes()
    }, [])

    return { dishes, getDishes, success, error, loading }
}

