'use client'
import { Icon } from '@iconify/react';

export default function Header() {
      return (
       <header className='grid grid-cols-2 bg-black p-4'>
            <div className='text-start'>
            <h1 className='text-white'>FunDit</h1>
            </div>
            <div>
            <p className='flex justify-end'>
                <Icon className='text-white text-2xl' icon="ic:round-menu" />
            </p>
            </div>
       </header>
      );
  };

 