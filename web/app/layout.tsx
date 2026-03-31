import type { Metadata } from "next";
import { Shantell_Sans, Zain } from "next/font/google";
import "../styles/globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={zain.variable}>
      <body
        className={`${shantell.className} antialiased`}
      >
        <main className="bg-yellowLight min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}