import React from 'react';
import SectionsList from '../organisms/sectionsList';
import { CheckCheck, Plus, ShoppingCart, Users, Utensils } from 'lucide-react';
import { useGetTables } from '../../hooks/useGetTables';

const TablesPage = () => {
    const { tables, success, loading, error } = useGetTables();
    console.log(tables)
    return (
        <div className='p-4 w-full flex gap-4'>
            <SectionsList/>
            <div className='w-full flex flex-col gap-8'>
                <div className='flex w-full'>
                    <div className='text-left'>
                        <h1 className='text-2xl font-bold'>Gestión de Mesas</h1>
                        <h2 className='text-slate-600'>Supervisa y Gestiona la disponibilidad de las mesas en tiempo real.</h2>
                    </div>
                    <button className='text-white bg-cyan-700 flex items-center px-5 h-12 rounded-xl ms-auto gap-2 text-sm'> <div className='flex bg-white text-cyan-700 rounded-full w-5 h-5 items-center justify-center'><Plus size={16}/></div> Añadir Mesa</button>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='flex items-center border-2 justify-between p-4'>
                        <div className='flex flex-col text-start'>
                            <h1 className='text-slate-400'>Total Mesas</h1>
                            <h2 className='text-4xl font-medium'>24</h2>
                        </div>
                        <Utensils className='text-blue-600'/>
                    </div>
                    <div className='flex items-center border-2 justify-between p-4'>
                        <div className='flex flex-col text-start'>
                            <h1 className='text-slate-400'>Ocupación</h1>
                            <h2 className='text-4xl font-medium'>65%</h2>
                        </div>
                        <Users className="text-orange-600" />
                    </div>
                    <div className='flex items-center border-2 justify-between p-4'>
                        <div className='flex flex-col text-start'>
                            <h1 className='text-slate-400'>Disponibles</h1>
                            <h2 className='text-4xl font-medium'>8</h2>
                        </div>
                        <CheckCheck className='text-green-500' />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {tables.map((table: any) => (
                        <div className='relative border-2 flex flex-col p-4 items-start gap-4'>
                        <div className='absolute right-2'><li>{table.status}</li></div>
                        <h1 className='text-3xl font-medium'>{table.number}</h1>
                        <h1 className='text-slate-600'>Capacidad: 4 personas</h1>
                        <button className='bg-cyan-700 text-white flex w-full justify-center py-2 mt-8 rounded-md'><ShoppingCart />Crear pedido</button>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default TablesPage;
