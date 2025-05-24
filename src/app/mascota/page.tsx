"use client";

import React, { useRef, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MascotaCardProps {
  imageSrc: string;
  name: string;
  subtitle: string;
  description: string;
}

function MascotaCard({ imageSrc, name, subtitle, description }: MascotaCardProps) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center bg-sky-50 rounded-xl shadow-lg p-8 gap-8">
      <div className="flex-shrink-0">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-sky-200 shadow-md">
          <Image
            src={imageSrc}
            alt={`Foto de ${name}`}
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold font-inter mb-2 text-sky-700">{name}</h1>
        <p className="text-gray-600 mb-2 font-medium">{subtitle}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default function MascotaPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const slideWidth = 600; // Ancho de cada slide + gap

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Contenedor con flechas */}
            <div className="relative">
              {/* Flecha izquierda */}
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center justify-center ${
                  canScrollLeft 
                    ? 'hover:bg-sky-50 hover:shadow-xl text-sky-600 hover:text-sky-700' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Flecha derecha */}
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center justify-center ${
                  canScrollRight 
                    ? 'hover:bg-sky-50 hover:shadow-xl text-sky-600 hover:text-sky-700' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={24} />
              </button>

              {/* Contenedor slider sin scrollbar */}
              <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto py-4 px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onScroll={checkScrollButtons}
              >
                <div className="flex-shrink-0 w-[600px]">
                  <MascotaCard
                    imageSrc="/images/Eulerito.jpg"
                    name="Gauchito II"
                    subtitle="Mascota actual, desde la Ibero 2024"
                    description="Este capibara, digno sucesor del original, ha acompañado con orgullo a las delegaciones de Ibero y Río 2024, viendo nacer a potenciales leyendas."
                  />
                </div>
                <div className="flex-shrink-0 w-[600px]">
                  <MascotaCard
                    imageSrc="/images/Gauchito_primero_borrosa.JPG"
                    name="Gauchito I"
                    subtitle="Mascota de la IMO 2024"
                    description="A pesar de haber acompañado a una sola delegación, su aparición fue tan icónica que su reemplazo no fue más que una versión agrandada de él mismo."
                  />
                </div>
                <div className="flex-shrink-0 w-[600px]">
                  <MascotaCard
                    imageSrc="/images/Gauchito_primero_borrosa.JPG"
                    name="Fuffy"
                    subtitle="Mascota desde la IMO 2018"
                    description="Su simpática forma y la satisfacción de apretarlo cautivaron a la delegación de la IMO 2018. Sin embargo, se rumorea que el nombre correcto de Fuffy debería ser Muffy, pues solo trajo desgracia."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de fotos */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">Galería de Momentos</h2>
            
            <div className="flex gap-4 overflow-x-auto pb-4">
              {/* Foto 1 */}
              <div className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/Momento_Gauchito_Segundo_000.jpg"
                  alt="Momento con Gauchito II"
                  width={320}
                  height={240}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Foto 2 */}
              <div className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/Momento_Gauchito_Segundo_001.jpg"
                  alt="Gauchito I en acción"
                  width={320}
                  height={240}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Foto 3 */}
              <div className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/Momento_Gauchito_Segundo_002.jpg"
                  alt="Competencia matemática"
                  width={320}
                  height={240}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Foto 4 */}
              <div className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/Momento_Gauchito_Segundo_003.jpg"
                  alt="Delegación IMO"
                  width={320}
                  height={240}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Foto 5 */}
              <div className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/Momento_Gauchito_Segundo_004.jpg"
                  alt="Fuffy histórico"
                  width={320}
                  height={240}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Foto 6 */}
              <div className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/Momento_Gauchito_Segundo_005.jpg"
                  alt="Momentos únicos"
                  width={320}
                  height={240}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Foto 7 */}
              <div className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/Momento_Gauchito_Segundo_006.jpg"
                  alt="Momentos únicos"
                  width={320}
                  height={240}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}