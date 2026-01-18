import { DollarSign, Save, X } from 'lucide-react';
import React from 'react';
import { useCreateDish } from '../../hooks/useCreateDish';
import { useGetCategories } from '../../hooks/useGetCategories';
import ImageDropzone from '../molecules/imageDropzone';

const CreateDish = ({ setShowCreateForm }: { setShowCreateForm: (v: boolean) => void }) => {
  const { form, handleChange, handleFileChange, handleSubmit, handleToggle } = useCreateDish(setShowCreateForm);
  const { categories } = useGetCategories();

  return (
    <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className='bg-white flex flex-col p-6 items-start gap-4 rounded-md w-6/12 h-11/12 overflow-auto'>
      <h1 className='text-xl font-medium'>Añadir Nuevo Platillo</h1>

      <h2 className='font-medium'>Nombre del Platillo</h2>
      <input name='name' type="text" placeholder='Ej: Hamburguesa doble' className='bg-slate-50 w-full py-2 indent-3' value={form.name} onChange={handleChange} />

      <div className='flex gap-2 w-full'>
        <div className='flex flex-col items-start w-full'>
          <h1>Categoría</h1>
          <select name="category" className='bg-gray-200 p-2 rounded w-full' value={String(form.category)} onChange={handleChange}>
            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-col items-start w-full'>
          <h1>Precio</h1>
          <div className='relative'>
            <DollarSign className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500' />
            <input name='price' type="number" placeholder='4' className='bg-slate-50 indent-10 py-2 w-full' value={String(form.price)} onChange={handleChange} />
          </div>
        </div>
      </div>

      <h1>Descripción</h1>
      <textarea name="description" className='resize-none w-full border border-gray-300 min-h-2/12 p-2' value={form.description} onChange={handleChange} />

      <h1>Imagen del Platillo</h1>
      <ImageDropzone onFileChange={handleFileChange} />

      <div className='flex bg-slate-50 w-full p-2 gap-2 justify-between items-center'>
        <div className='flex'>
          <div className='text-start'>
            <h1 className='font-medium'>Disponible</h1>
            <span className='text-sm text-slate-400'>Mostrar este platillo en el menú activo</span>
          </div>
        </div>

        <div
          role="switch"
          aria-checked={form.is_active}
          tabIndex={0}
          onClick={() => handleToggle(!form.is_active)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggle(!form.is_active); } }}
          className={`w-16 h-8 rounded-full flex items-center cursor-pointer ${form.is_active ? 'bg-green-500 justify-end' : 'bg-slate-300 justify-start'}`}
        >
          <div className='bg-white w-8 h-8 rounded-full shadow-md transition-all' />
        </div>
      </div>

      <div className='flex self-end gap-4'>
        <button type='button' onClick={() => setShowCreateForm(false)} className='flex border p-3 rounded-md'><X /> Cancelar</button>
        <button type='submit' className='flex bg-cyan-700 text-white p-3 rounded-md'><Save /> Guardar Platillo</button>
      </div>
    </form>
  );
};

export default CreateDish;