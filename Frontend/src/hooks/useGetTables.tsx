import { useEffect, useState } from "react";

export function useGetTables() {
    const [tables, setTables] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const getTables = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await fetch('http://127.0.0.1:8000/api/restaurant/tables/', {
                method: 'GET',
                headers: { 'Content-Type' : 'application/json' }
            });
            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.detail || errData.message || `HTTP ${response.status}`);
            }
            const data = await response.json();
            setTables(data);
            setSuccess(true);
            return data;
        } catch (err:any) {
            setError(err?.message)
            return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        void getTables();
    }, []);

    return {getTables, tables, loading, error, success};
}