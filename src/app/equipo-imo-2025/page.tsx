import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function IMOTeamPage() {
  // Team members data
  const teamMembers = [
    {
      id: "URU1",
      name: "Diego Correa",
      school: "San Pablo",
      achievements: ["Medalla de Plata en Olimpíada Rioplatense 2024", "Medalla de Bronce en Olimpíada del Conosur 2024"],
      bio: "Diego ha participado en olimpiadas matemáticas desde 2022. Su enfoque principal es el álgebra y la combinatoria."
    },
    {
      id: "URU2",
      name: "Juan Martín González",
      school: "Liceo N° 1, Carmelo",
      achievements: ["Medalla de Oro en Olimpíada Nacional 2024", "Mención Honorífica en Olimpíada Iberoamericana 2024"],
      bio: "Juan Martín descubrió su pasión por las matemáticas a los 10 años. Es su primera participación en la IMO."
    },
    {
      id: "URU3",
      name: "Federico Méndez",
      school: "José P. Varela",
      achievements: ["Medalla de Plata en Olimpíada Nacional 2024", "Medalla de Oro en OLIMPRI 2023"],
      bio: "Federico es uno de los más experimentados del equipo, habiendo participado en la IMO 2024 donde obtuvo Mención Honorífica."
    },
    {
      id: "URU4",
      name: "Alfonso Ramos",
      school: "PRE/U",
      achievements: ["Medalla de Oro en Olimpíada Nacional 2024", "Medalla de Bronce en Olimpíada Iberoamericana 2024"],
      bio: "Alfonso se destaca por su capacidad para resolver problemas geométricos y su habilidad para enseñar a otros."
    },
    {
      id: "URU5",
      name: "Rafael Trápani",
      school: "Escuela Superior de Informática Buceo - UTU",
      achievements: ["Medalla de Plata en Olimpíada Nacional 2024", "Medalla de Plata en Olimpíada Rioplatense 2024"],
      bio: "Rafael combina su pasión por la programación con su talento matemático. Es su primera participación en la IMO."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Equipo Olímpico Internacional de Matemática 2025
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Representando a Uruguay en la 66ª IMO en Sunshine Coast, Australia
            </p>

            {/* Event Info */}
            <section className="mb-12">
              <Card className="border border-yellow-200 bg-yellow-50 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-yellow-500">
                        <span className="text-yellow-600 text-5xl font-bold">IMO</span>
                      </div>
                    </div>
                    <div className="md:w-3/4 md:pl-6">
                      <h2 className="text-xl font-bold text-yellow-800 mb-2">
                        66th International Mathematical Olympiad
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="flex items-center text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Sunshine Coast, Australia
                          </p>
                          <p className="flex items-center text-gray-700 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            10 al 20 de julio, 2025
                          </p>
                        </div>
                        <div>
                          <p className="flex items-center text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            110 países participantes
                          </p>
                          <p className="flex items-center text-gray-700 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            +600 participantes
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="https://imo2025.au" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block text-yellow-700 hover:text-yellow-800 font-medium"
                        >
                          Visitar sitio oficial IMO 2025 →
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Team Members */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Nuestros Representantes</h2>
              
              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                          <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center">
                            <span className="text-sky-700 font-bold">{member.id}</span>
                          </div>
                        </div>
                        <div className="md:w-3/4 md:pl-6">
                          <h3 className="text-xl font-bold text-sky-700">{member.name}</h3>
                          <p className="text-gray-600 mb-2">{member.school}</p>
                          
                          <h4 className="font-medium mt-4 mb-2">Logros destacados:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700">
                            {member.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                          
                          <p className="mt-4 text-sm">{member.bio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Team Leaders */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Líderes del Equipo</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold">Prof. Roberto Rodriguez</h3>
                      <p className="text-gray-600 text-sm mb-3">Líder de Delegación</p>
                      <p className="text-center text-sm">Profesor de Matemática con más de 20 años de experiencia en olimpiadas. Ha liderado equipos uruguayos en 15 IMOs anteriores.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold">Dra. Ana Fernández</h3>
                      <p className="text-gray-600 text-sm mb-3">Deputy Leader</p>
                      <p className="text-center text-sm">Ex-olímpica y doctora en Matemáticas. Medalla de Bronce en IMO 2007. Actualmente profesora universitaria y entrenadora del equipo nacional.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="text-center">
              <Link 
                href="/equipos-2025" 
                className="inline-block text-sky-600 hover:text-sky-800 font-medium"
              >
                ← Volver a todos los equipos
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 