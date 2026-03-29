"use client"

import { useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MdMyLocation } from 'react-icons/md';

const CENTER = { lat: -33.43281579661079, lng: -70.6575659234882 };
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${CENTER.lat},${CENTER.lng}`;

export default function Map() {
    const mapRef = useRef<google.maps.Map | null>(null);

    function handleRecenter() {
        mapRef.current?.panTo(CENTER);
        mapRef.current?.setZoom(16);
    }

    return (
        <div className="relative w-full h-40 md:h-36 rounded-lg overflow-hidden">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={CENTER}
                    zoom={16}
                    options={{ streetViewControl: false }}
                    onLoad={(map) => {
                        mapRef.current = map}}
                >
                    <Marker position={CENTER} />
                </GoogleMap>
            </LoadScript>
            <button
                onClick={handleRecenter}
                className="absolute top-2 left-2 z-10 bg-newYellow p-1.5 rounded-full shadow hover:opacity-80"
                aria-label="Volver a la tienda"
            >
                <MdMyLocation size={20} className="text-greenDark" />
            </button>
            <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 z-10 bg-greenDark text-sm font-medium text-white px-3 py-1 rounded-full shadow hover:opacity-80"
            >
                Abrir en Google Maps
            </a>
        </div>
    );
}
