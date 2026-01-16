import React, { useEffect, useState } from 'react';
import SectionsList from '../organisms/sectionsList';
import { CheckCheck, Plus, ShoppingCart, Users, Utensils } from 'lucide-react';
import { useGetTables } from '../../hooks/useGetTables';
import { useGetTablesStats } from '../../hooks/useGetTablesStats';
import CreateTable from '../organisms/createTable';

const TablesPage = () => {
    const { tables, getTables, success, loading, error } = useGetTables();
    const { tablesStats, getTablesStats, success:successStats, loading:loadingStats, error:errorStats } = useGetTablesStats();
    const [showCreateForm, setShowCreateForm] = useState(false)

    useEffect(() => {
        getTables();
        getTablesStats();
    }, [showCreateForm])

    const STATUS_LABELS: Record<string,string> = { 
        FREE: 'Libre', 
        BUSY: 'Ocupada', 
        RSVD: 'Reservada', 
        CLN: 'Limpieza' 
    };

    const STATUS_STYLES: Record<string,string> = {
        FREE: 'text-green-700',
        BUSY: 'text-orange-700',
        RSVD: 'text-yellow-700',
        CLN:  'text-slate-700',
    };
    return (
        <div className='w-full flex bg-slate-100'>
            
            <SectionsList/>
            <div className='w-full flex flex-col gap-8'>
                <div className='flex w-full bg-white p-3 border-b border-slate-300'>
                    <div className='text-left'>
                        <h1 className='text-3xl font-bold'>Gestión de Mesas</h1>
                        <h2 className='text-slate-600 text-xl'>Supervisa y Gestiona la disponibilidad de las mesas en tiempo real.</h2>
                    </div>
                    <button onClick={() => setShowCreateForm(true)} className='text-white bg-cyan-700 flex items-center px-5 h-12 rounded-xl ms-auto gap-2 text-sm'> <div className='flex bg-white text-cyan-700 rounded-full w-5 h-5 items-center justify-center'><Plus size={16}/></div> Añadir Mesa</button>
                </div>
                <div className='grid grid-cols-3 gap-4 bg-neutral-100 p-3'>
                    <div className='flex items-center border-2 justify-between p-4 rounded-xl bg-white'>
                        <div className='flex flex-col text-start'>
                            <h1 className='text-slate-400'>Total Mesas</h1>
                            <h2 className='text-4xl font-medium'>{tablesStats.total}</h2>
                        </div>
                        <div className='bg-blue-50 p-3 rounded-md'>
                            <Utensils className='text-blue-600'/>
                        </div>
                    </div>
                    <div className='flex items-center border-2 justify-between p-4 rounded-xl bg-white'>
                        <div className='flex flex-col text-start'>
                            <h1 className='text-slate-400'>Ocupación</h1>
                            <h2 className='text-4xl font-medium'>{tablesStats.occupied_percent}%</h2>
                        </div>
                        <div className='bg-orange-50 p-3 rounded-md'>
                            <Users className="text-orange-600" />
                        </div>
                    </div>
                    <div className='flex items-center border-2 justify-between p-4 rounded-xl bg-white'>
                        <div className='flex flex-col text-start'>
                            <h1 className='text-slate-400'>Disponibles</h1>
                            <h2 className='text-4xl font-medium'>{tablesStats.available}</h2>
                        </div>
                        <div className='bg-green-50 p-3 rounded-md'>
                            <CheckCheck className='text-green-500' />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 p-3'>
                    {tables.map((table: any) => (
                        <div className='relative border-2 flex flex-col p-4 items-start gap-4 rounded-xl bg-white'>
                        <div className={`absolute right-2 ${STATUS_STYLES[table.status]} `}>{STATUS_LABELS[table.status]}</div>
                        <div className='bg-slate-50 p-3 rounded-md'>
                            <h1 className='text-3xl font-medium'>{table.number}</h1>
                        </div>
                        <h1 className='text-slate-600'>Capacidad: {table.capacity} personas</h1>
                        <button className='bg-cyan-700 text-white flex w-full justify-center py-2 mt-8 rounded-md'><ShoppingCart />Crear pedido</button>
                    </div>
                    ))}
                    
                </div>
            </div>

            {showCreateForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setShowCreateForm(false)}>
                    <CreateTable setShowCreateForm={setShowCreateForm}/>
                </div>
            )}
        </div>
    );
};

export default TablesPage;
