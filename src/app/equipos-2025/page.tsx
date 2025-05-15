import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Equipos Uruguayos 2025
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Nuestros representantes en las diferentes olimpiadas internacionales
            </p>

            {/* IMO Team */}
            <section className="mb-12">
              <Card className="border-t-4 border-yellow-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">Equipo Olímpico Internacional de Matemática (IMO) 2025</h2>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Los alumnos clasificados para representar a Uruguay en la 66ª Olimpíada Internacional de Matemática 
                      a desarrollarse en Sunshine Coast, Australia, entre el 10 y el 20 de julio de 2025 son (en orden alfabético):
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                          <span className="text-yellow-800 font-bold">URU 1</span>
                        </div>
                        <h3 className="font-bold">Diego Correa</h3>
                        <p className="text-sm text-gray-600">San Pablo</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                          <span className="text-yellow-800 font-bold">URU 2</span>
                        </div>
                        <h3 className="font-bold">Juan Martín González</h3>
                        <p className="text-sm text-gray-600">Liceo N° 1, Carmelo</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                          <span className="text-yellow-800 font-bold">URU 3</span>
                        </div>
                        <h3 className="font-bold">Federico Méndez</h3>
                        <p className="text-sm text-gray-600">José P. Varela</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                          <span className="text-yellow-800 font-bold">URU 4</span>
                        </div>
                        <h3 className="font-bold">Alfonso Ramos</h3>
                        <p className="text-sm text-gray-600">PRE/U</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                          <span className="text-yellow-800 font-bold">URU 5</span>
                        </div>
                        <h3 className="font-bold">Rafael Trápani</h3>
                        <p className="text-sm text-gray-600">Escuela Superior de Informática Buceo - UTU</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Link 
                      href="/equipo-imo-2025" 
                      className="inline-block text-yellow-600 hover:text-yellow-800 font-medium"
                    >
                      Ver más detalles del equipo IMO →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Other teams */}
            <section className="mb-12">
              <Card className="border-t-4 border-sky-500 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-sky-500 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">Otros Equipos Nacionales 2025</h2>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {/* Iberoamericana */}
                    <div className="py-4">
                      <h3 className="text-lg font-medium text-sky-700 mb-2">
                        Equipo Olímpico Iberoamericano de Matemática 2025
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Para la 40a Olimpíada Iberoamericana de Matemática (Temuco, Chile, 22-29 setiembre)
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="italic">
                          El equipo para la Olimpíada Iberoamericana se encuentra en proceso de selección y 
                          será anunciado próximamente. ¡Sigue atento a nuestras novedades!
                        </p>
                      </div>
                    </div>

                    {/* Conosur */}
                    <div className="py-4">
                      <h3 className="text-lg font-medium text-sky-700 mb-2">
                        Equipo Olímpico del Conosur 2025
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Participó en la 36a Olimpíada Matemática de Países del Conosur (Minas, Uruguay, 4-9 junio)
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p>
                          Nuestro equipo tuvo una destacada participación siendo anfitriones del evento. 
                          Próximamente publicaremos más detalles y resultados.
                        </p>
                      </div>
                    </div>

                    {/* Other teams */}
                    <div className="py-4">
                      <h3 className="text-lg font-medium text-sky-700 mb-2">
                        Otros Equipos 2025
                      </h3>
                      <p className="text-gray-600 mb-2">
                        PAGMO, Rioplatense y OLIMPRI
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="italic">
                          Los equipos para las Olimpíadas PAGMO, Rioplatense y OLIMPRI se encuentran en proceso de 
                          selección y serán anunciados próximamente. ¡Sigue atento a nuestras novedades!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <div className="text-center">
              <p className="text-gray-600">
                ¡Apoya a nuestros representantes en las diferentes competencias internacionales!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 