"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MdLocationOn } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { MdWhatsapp } from 'react-icons/md';
import { AiFillInstagram } from "react-icons/ai";
import { WHATSAPP_URL, GOOGLE_MAPS_URL, BUSINESS_HOURS } from '@/lib/constants';

const dias = [
    "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
]

export default function Header () {
    const [horariosAbierto, setHorariosAbierto] = useState(false)

    useEffect(() => {
        if (!horariosAbierto) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setHorariosAbierto(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [horariosAbierto]);

    return(
        <div className="sticky top-0 z-30 sm:flex justify-between items-center px-4 sm:px-10 py-2 bg-white shadow-lg border-b-1 border-yellowDark">
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="flex items-end">
                    <Image
                        src='/Logo-completo.png'
                        alt="Logo"
                        height={80}
                        width={80}
                        className="rounded-full object-cover"
                    />
                    <Link href='/'>
                        <h1 className="sm:pb-2 text-5xl text-salmon text-shadow-sm hover:opacity-75 hover:scale-105">Juguitos Frescos</h1>
                    </Link>
                </div>
            </div>
            <div className="flex gap-x-8 pt-3 items-end justify-center sm:justify-end">
                <a
                    href="https://www.pedidosya.cl/restaurantes/santiago/juguitos-frescos-7c2dfd5f-20fe-402e-9c9e-d19daaf02d04-menu"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Comprar en Pedidos Ya"
                    className="flex items-center pb-[2px] text-3xl text-greenDark hover:opacity-75 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-greenDark rounded"
                >
                    <Image
                        src='/pedidos-ya-logo.png'
                        alt="Logo Pedidos Ya"
                        height={25}
                        width={25}
                        className="object-cover"
                    />
                </a>
                <a
                    href={GOOGLE_MAPS_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Ver ubicación en el mapa"
                    className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-greenDark rounded"
                >
                    <MdLocationOn />
                </a>
                <div className="relative flex items-center">
                    <button
                        onClick={() => setHorariosAbierto(!horariosAbierto)}
                        className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-greenDark rounded"
                        aria-label="Ver horarios"
                        aria-expanded={horariosAbierto}
                    >
                        <MdCalendarMonth />
                    </button>
                    {horariosAbierto && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setHorariosAbierto(false)}
                            />
                            <div
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="horario-title"
                                className="fixed top-32 left-1/2 -translate-x-1/2 sm:absolute sm:top-10 sm:left-auto sm:right-0 sm:translate-x-0 z-20 bg-yellowLight border-2 border-greenDark rounded-xl shadow-lg p-4 min-w-56"
                            >
                                <h2 id="horario-title" className="text-center font-bold text-greenDark text-lg mb-3 shantell-sans">Horario</h2>
                                <ul className="space-y-1">
                                    {dias.map((dia) => (
                                        <li key={dia} className="flex justify-between gap-x-4 text-sm text-greenDark">
                                            <span className="font-medium">{dia}</span>
                                            <span>{BUSINESS_HOURS}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <a
                    href={WHATSAPP_URL}
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp"
                    className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-greenDark rounded"
                >
                    <MdWhatsapp />
                </a>
                                <a
                    href="https://www.instagram.com/juguitosfrescos/"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Ir a perfil de Instagram"
                    className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-greenDark rounded"
                >
                    <AiFillInstagram />
                </a>
            </div>
        </div>
    )
};

/*
<p className="hidden md:inline mt-4 mb-2 sm:mb-0 sm:mt-auto sm:pr-6 lg:pr-0 pb-1 shantell-sans font-medium text-greenDark">Jugos naturales para todos los gustos</p>
*/