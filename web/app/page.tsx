import Link from "next/link";
import Header from "./componentes/Header";

export default function Home() {
  return (
    <main className="bg-yellowLight">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-col lg:flex-row flex-grow p-8 sm:p-10 md:py-20 md:px-36 gap-6 md:gap-x-12">
          {/* CARDS */}
          <div
            className="card card-gray"
            style={{ backgroundImage: "url('/Iguana.jpg')" }}
          >
            <h1 className="cardTitle text-orangeDark text-shadow-green-900">
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
            <h1 className="cardTitle text-yellowDark text-shadow-yellow-900">
              <Link href="/menu" className="card-link">
                 <span className="absolute inset-0"></span>
                Menu
              </Link>
            </h1>
          </div>

          <div
            className="card card-green"
            style={{ backgroundImage: "url('/Flor1.jpg')" }}
          >
            <h1 className="cardTitle text-greenDark text-shadow-green-900">
              <Link href="/blog" className="card-link">
                <span className="absolute inset-0"></span>
                Blog
              </Link>
            </h1>
          </div>
        </div>


      </div>
    </main>
  );
}

/**

              
 */