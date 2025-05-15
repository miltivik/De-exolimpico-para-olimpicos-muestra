import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-4">
              Contacto
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Estamos aquí para responder todas tus consultas
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Form */}
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Envíanos un mensaje</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="tu.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="info">Información general</option>
                        <option value="olimpiadas">Olimpiadas</option>
                        <option value="coordinador">Quiero ser coordinador</option>
                        <option value="materiales">Materiales de estudio</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Escribe tu consulta aquí..."
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                      >
                        Enviar mensaje
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-sky-100 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-md font-medium">Correo electrónico</h3>
                          <p className="text-gray-600">info@compartidauruguay.org</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-sky-100 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-md font-medium">Teléfono</h3>
                          <p className="text-gray-600">(+598) 2123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-sky-100 rounded-full p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-md font-medium">Dirección</h3>
                          <p className="text-gray-600">Facultad de Ciencias</p>
                          <p className="text-gray-600">Iguá 4225</p>
                          <p className="text-gray-600">11400 Montevideo, Uruguay</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Síguenos en redes sociales</h2>
                    <div className="flex space-x-4">
                      <a 
                        href="https://facebook.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-sky-600 text-white p-3 rounded-full hover:bg-sky-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://instagram.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-sky-600 text-white p-3 rounded-full hover:bg-sky-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      </a>
                      <a 
                        href="https://twitter.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-sky-600 text-white p-3 rounded-full hover:bg-sky-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Preguntas frecuentes</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-lg text-sky-700">¿Cómo puedo participar en las olimpiadas matemáticas?</h3>
                  <p className="mt-2 text-gray-600">
                    Para participar en nuestras olimpiadas debes acercarte a un coordinador de tu centro educativo 
                    o contactarnos directamente. Las convocatorias se suelen publicar al comienzo del año lectivo.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-lg text-sky-700">¿Qué materiales de estudio ofrecen?</h3>
                  <p className="mt-2 text-gray-600">
                    Contamos con una amplia biblioteca de problemas, seminarios de ex-olímpicos y material de 
                    preparación. Puedes acceder a ellos desde la sección de Materiales en nuestra web.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 