import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function ResultadosPage() {
  // Sample results data for past competitions
  const resultados = [
    {
      year: 2024,
      competitions: [
        {
          name: "35ª Olimpíada Matemática de Países del Conosur",
          location: "Asunción, Paraguay",
          date: "Mayo 2024",
          team: [
            { name: "Carlos Rodríguez", award: "Medalla de Plata", image: "/images/placeholder-profile.png" },
            { name: "Ana Fernández", award: "Medalla de Bronce", image: "/images/placeholder-profile.png" },
            { name: "Martín Pérez", award: "Mención Honorífica", image: "/images/placeholder-profile.png" },
            { name: "Lucía Méndez", award: "Medalla de Bronce", image: "/images/placeholder-profile.png" },
          ],
          leaders: ["Prof. Roberto Rodriguez", "Dra. Sandra Martínez"]
        },
        {
          name: "65ª Olimpíada Internacional de Matemática (IMO)",
          location: "Bath, Reino Unido",
          date: "Julio 2024",
          team: [
            { name: "Diego Correa", award: "Mención Honorífica", image: "/images/placeholder-profile.png" },
            { name: "Federico Méndez", award: "Mención Honorífica", image: "/images/placeholder-profile.png" },
            { name: "Rafael Trápani", award: null, image: "/images/placeholder-profile.png" },
            { name: "Gabriel Torres", award: null, image: "/images/placeholder-profile.png" },
            { name: "Juan Martín González", award: null, image: "/images/placeholder-profile.png" },
          ],
          leaders: ["Prof. Roberto Rodriguez", "Dra. Ana Fernández"]
        },
        {
          name: "39ª Olimpíada Iberoamericana de Matemática",
          location: "Ciudad de México, México",
          date: "Septiembre 2024",
          team: [
            { name: "Carlos Rodríguez", award: "Medalla de Bronce", image: "/images/placeholder-profile.png" },
            { name: "Lucía Méndez", award: "Mención Honorífica", image: "/images/placeholder-profile.png" },
            { name: "Alfonso Ramos", award: "Medalla de Bronce", image: "/images/placeholder-profile.png" },
            { name: "Andrés Silva", award: null, image: "/images/placeholder-profile.png" },
          ],
          leaders: ["Prof. Fernando López", "Prof. María González"]
        }
      ]
    },
    {
      year: 2023,
      competitions: [
        {
          name: "34ª Olimpíada Matemática de Países del Conosur",
          location: "Santiago, Chile",
          date: "Mayo 2023",
          team: [
            { name: "Santiago Vázquez", award: "Medalla de Oro", image: "/images/placeholder-profile.png" },
            { name: "Carolina Pérez", award: "Mención Honorífica", image: "/images/placeholder-profile.png" },
            { name: "Andrés Silva", award: "Medalla de Bronce", image: "/images/placeholder-profile.png" },
            { name: "Daniela Castro", award: null, image: "/images/placeholder-profile.png" },
          ],
          leaders: ["Prof. Roberto Rodriguez", "Prof. Fernando López"]
        },
        {
          name: "64ª Olimpíada Internacional de Matemática (IMO)",
          location: "Tokio, Japón",
          date: "Julio 2023",
          team: [
            { name: "Santiago Vázquez", award: "Medalla de Bronce", image: "/images/placeholder-profile.png" },
            { name: "Federico Méndez", award: "Mención Honorífica", image: "/images/placeholder-profile.png" },
            { name: "Carolina Pérez", award: null, image: "/images/placeholder-profile.png" },
            { name: "Alfonso Ramos", award: null, image: "/images/placeholder-profile.png" },
            { name: "Alejandro Torres", award: null, image: "/images/placeholder-profile.png" },
          ],
          leaders: ["Prof. Roberto Rodriguez", "Dra. Ana Fernández"]
        }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Resultados de Olimpiadas Internacionales
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Historia y logros de los equipos uruguayos en competencias matemáticas internacionales
            </p>

            {/* Introduction */}
            <div className="bg-sky-50 p-6 rounded-lg mb-8">
              <p className="mb-4">
                A lo largo de los años, Uruguay ha tenido una destacada participación en diversas competencias 
                matemáticas internacionales. En esta sección, podrás conocer los resultados obtenidos por nuestros 
                representantes en las olimpiadas más recientes.
              </p>
              <p>
                Cada medalla y mención honorífica representa el esfuerzo, dedicación y talento de nuestros 
                estudiantes, así como el compromiso del equipo de entrenadores y profesores que los preparan.
              </p>
            </div>
            
            {/* Medal Legend */}
            <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Leyenda de Premios:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="9" r="6" fill="currentColor"/>
                      <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                      <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Medalla de Oro</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-gray-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="9" r="6" fill="currentColor"/>
                      <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                      <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Medalla de Plata</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-amber-700 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="9" r="6" fill="currentColor"/>
                      <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                      <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Medalla de Bronce</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center text-sky-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Mención Honorífica</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results by year */}
            {resultados.map((yearData) => (
              <div key={yearData.year} className="mb-10">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-sky-500 inline-block text-sky-800">
                  Resultados {yearData.year}
                </h2>
                
                <div className="space-y-6">
                  {yearData.competitions.map((competition, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-sky-700 mb-2">{competition.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 mb-4">
                          <span>{competition.location}</span>
                          <span>{competition.date}</span>
                        </div>
                        
                        <h4 className="font-medium mt-4 mb-3">Equipo uruguayo:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          {competition.team.map((member, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                              <div className="flex flex-col">
                                <div className="relative w-full h-40 bg-gray-100">
                                  <Image 
                                    src={member.image} 
                                    alt={`Foto de ${member.name}`} 
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                  />
                                  {member.award && (
                                    <div className={`absolute top-3 right-3 flex items-center rounded-full px-3 py-1 ${
                                      member.award.includes("Oro") ? "bg-yellow-100 text-yellow-600" :
                                      member.award.includes("Plata") ? "bg-gray-100 text-gray-500" :
                                      member.award.includes("Bronce") ? "bg-amber-100 text-amber-700" :
                                      "bg-sky-100 text-sky-600"
                                    }`}>
                                      {member.award.includes("Oro") && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                          <circle cx="12" cy="9" r="6" fill="currentColor"/>
                                          <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                                          <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                                        </svg>
                                      )}
                                      {member.award.includes("Plata") && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                          <circle cx="12" cy="9" r="6" fill="currentColor"/>
                                          <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                                          <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                                        </svg>
                                      )}
                                      {member.award.includes("Bronce") && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                          <circle cx="12" cy="9" r="6" fill="currentColor"/>
                                          <path d="M12,2A7,7,0,1,0,19,9,7,7,0,0,0,12,2Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" fill="currentColor"/>
                                          <path d="M14.5,19l-2.5-2l-2.5,2l.5-3l-2-2,3-.5L12,11l1,2.5l3,.5l-2,2Z" fill="currentColor"/>
                                        </svg>
                                      )}
                                      {member.award.includes("Mención") && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" fill="currentColor"/>
                                        </svg>
                                      )}
                                    </div>
                                  )}
                                </div>
                                <div className="px-4 py-4">
                                  <h5 className="font-bold text-gray-800 text-lg">{member.name}</h5>
                                  {member.award ? (
                                    <p className={`text-sm font-medium ${
                                      member.award.includes("Oro") ? "text-yellow-600" :
                                      member.award.includes("Plata") ? "text-gray-500" :
                                      member.award.includes("Bronce") ? "text-amber-700" :
                                      "text-sky-600"
                                    }`}>
                                      {member.award}
                                    </p>
                                  ) : (
                                    <p className="text-sm text-gray-500 italic">Participante</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                          <span className="font-medium">Líderes del equipo:</span>{" "}
                          {competition.leaders.join(", ")}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Historical note */}
            <div className="bg-yellow-50 p-8 rounded-lg shadow-sm border border-yellow-200 mt-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-yellow-100 rounded-full p-5 md:p-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-yellow-700 mb-3">Historia olímpica uruguaya</h3>
                  <p className="mb-4 text-gray-700">
                    Uruguay participa en la Olimpíada Internacional de Matemática desde 1997, y ha 
                    obtenido hasta el momento <span className="font-medium text-amber-700">3 medallas de bronce</span> y 
                    <span className="font-medium text-sky-600"> 12 menciones honoríficas</span>.
                  </p>
                  <Link 
                    href="/contacto" 
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
                  >
                    ¿Tienes información histórica que quieras compartir? Contáctanos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 