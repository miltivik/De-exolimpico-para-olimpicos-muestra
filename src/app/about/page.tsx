import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-10">
          <div className="container-mate">
            <h1 className="text-3xl font-oswald font-bold text-center mb-8">¡Entrenar y competir te hace mejor!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side - Image */}
              <div className="flex justify-center items-center">
                <Image
                  src="https://ext.same-assets.com/237922056/1484181571.jpeg"
                  alt="Grupo MATE"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side - Text */}
              <div>
                <p className="mb-4">
                  El Grupo MATE es un grupo conformado por entrenadores de olimpiadas matemáticas, cuyo objetivo principal es entrenar a estudiantes que deseen mejorar en olimpiadas matemáticas.
                </p>
                <p className="mb-4">
                  Desde el año 2013, el Grupo MATE brinda entrenamientos dirigidos a estudiantes, para que tengan un mejor desempeño en las olimpiadas matemáticas (nacionales e internacionales) tales como la Olimpiada Nacional Escolar de Matemática (ONEM), la Olimpiada de Mayo, la Olimpiada Matemática de los Países del Cono Sur, la Olimpiada Iberoamericana de Matemática, la Olimpiada Matemática Rioplatense, la Olimpiada Internacional de Matemática, etc.
                </p>
                <p className="mb-4">
                  Desde el año 2016, los entrenamientos se realizan en campamentos, permitiendo que nuestros estudiantes puedan convivir y optimizar su entrenamiento en casas de campo ubicadas en la ciudad de Chaclacoyo (Lima). La mayoría de nuestros estudiantes provienen de ciudades del interior del país (Perú) y también provienen del extranjero (en el año 2019 tuvimos estudiantes de Bolivia y Venezuela, en el año 2020 tuvimos una estudiante de Paraguay y en el año 2022 tuvimos un estudiante de Bolivia). Desde el año 2017, también hemos brindado entrenamientos virtuales, en los cuales no solo han podido participar estudiantes de Perú, sino también de Bolivia, Costa Rica, Paraguay, República Dominicana y Venezuela.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Options */}
        <section className="py-8 bg-gray-50">
          <div className="container-mate">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* How to Participate */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-oswald font-semibold text-center mb-3">¿Cómo puedo participar?</h3>
                  <p className="text-sm text-gray-700">
                    Si eres estudiante del 3° al 5° de secundaria (o el equivalente fuera de Perú) y tienes gusto por las matemáticas, estás invitado a participar en nuestros entrenamientos. Si eres una madre o un padre interesado en que tu hijo o hija desarrolle sus habilidades matemáticas, estás invitado a saber más sobre nuestros programas de entrenamiento para las olimpiadas de matemáticas.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Link href="/entrenamiento" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Más información
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-10">
          <div className="container-mate">
            <h2 className="text-2xl font-oswald font-bold text-center mb-8">Nuestro equipo de entrenadores</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://ext.same-assets.com/237922056/264456791.jpeg"
                  alt="Juan Neyra"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="text-xl font-oswald font-semibold text-center">Juan Neyra</h3>
                  <p className="text-sm text-center">
                    Encargado principal<br />
                    +10 años de experiencia como entrenador olímpico
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://ext.same-assets.com/237922056/3155691714.jpeg"
                  alt="María T. Huanuico"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-green-600 p-4 text-white">
                  <h3 className="text-xl font-oswald font-semibold text-center">María T. Huanuico</h3>
                  <p className="text-sm text-center">
                    Medalla de plata (Copa ONEM 2022)<br />
                    14 años de experiencia en enseñanza<br />
                    Cursos de especialización en Matemática (UNMSM)
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://ext.same-assets.com/237922056/264456791.jpeg"
                  alt="Fernando Manrique"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-blue-600 p-4 text-white">
                  <h3 className="text-xl font-oswald font-semibold text-center">Fernando Manrique</h3>
                  <p className="text-sm text-center">
                    Primera mención de honor en la Olimpiada de Mayo 2017<br />
                    Medalla de bronce en la Olimpiada de Geometría 2018<br />
                    Medalla de oro en la ONEM 2018<br />
                    Medalla de plata OMCC 2018
                  </p>
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
