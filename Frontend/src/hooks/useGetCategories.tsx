import { useEffect, useState } from "react";

export function useGetCategories() {
    const [categories, setCategories] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const getCategories = async () => {
        setLoading(true)
        setError(null)
        setSuccess(false)
        try {
            const response = await fetch('http://127.0.0.1:8000/api/restaurant/categories/', {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'}
            });
            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.detail || errData.message || `HTTP ${response.status}`)
            }
            const data = await response.json();
            setCategories(data);
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
        getCategories()
    }, [])

    return { getCategories, categories, error, success, loading }
}