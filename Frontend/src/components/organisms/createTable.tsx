import { Power, Save, Users, X } from 'lucide-react';
import React from 'react';

const CreateTable = () => {
    return (
        <div className='bg-white flex flex-col p-6 items-start gap-4 rounded-md w-6/12'>
            <h1 className='text-xl font-medium'>Crear nueva mesa</h1>
            <h2 className='font-medium'>Numero de mesa</h2>
            <input type="text" placeholder='Ej: 05' className='bg-slate-50 w-full py-2 indent-3'/>
            <span className='text-slate-500 text-sm'>Este identificador sera visible para el personal y en los tickets.</span>
            <div className='flex gap-2 w-full'>
                <div className='flex flex-col items-start w-full'>
                    <h1>Capacidad (Personas)</h1>
                    <div className='relative'>
                        <Users className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500'/>
                        <input type="number" placeholder='4' className='bg-slate-50 indent-10 py-2 w-full'/>
                    </div>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <h1>Estado Inicial</h1>
                    <select className='bg-slate-50 py-2 pl-3 w-full rounded-md'>
                        <option value="libre">Libre</option>
                        <option value="ocupada">Ocupada</option>
                        <option value="reservada">Reservada</option>
                        <option value="limpieza">Limpieza</option>
                    </select>
                </div>
                
            </div>
            <div className='flex bg-slate-50 w-full p-2 gap-2 justify-between items-center'>
                <div className='flex'>
                    <div className='bg-white text-cyan-700 p-2 rounded-full w-10 h-10'>
                        <Power />
                    </div>
                    <div className='text-start'>
                        <h1 className='font-medium'>Mesa Activa</h1>
                        <span className='text-sm text-slate-400'>Deberia estar disponible para pedidos ahora?</span>
                    </div>
                </div>
                
                <div className='bg-cyan-700 w-16 h-8 rounded-full'>
                    <div className='bg-white w-8 h-8 rounded-full ms-auto'/>
                </div>
            </div>

            <div className='flex self-end gap-4'>
                <button className='flex border p-3 rounded-md'><X /> Cancelar</button>
                <button className='flex bg-cyan-700 text-white p-3 rounded-md'><Save /> Guardar Mesa</button>
            </div>
        </div>
    );
};

export default CreateTable;
