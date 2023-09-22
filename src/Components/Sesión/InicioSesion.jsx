import React from 'react';
import { Icon } from '@iconify/react';

function InicioSesion() {
  return (
    <div className='font-sans'>
      <div className="text-center mt-20 mb-8">
        <h1 className='text-2xl font-light mb-1'>Iniciar Sesión</h1>
        <h2 className='text-xs'>¿Es tu primera vez? Regístrate</h2>
      </div>
      <div className='flex flex-col items-center'>
        <label htmlFor="Email" className='self-left w-8/12'>Email *</label>
        <input className='border border-black p-2 w-8/12' type="text" placeholder='Email' />
      </div>
      <div className='flex flex-col items-center mt-6'>
        <label htmlFor="text" className='text-start w-8/12'>Contraseña *</label>
        <input className='border border-black p-2 w-8/12' type="text" placeholder='Contraseña' />
        <p className='w-8/12 text-left mt-1'>¿Olvidaste la contraseña?</p>
      </div>
      <div className='flex justify-center mt-6'>
        <button className='bg-black text-white pl-10 pr-10 pt-3 pb-3'><a href="" className=''>Iniciar sesión</a></button>
      </div>
      <div className='flex justify-center items-center mt-3 flex-col'>
        <p>O puedes conectarte con</p>
        <Icon className='text-2xl' icon="flat-color-icons:google" />
      </div>
      <h1 className=''>Barcelona</h1>
    </div>
  );
}

export default InicioSesion;
