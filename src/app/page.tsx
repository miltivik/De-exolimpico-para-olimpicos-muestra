"use client"
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';

export default function Home() {
  
  const [mascotVisible, setMascotVisible] = useState(false);
  useEffect(() => {
    setMascotVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative bg-[#daf3ff] py-16 text-white">
          <div className="absolute inset-0 z-0 opacity-70">
            {/* Replace with a real image of students solving math problems */}
            <Image
              src="/images/Equipo_Ibero_2024_000.png"
              alt="Jóvenes participando en olimpiadas"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-inter text-4xl md:text-5xl font-bold mb-4">
                Com-Partida de Matemática del Uruguay
              </h1>
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Fomentando el talento matemático desde 1992
              </h2>
              <p className="text-lg font-bold mb-8">
                Un proyecto educativo surgido por iniciativa de profesores de matemática,
                que consideran a la resolución de problemas como la herramienta más
                importante para el aprendizaje de la asignatura.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/sobre-nosotros" className="bg-sky-700 text-white hover:bg-sky-800 px-6 py-3 rounded-md font-medium transition-colors">
                  Conoce más
                </Link>
                <Link href="/calendario-2025" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Calendario 2025
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* De ex-olímpicos para olímpicos section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
              De Ex-Olímpicos para Olímpicos: Una Comunidad que Crece
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4">
                Con enorme satisfacción ponemos a vuestra disposición una nueva forma de acercarse a nuestras actividades.
              </p>
              <p className="mb-4">
                Satisfacción que surge por ser una página creada por ex-olímpicos de la Com-Partida de Matemática del Uruguay, 
                quienes sintieron la necesidad de retribuir las oportunidades de desarrollo que se les han brindado durante su 
                trayecto por ella y decidieron trasmitir a quienes siguen su camino sus experiencias y conocimientos.
              </p>
              <p className="mb-4">
                Todos los contenidos son decisión y creación de ellos; mediante esta herramienta buscan facilitar y enriquecer 
                el camino de los actuales y futuros participantes en nuestras actividades.
              </p>
              <p className="font-medium text-sky-700">
                Valoramos y agradecemos el trabajo de estos jóvenes, en cuyas manos estará la continuidad y el futuro de esta experiencia.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
              Resultados Destacados 2025
            </h2>
            <Card className="border-2 border-sky-500 max-w-3xl mx-auto overflow-hidden">
              <div className="bg-sky-500 text-white p-4 font-inter text-xl text-center">
                36ª Olimpíada Matemática de Países del Conosur (Minas, Uruguay)
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-sky-700 mb-4">
                    ¡Uruguay brilla en la 36ª Olimpíada Matemática de Países del Conosur!
                  </h3>
                  <p className="mb-4">
                    Celebrada en Minas, Uruguay, del 4 al 9 de junio, nuestros jóvenes matemáticos demostraron su talento y dedicación.
                    ¡Felicitaciones a todos los participantes y ganadores!
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Próximamente más detalles y galería de fotos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Competitions */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
              ¡Prepárate! Próximas Competencias
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-sky-600 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left font-medium">Fecha</th>
                        <th className="py-3 px-4 text-left font-medium">Evento</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-sky-50">
                        <td className="py-3 px-4 font-medium">Julio 10 al 20</td>
                        <td className="py-3 px-4">66th International Mathematical Olympiad (Sunshine Coast, Australia)</td>
                      </tr>
                      <tr className="hover:bg-sky-50">
                        <td className="py-3 px-4 font-medium">Julio 27</td>
                        <td className="py-3 px-4">Fecha límite Primera Instancia Olimpíada Nacional</td>
                      </tr>
                      <tr className="hover:bg-sky-50">
                        <td className="py-3 px-4 font-medium">Agosto 17</td>
                        <td className="py-3 px-4">Fecha límite Segunda Instancia Olimpíada Nacional</td>
                      </tr>
                      <tr className="hover:bg-sky-50">
                        <td className="py-3 px-4 font-medium">Agosto (fecha y sede a confirmar)</td>
                        <td className="py-3 px-4">5a Olimpíada PAGMO</td>
                      </tr>
                      <tr className="hover:bg-sky-50">
                        <td className="py-3 px-4 font-medium">Setiembre 07</td>
                        <td className="py-3 px-4">Fecha límite Tercera Instancia Olimpíada Nacional (Semifinal)</td>
                      </tr>
                      <tr className="hover:bg-sky-50">
                        <td className="py-3 px-4 font-medium">Setiembre 22 al 29</td>
                        <td className="py-3 px-4">40a Olimpíada Iberoamericana de Matemática (Temuco, Chile)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center py-4">
                  <Link href="/calendario-2025" className="text-sky-600 hover:text-sky-800 font-medium">
                    Ver calendario completo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mascot Section */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:w-1/3 bg-white p-8 flex items-center justify-center">
                {/* Placeholder for mascot image */}
                <div className={`w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-out ${mascotVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <Image
                    src="/images/Eulerito.jpg"
                    alt="Foto de la mascota Eulerito"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-4">
                  ¡Saluda a Nuestra Mascota Matemática!
                </h2>
                <p className="mb-4">
                  Te presentamos a nuestra alegre compañera que nos inspira en cada desafío matemático. 
                  ¡Ella representa la curiosidad, la perseverancia y la diversión de aprender matemáticas en Uruguay!
                </p>
                <div className="flex justify-end mt-6">
                  <div className="italic text-yellow-600 font-medium border-t border-yellow-300 pt-2">
                    ¡Nos vemos en las olimpiadas!
                  </div>
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
