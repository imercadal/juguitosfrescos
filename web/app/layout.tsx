import type { Metadata } from "next";
import { Shantell_Sans, Zain } from "next/font/google";
import "../styles/globals.css";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import { client } from "@/sanity/client";
import { BANNER_QUERY, BannerData } from "@/sanity/queries/marketing";
import Script from "next/script";

const shantell = Shantell_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const zain = Zain({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zain',
  weight: ['200', '300', '400', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Juguitos Frescos",
  description: "Menu, Artistas y Blog!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const banner = await client.fetch<BannerData | null>(BANNER_QUERY);

  return (
    <html lang="es" className={zain.variable}>
      <body
        className={`${shantell.className} antialiased`}
      >
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
        <main className="bg-yellowLight min-h-screen">
          <Banner data={banner} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}