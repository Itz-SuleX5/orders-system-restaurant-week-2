import { LogOut, Utensils } from 'lucide-react';
import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
    const { login, loading, success, error } = useLogin();
    const [form, setForm] = useState({
            email : '',
            password: ''
        })
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        await login(form)
    }

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className='flex min-h-screen flex-col py-6 px-6'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <Utensils className='text-cyan-700'/>
                    <h1 className='font-bold'>RestoManage</h1>
                </div>
                <button className='border border-slate-300 text-sky-800 px-4 py-2 rounded-md font-medium'>Soporte Técnico</button> 
            </div>
            <div className='flex flex-col flex-1 justify-center items-center w-6/12 mx-auto gap-4'>
                <div className='bg-stone-200 p-4 rounded-xl'>
                    <Utensils className='text-cyan-700'/>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Bienvenido de nuevo</h1>
                    <h2 className='text-slate-600'>Iniciar sesión para gestionar restaurante</h2>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col self-center gap-4 w-8/12'>
                    <div> 
                        <h1 className='text-start font-medium'>Correo electrónico</h1>
                        <input name='email' type="email" className='border border-gray-300 py-2 indent-2 w-full rounded-sm' placeholder='ejemplo@email.com' onChange={handleChange}/>
                    </div>
                    <div> 
                        <h1 className='text-start font-medium'>Contraseña</h1>
                        <input name='password' type="password" className='border border-gray-300 py-2 indent-2 w-full rounded-sm' placeholder='••••••••' onChange={handleChange}/>
                    </div>
                    <button type="submit" className='flex justify-center gap-2 bg-cyan-700 text-white py-2 rounded-md cursor-pointer'>Iniciar Sesión <LogOut /></button>
                    <a href="#" className='text-cyan-700'>¿Olvidaste tu contraseña?</a>
                    <h1 className='text-gray-500'>¿No tienes una cuenta? <a href="/signUp" className='text-cyan-700'>Registrate</a></h1>
                </form>
            </div>
        </div>
    );
};

export default Login;
