import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-sky-700 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-inter font-bold mb-4">
                Sobre Nosotros
              </h1>
              <p className="text-xl font-light">
                Conoce la historia, misión y visión de la Com-Partida de Matemática del Uruguay
              </p>
            </div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-6 text-center">
                Nuestra Historia
              </h2>
              <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                <Image 
                  src="/images/Historia.jpg" 
                  alt="Historia de Com-Partida de Matemática" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="prose prose-lg mx-auto">
                <p>
                  La Com-Partida de Matemática del Uruguay nació en 1992 por iniciativa de profesores de matemática 
                  apasionados por la disciplina, que consideran a la resolución de problemas como la herramienta más 
                  importante para el aprendizaje de la asignatura.
                </p>
                <p>
                  Desde sus inicios, nos hemos dedicado a fomentar el talento matemático en Uruguay, buscando despertar
                  el interés y cultivar las habilidades de los jóvenes estudiantes en todos los rincones del país.
                </p>
                <p>
                  A lo largo de estos años, hemos representado a Uruguay en numerosas olimpiadas internacionales, llevando
                  el nombre del país a competencias como la Olimpiada Internacional de Matemática (IMO), la Olimpiada 
                  Iberoamericana, la Olimpiada del Conosur, entre otras.
                </p>
                <p>
                  Con cada año que pasa, nuestra comunidad crece, uniendo a estudiantes, ex-olímpicos, profesores y 
                  coordinadores en un proyecto educativo que se construye con la contribución de todos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Mascota */}
        <section id="mascota" className="py-12 bg-white">
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
                <h2 className="text-2xl font-bold font-inter mb-2 text-sky-700">Gauchito</h2>
                <p className="text-gray-600 mb-2 font-medium">Mascota oficial desde 2024</p>
                <p className="text-gray-700 text-base">
                  Gauchito ha acompañado a la Com-Partida desde 2024, inspirando a estudiantes con su simpatía y amor por las matemáticas. Siempre presente en eventos y competencias, se ha convertido en un símbolo de alegría, compañerismo y pasión por el aprendizaje.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Misión y Visión */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-sky-600 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold">Nuestra Misión</h2>
                  </div>
                  <p className="text-gray-600">
                    Fomentar el pensamiento matemático a través de la resolución de problemas, 
                    brindando a los estudiantes uruguayos oportunidades para desarrollar sus habilidades, 
                    representar al país en competencias internacionales y crear una comunidad de aprendizaje 
                    colaborativo en todo el territorio nacional.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 rounded-full p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold">Nuestra Visión</h2>
                  </div>
                  <p className="text-gray-600">
                    Ser una organización reconocida por su excelencia en la formación matemática, 
                    que inspire a las nuevas generaciones a descubrir la belleza de las matemáticas, 
                    contribuyendo al desarrollo educativo del país y posicionando a Uruguay en el 
                    panorama internacional de las olimpiadas matemáticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-8 text-center">
                Nuestros Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Excelencia</h3>
                  <p className="text-gray-600 text-sm">
                    Promovemos el rigor y la calidad en todo lo que hacemos, 
                    buscando siempre el máximo desarrollo del potencial de cada estudiante.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Comunidad</h3>
                  <p className="text-gray-600 text-sm">
                    Creemos en la construcción colectiva del conocimiento, donde cada integrante 
                    aporta desde su experiencia para el crecimiento de todos.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Pasión</h3>
                  <p className="text-gray-600 text-sm">
                    Trabajamos con entusiasmo y dedicación, transmitiendo el amor por las matemáticas 
                    y el placer de resolver problemas desafiantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colaboradores */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-8 text-center">
                Colaboradores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-sky-100 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image 
                      src="/images/colaborador1.jpg" 
                      alt="Foto de colaborador" 
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Ismael Medina</h3>
                  <p className="text-gray-600 text-sm">Coordinador General</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-sky-100 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image 
                      src="/images/colaborador2.jpg" 
                      alt="Foto de colaborador" 
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">María González</h3>
                  <p className="text-gray-600 text-sm">Directora Académica</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-sky-100 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image 
                      src="/images/colaborador3.jpg" 
                      alt="Foto de colaborador" 
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Carlos Rodríguez</h3>
                  <p className="text-gray-600 text-sm">Entrenador Principal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 