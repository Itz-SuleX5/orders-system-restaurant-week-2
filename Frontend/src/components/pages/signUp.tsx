import { LogOut, UserPen, Utensils } from 'lucide-react';
import React, { useState } from 'react';
import { useSignUp } from '../../hooks/useSignUp';

const SignUp = () => {
    const {signUp, loading, error, success} = useSignUp();
    const [form, setForm] = useState ({
        first_name: '',
        last_name: '',
        role: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        if (form.password !== form.confirm_password) {alert('Las contraseñas no coinciden'); return; }
        const { confirm_password, ...payload } = form;
        await signUp(payload);
    }

    const handleChange = (e:any) => {
        const {name, value}  = e.target;
        if (name === 'full_name') {
            const parts = value.trim().split(/\s+/);
            setForm({
                ...form, first_name: parts[0] || '', last_name: parts.slice(1).join(' ') || ''
            });
        } else {
            setForm({...form, [name]: value});
        }
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
                    <h1 className='font-bold text-2xl'>Crear cuenta</h1>
                    <h2 className='text-slate-600'>Registra un nuevo miembro del personal</h2>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col self-center gap-4 w-8/12'>
                    <div> 
                        <h1 className='text-start font-medium'>Nombre completo</h1>
                        <input name="full_name" value={`${form.first_name} ${form.last_name}`.trim()} type="text" className='border border-gray-300 py-2 indent-2 w-full rounded-sm' placeholder='Juan Pérez' onChange={handleChange}/>
                    </div>
                    <div> 
                        <h1 className='text-start font-medium'>Correo electrónico</h1>
                        <input name="email" value={form.email} type="email" className='border border-gray-300 py-2 indent-2 w-full rounded-sm' placeholder='ejemplo@email.com' onChange={handleChange}/>
                    </div>
                    <div> 
                        <h1 className='text-start font-medium'>Correo electrónico</h1>
                        <select name='role' value={form.role} className='border border-gray-300 py-2 px-2 w-full rounded-sm bg-white' onChange={handleChange}>
+                            <option value="">Selecciona un rol</option>
                            <option value="admin">Mesero</option>
+                            <option value="waiter">Mesero</option>
+                            <option value="chef">Cocinero</option>
+                        </select>
                    </div>
                    <div> 
                        <h1 className='text-start font-medium'>Contraseña</h1>
                        <input name="password" value={form.password} type="password" className='border border-gray-300 py-2 indent-2 w-full rounded-sm' placeholder='••••••••' onChange={handleChange}/>
                    </div>
                    <div> 
                        <h1 className='text-start font-medium'>Confirmar contraseña</h1>
                        <input name='confirm_password' type="password" value={form.confirm_password} className='border border-gray-300 py-2 indent-2 w-full rounded-sm' placeholder='••••••••' onChange={handleChange}/>
                    </div>
                    <button type='submit' className='flex justify-center gap-2 bg-cyan-700 text-white py-2 rounded-md cursor-pointer'>Registrarse <UserPen /></button>
                    <h1 className='text-gray-500'>¿Ya tienes una cuenta? <a href="/login" className='text-cyan-700'>Iniciar sesión</a></h1>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
