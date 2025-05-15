import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function MascotaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center bg-sky-50 rounded-xl shadow-lg p-8 gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-sky-200 shadow-md">
                  <Image
                    src="/images/Eulerito.jpg"
                    alt="Foto de la mascota Eulerito"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold font-inter mb-2 text-sky-700">Eulerito</h1>
                <p className="text-gray-600 mb-2 font-medium">Mascota oficial desde 2015</p>
                <p className="text-gray-700 text-base">
                  Eulerito ha acompañado a la Com-Partida desde 2015, inspirando a estudiantes con su simpatía y amor por las matemáticas. Siempre presente en eventos y competencias, se ha convertido en un símbolo de alegría, compañerismo y pasión por el aprendizaje.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 