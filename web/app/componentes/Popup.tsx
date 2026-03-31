"use client"

import { useState, useEffect } from "react";
import { PopupData } from '@/sanity/queries/marketing';
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type Props = {
    popupData: PopupData | null;
};

export default function Popup({ popupData }: Props) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const dismissed = localStorage.getItem('popup-dismissed');
        if (!dismissed) setOpen(true);
    }, [])

    const close = () => {
        localStorage.setItem('popup-dismissed', '1');
        setOpen(false);
    };

    useEffect(() => {
        if (!open) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [open])

    if (!open || !popupData) return null

    return (
        <div
            className="fixed inset-0 z-60 bg-black/60 flex items-center justify-center"
            onClick={close}
            aria-hidden="true"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-title"
                className="relative"
            >
                {/* Circle with GIF + overlaid content */}
            <motion.div 
                className="w-64 sm:w-80 h-64 sm:h-80 rounded-full overflow-hidden relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
            >
                    <Image
                        src="/Juguitos1.gif"
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                    />
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-center sm:justify-end pt-16 sm:pt-0 pb-0 sm:pb-10 gap-3 px-2">
                        <h1
                            id="popup-title"
                            className="uppercase text-white font-bold text-xl sm:text-2xl text-center tracking-widest leading-tight"
                        >
                            {popupData.title}
                        </h1>
                        { popupData.bajada && 
                        <h4 className="px-4 text-xs font-zain tracking-wide text-center">
                            {popupData.bajada}
                        </h4>
                        }
                        { popupData.linkUrl && popupData.linkText ? (                        
                        <Link
                            href={popupData.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 bg-greenDark rounded-md font-zain tracking-wide text-white text-sm font-semibold  px-4 py-1.5 hover:opacity-75 hover:scale-105 transition-opacity focus:outline-none focus:ring-1 focus:ring-yellowLight"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {popupData.linkText}
                        </Link>
                        )
                        : <br/> }
                    </div>
            </motion.div>

            </div>
        </div>
    )
}
