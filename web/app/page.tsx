import Link from "next/link";
import Header from "./componentes/Header";
import Map from "./componentes/Map";
import Popup from "./componentes/Popup";
import { client } from "@/sanity/client";
import { POPUP_QUERY, PopupData } from "@/sanity/queries/marketing";

export default async function Home() {
  const popups: PopupData[] = await client.fetch(POPUP_QUERY);
  const popup = popups.find(p => p.visible) ?? null;

  return (
    <div className="bg-newYellow">
      <Popup popupData={popup} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="lg:max-w-7xl mx-auto w-full flex flex-col flex-grow">
          <section className="flex flex-col lg:flex-row flex-grow p-6 sm:p-10 md:py-6 gap-6 md:gap-x-12">
            {/* CARDS */}
            <div
              className="card card-gray"
              style={{ backgroundImage: "url('/Iguana.jpg')" }}
            >
              <h1 className="cardTitle text-orangeDark text-shadow-green-900 tracking-wider">
                <Link href="/artistas" className="card-link">
                  <span className="absolute inset-0"></span>
                  Artistas
                </Link>
              </h1>
            </div>
            <div
              className="card card-gray !bg-[center_calc(50%+1rem)] md:!bg-center"
              style={{ backgroundImage: "url('/juguito-bg.jpg')" }}
            >
              <h1 className="cardTitle text-newYellow text-shadow-yellow-900 tracking-wider">
                <Link href="/menu" className="card-link">
                   <span className="absolute inset-0"></span>
                  Menu
                </Link>
              </h1>
            </div>

            <div
              className="card card-green overflow-hidden"
              style={{ backgroundImage: "url('/Flor1.jpg')" }}
            >
              <div className="absolute inset-0 bg-gray-500/10 rounded-3xl pointer-events-none z-20" />
              <h1 className="cardTitle text-greenDark text-shadow-gray-900 z-50 tracking-widest">
                <Link href="/blog" className="card-link">
                  <span className="absolute inset-0"></span>
                  Blog
                </Link>
              </h1>
            </div>
          </section>
          <section className="relative bg-cover bg-center text-center px-6 sm:px-10 pb-6 md:py-6">
            <Map />
          </section>
        </div>

      </div>
    </div>
  );
}

/**
px-8 md:px-10 lg:px-0 pt-2 pb-8 md:pb-12 lg:pb-0
              
 */