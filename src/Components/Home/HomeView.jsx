'use client'
import { Icon } from '@iconify/react';
import Header from '@/Components/Header/Header'

import InicioSesion from '@/Components/Sesión/InicioSesion'
import { Content } from 'next/font/google';

export default function HomeView() {
      return (
        <>
        <Header/>
        <InicioSesion/>
        </>
      );
  };

 