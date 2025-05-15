import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Grupo Mate – ¡Entrenar y competir te hace mejor!",
  description: "Grupo MATE es un grupo conformado por entrenadores de olimpiadas matemáticas, cuyo objetivo principal es entrenar a estudiantes que deseen mejorar en olimpiadas matemáticas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-roboto`}>
        {children}
      </body>
    </html>
  );
}
