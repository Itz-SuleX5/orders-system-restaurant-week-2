import { ChartLine, ClipboardList, House, ReceiptText, User, Users, Utensils } from 'lucide-react';
import React from 'react';

const SectionsList = () => {
    const name = `${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}`;
    const role = localStorage.getItem('role');
    return (
        <div className='w-3/12 sticky top-0 max-h-screen p-4 flex flex-col gap-18 bg-white border-r border-slate-300'>
            <div className='flex items-center gap-4 ms-2'>
                <div className='bg-cyan-700 text-white rounded-md h-10 w-10 flex items-center justify-center'>
                    <Utensils />
                </div>
                <div className='flex flex-col text-start'>
                    <h1 className='font-bold'>RestoManage</h1>
                    <h2 className='text-sm text-cyan-700'>ADMIN PANEL</h2>
                </div>
            </div>
            <div className='flex flex-col gap-4 font-medium'>
                <div className='flex gap-2 text-white bg-cyan-700 p-3 rounded-md'>
                    <House />
                    <span>Inicio</span>
                </div>
                <div className='flex gap-2 text-slate-600 p-3'>
                    <ChartLine />
                    <span>Dashboard</span>
                </div>
                <div className='flex gap-2 text-slate-600 p-3'>
                    <Utensils />
                    <span>Mesas</span>
                </div>
                <div className='flex gap-2 text-slate-600 p-3'>
                    <ReceiptText />
                    <span>Pedidos</span>
                </div>
                <div className='flex gap-2 text-slate-600 p-3'>
                    <ClipboardList />
                    <span>Menú</span>
                </div>
                <div className='flex gap-2 text-slate-600 p-3'>
                    <Users />
                    <span>Usuarios</span>
                </div>
                
            </div>
            <div className='flex mt-auto items-center gap-4'>
                <User className='text-slate-500'/>
                <div className='flex flex-col text-start'>
                    <h1 className='font-medium'>{name}</h1>
                    <h2 className='text-slate-500'>{role}</h2>
                </div>
            </div>
        </div>
    );
};

export default SectionsList;
