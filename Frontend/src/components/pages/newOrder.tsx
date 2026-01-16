import React from 'react';
import SectionsList from '../organisms/sectionsList';
import { ShoppingBag, Utensils } from 'lucide-react';

const NewOrder = () => {
    return (
        <div className='flex w-full'>
            <SectionsList/>
            <div className='flex w-full'>
                <div className='w-8/12 flex flex-col p-3 gap-4'>
                    <div className='flex w-full items-center'>
                        <h1>Nuevo pedido</h1>
                        <input type="text" placeholder='Buscar plato o bebida' className='bg-gray-200 ml-auto p-2'/>
                    </div>
                    <div className='flex justify-between'>
                        <button className='bg-cyan-700 text-white rounded-full px-3 py-1'>Todos</button>
                        <button className='bg-gray-200 text-gray-700 rounded-full px-3 py-1'>Entrantes</button>
                        <button className='bg-gray-200 text-gray-700 rounded-full px-3 py-1'>Principales</button>
                        <button className='bg-gray-200 text-gray-700 rounded-full px-3 py-1'>Bebidas</button>
                        <button className='bg-gray-200 text-gray-700 rounded-full px-3 py-1'>Postres</button>
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='bg-gray-100 rounded-3xl overflow-hidden'>
                            <div className='relative'>
                                <img src="https://placehold.co/600x600" alt="" className='w-full h-auto object-cover' />
                                <div className='absolute top-2 right-2 bg-white/80 text-cyan-700 px-2 py-1 rounded-md text-sm font-semibold shadow'>
                                    $20
                                </div>
                            </div>
                            <div className='p-2 text-start'>
                                <h1 className='font-bold ms-2'>Burguer Gourmet</h1>
                                <h2 className='text-gray-500 text-start ms-2'>Carne Angus, queso...</h2>
                            </div>
                        </div>
                        <div className='bg-gray-100 rounded-3xl overflow-hidden'>
                            <div className='relative'>
                                <img src="https://placehold.co/600x600" alt="" className='w-full h-auto object-cover' />
                                <div className='absolute top-2 right-2 bg-white/80 text-cyan-700 px-2 py-1 rounded-md text-sm font-semibold shadow'>
                                    $20
                                </div>
                            </div>
                            <div className='p-2 text-start'>
                                <h1 className='font-bold ms-2'>Burguer Gourmet</h1>
                                <h2 className='text-gray-500 text-start ms-2'>Carne Angus, queso...</h2>
                            </div>
                        </div>
                        <div className='bg-gray-100 rounded-3xl overflow-hidden'>
                            <div className='relative'>
                                <img src="https://placehold.co/600x600" alt="" className='w-full h-auto object-cover' />
                                <div className='absolute top-2 right-2 bg-white/80 text-cyan-700 px-2 py-1 rounded-md text-sm font-semibold shadow'>
                                    $20
                                </div>
                            </div>
                            <div className='p-2 text-start'>
                                <h1 className='font-bold ms-2'>Burguer Gourmet</h1>
                                <h2 className='text-gray-500 text-start ms-2'>Carne Angus, queso...</h2>
                            </div>
                        </div>
                        <div className='bg-gray-100 rounded-3xl overflow-hidden'>
                            <div className='relative'>
                                <img src="https://placehold.co/600x600" alt="" className='w-full h-auto object-cover' />
                                <div className='absolute top-2 right-2 bg-white/80 text-cyan-700 px-2 py-1 rounded-md text-sm font-semibold shadow'>
                                    $20
                                </div>
                            </div>
                            <div className='p-2 text-start'>
                                <h1 className='font-bold ms-2'>Burguer Gourmet</h1>
                                <h2 className='text-gray-500 text-start ms-2'>Carne Angus, queso...</h2>
                            </div>
                        </div>
                        <div className='bg-gray-100 rounded-3xl overflow-hidden'>
                            <div className='relative'>
                                <img src="https://placehold.co/600x600" alt="" className='w-full h-auto object-cover' />
                                <div className='absolute top-2 right-2 bg-white/80 text-cyan-700 px-2 py-1 rounded-md text-sm font-semibold shadow'>
                                    $20
                                </div>
                            </div>
                            <div className='p-2 text-start'>
                                <h1 className='font-bold ms-2'>Burguer Gourmet</h1>
                                <h2 className='text-gray-500 text-start ms-2'>Carne Angus, queso...</h2>
                            </div>
                        </div>
                        <div className='bg-gray-100 rounded-3xl overflow-hidden'>
                            <div className='relative'>
                                <img src="https://placehold.co/600x600" alt="" className='w-full h-auto object-cover' />
                                <div className='absolute top-2 right-2 bg-white/80 text-cyan-700 px-2 py-1 rounded-md text-sm font-semibold shadow'>
                                    $20
                                </div>
                            </div>
                            <div className='p-2 text-start'>
                                <h1 className='font-bold ms-2'>Burguer Gourmet</h1>
                                <h2 className='text-gray-500 text-start ms-2'>Carne Angus, queso...</h2>
                            </div>
                        </div>
                        <div className='bg-gray-100 rounded-3xl overflow-hidden'>
                            <div className='relative'>
                                <img src="https://placehold.co/600x600" alt="" className='w-full h-auto object-cover' />
                                <div className='absolute top-2 right-2 bg-white/80 text-cyan-700 px-2 py-1 rounded-md text-sm font-semibold shadow'>
                                    $20
                                </div>
                            </div>
                            <div className='p-2 text-start'>
                                <h1 className='font-bold ms-2'>Burguer Gourmet</h1>
                                <h2 className='text-gray-500 text-start ms-2'>Carne Angus, queso...</h2>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div className='w-4/12 p-4 gap-4 flex flex-col'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Nuevo Pedido</h1>
                        <h1 className='text-cyan-700'>Limpiar</h1>
                    </div>
                    <div className='flex justify-between rounded-full overflow-hidden '>
                        <button className='bg-cyan-700 text-white flex w-full justify-center py-1 gap-2'><Utensils /> Local</button>
                        <button className='bg-gray-200 text-gray-500 flex w-full justify-center py-1 gap-2'><ShoppingBag /> Para llevar</button>
                    </div>  
                    <select className='bg-gray-200 p-2 rounded'>
                        <option value="ALL">Todos</option>
                        <option value="STARTERS">Entrantes</option>
                        <option value="MAINS">Principales</option>
                        <option value="DRINKS">Bebidas</option>
                        <option value="DESSERTS">Postres</option>
                    </select>
                </div>
            </div>
        </div>
        

    );
};

export default NewOrder;
