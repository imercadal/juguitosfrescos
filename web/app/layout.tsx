import type { Metadata } from "next";
import { Shantell_Sans } from "next/font/google";
import "../styles/globals.css";

const shantell = Shantell_Sans({
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="es">
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