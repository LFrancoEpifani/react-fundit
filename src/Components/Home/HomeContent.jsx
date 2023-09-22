import React from 'react';
import balconyImage from '../assets/images/balcony.jpg'; // Asegúrate de que la ruta sea correcta

export default function Content() {
  return (
    <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${balconyImage})` }}>
      <div className="text-center m-10 bg-white bg-opacity-75 p-8 rounded-lg">
        <h2 className='text-3xl m-4'>BARCELONA</h2>
        <h1 className='text-2xl'>Encuentra el plan perfecto</h1>
        <button className='mt-10 border border-black pl-20 pr-20 pt-1 pb-1'><a href="#">Esta Semana</a></button>
      </div>
    </div>
  );
}
