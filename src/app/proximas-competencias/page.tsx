"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CompetitionsTable from '@/components/competitions/CompetitionsTable';
import { upcomingCompetitions, featuredCompetition } from '@/data/competitions';
import Link from 'next/link';
import Image from 'next/image';

// Componente contador en tiempo real
function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<{days:number, hours:number, minutes:number, seconds:number}>({days:0, hours:0, minutes:0, seconds:0});

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <span className="text-yellow-700 font-medium">
      Faltan {timeLeft.days} días, {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
}

// Componente contador solo de días
function CountdownDays({ targetDate }: { targetDate: Date }) {
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setDays(0);
        return;
      }
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDays(days);
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 1000); // actualiza cada minuto
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <span className="block text-sm text-yellow-600 mt-1">
      Faltan {days} días
    </span>
  );
}

export default function ProximasCompetenciasPage() {
  // Fecha de inicio del Conosur 2025
  const conosurStartDate = new Date('2025-06-04T00:00:00');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold mb-4 text-sky-800">
                Próximas Competencias
              </h1>
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-yellow-500 rounded mb-6"></div>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Prepárate para las próximas competencias matemáticas
              </p>
            </div>

            {/* Featured Event Card */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-sky-50 to-white border border-gray-100">
              <div className="relative h-48 md:h-64">
                <Image 
                  src="/images/hero-background.jpg" 
                  alt="Conosur Background" 
                  fill 
                  style={{objectFit:'cover'}}
                  className="z-0"
                  priority
                />
                <div className="absolute inset-0 bg-sky-800 opacity-70 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center p-6 md:p-10">
                    <div className="inline-block px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full mb-3">
                      PRÓXIMO EVENTO
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
                      Olimpíada Matemática del Conosur
                    </h2>
                    <p className="text-white text-opacity-90 md:text-lg">
                      La competencia que reúne a los mejores estudiantes de los países del Conosur
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="flex items-center md:mr-8 mb-4 md:mb-0">
                    <div className="bg-sky-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Junio 4 al 9, 2025</span>
                  </div>
                  
                  <div className="flex items-center md:mr-8 mb-4 md:mb-0">
                    <div className="bg-sky-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Minas, Uruguay</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-yellow-100 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Countdown targetDate={conosurStartDate} />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <p className="text-gray-600 mb-3">
                      Uruguay será sede de esta importante competencia que reúne a los mejores estudiantes de matemática de Argentina, Brasil, Chile, Paraguay, Perú y Uruguay.
                    </p>
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-3">
                        <div className="w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center text-sky-700 font-bold text-xs border-2 border-white">UY</div>
                        <div className="w-8 h-8 rounded-full bg-sky-300 flex items-center justify-center text-sky-700 font-bold text-xs border-2 border-white">4</div>
                      </div>
                      <span className="text-gray-500 text-sm">4 participantes</span>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Link 
                      href="/equipo-conosur-2025" 
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors shadow-sm flex items-center group relative overflow-hidden text-sm"
                    >
                      <span className="absolute inset-0 w-0 bg-yellow-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                      <span className="relative flex items-center">
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Events Table */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Todas las próximas competencias</h2>
              <CompetitionsTable
                competitions={upcomingCompetitions}
                variant="full"
                showCountdown={true}
                footerLink={{
                  href: "/calendario-2025",
                  text: "Ver calendario completo"
                }}
              />
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm">Fecha de referencia: 25 de mayo de 2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 