import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container-mate">
          <h1 className="text-3xl font-oswald font-bold text-center mb-8">Contáctanos</h1>

          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-oswald font-semibold">Datos de Contacto</h2>

              <Card className="overflow-hidden">
                <div className="bg-blue-600 p-4 flex justify-center items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <h3 className="font-oswald text-xl">Grupo Mate</h3>
                </div>
                <CardContent className="p-4 text-center">
                  <p>facebook.com/grupomate2</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-blue-600 p-4 flex justify-center items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <h3 className="font-oswald text-xl">Teléfono</h3>
                </div>
                <CardContent className="p-4 text-center">
                  <p>(+51) 916 679 829</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-blue-600 p-4 flex justify-center items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <h3 className="font-oswald text-xl">Email</h3>
                </div>
                <CardContent className="p-4 text-center">
                  <p>informes@grupo-mate.com</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-blue-600 p-4 flex justify-center items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <h3 className="font-oswald text-xl">Atención</h3>
                </div>
                <CardContent className="p-4 text-center">
                  <p>Lunes - Sábados 9:00 a. m. a 9:00 p. m.</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-oswald font-semibold mb-4">Envíanos un mensaje</h2>

              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Nombres"
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Apellidos"
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Celular / Teléfono"
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Mensaje"
                    className="w-full min-h-32"
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Enviar Consulta
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
