import { useState } from 'react';

export function useCreateTable( setShowCreateForm ) {
    const [form, setForm] = useState({
        number: '',
        capacity: 4,
        status: 'FREE',
        is_active: true,
    });

    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as any;
        const val = type === 'number' ? Number(value) : value;
        setForm(prev => ({ ...prev, [name]: val }));
    };

    const handleToggle = (checked: boolean) => setForm(prev => ({ ...prev, is_active: checked }));

    const token = localStorage.getItem('access');

    const handleSubmit = async (e?: React.FormEvent) => {
        setSuccess(false)
        e?.preventDefault();
        const payload = {
            number: form.number,
            capacity: Number(form.capacity),
            status: form.status,
            is_active: Boolean(form.is_active),
        };
        const res = await fetch('http://127.0.0.1:8000/api/restaurant/tables/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}` },
            body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Error creating table');
        setSuccess(true);
        setShowCreateForm(false);
        return await res.json();
    };

    return { form, setForm, handleChange, handleToggle, handleSubmit };
}