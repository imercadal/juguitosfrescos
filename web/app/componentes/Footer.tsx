import { HorarioData } from '@/sanity/queries/horario';

export default function Footer({ data } : { data: HorarioData | null }) {
    return (
        <footer className="bg-greenDark">
            <div className="lg:max-w-6xl mx-auto flex justify-between text-center py-4 px-6 sm:px-10 mt-6">
                <p className="text-sm text-gray-100! font-zain tracking-wide">&copy; 2026 Juguitos Frescos. Todos los derechos reservados.</p>
                <div className="flex">
                    <p className="text-sm text-gray-100! font-zain tracking-wide">Horario de atención: </p>
                    { data ? (
                        <p className="pl-3 text-sm text-gray-100! font-zain tracking-wide">{data.cuerpo}</p>
                    ) : (
                        <p className="pl-3 text-sm text-gray-100! font-zain tracking-wide">lunes a domingo, 9:00 - 21:00 hrs</p>
                    )}
                </div>
            </div>
        </footer>
    );
    };