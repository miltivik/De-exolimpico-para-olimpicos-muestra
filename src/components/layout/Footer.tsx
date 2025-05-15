import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50">
      {/* Main Footer with Quick Links */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Com-Partida de Matemática del Uruguay Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto mr-3"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Información compartida matemática: Un proyecto educativo que se construye con todos desde 1992.
              </p>
              <div className="flex space-x-3">
                <Link href="https://facebook.com/" aria-label="Facebook" className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </Link>
                <Link href="https://instagram.com/" aria-label="Instagram" className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </Link>
                <Link href="https://twitter.com/" aria-label="Twitter" className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </Link>
                <Link href="mailto:info@compartidauruguay.org" aria-label="Email" className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links - First Column */}
            <div>
              <h4 className="font-inter font-semibold text-gray-800 mb-4 text-md">Conocenos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-nosotros" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://com-partidauruguay.weebly.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-sky-700 transition-colors flex items-center"
                  >
                    Sitio Oficial
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links - Second Column */}
            <div>
              <h4 className="font-inter font-semibold text-gray-800 mb-4 text-md">Calendario y Equipos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/calendario-2025" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Calendario Completo
                  </Link>
                </li>
                <li>
                  <Link href="/proximas-competencias" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Próximas Competencias
                  </Link>
                </li>
                <li>
                  <Link href="/equipos-2025" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Equipos Uruguayos
                  </Link>
                </li>
                <li>
                  <Link href="/equipo-imo-2025" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Equipo IMO
                  </Link>
                </li>
                <li>
                  <Link href="/resultados-olimpiadas" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Resultados
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links - Third Column */}
            <div>
              <h4 className="font-inter font-semibold text-gray-800 mb-4 text-md">Materiales</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/seminarios-exolimpicos" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Seminarios de Exolímpicos
                  </Link>
                </li>
                <li>
                  <Link href="/pruebas-anteriores" className="text-gray-600 hover:text-sky-700 transition-colors">
                    Pruebas Anteriores
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-sky-700 transition-colors flex items-center"
                  >
                    Material de Estudio
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Address Bar */}
      <div className="border-t border-gray-200 bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-2 md:mb-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-sky-600">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Facultad de Ciencias, Iguá 4225, 11400 Montevideo, Uruguay</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-sky-600">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>(+598) 2123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-sky-700 text-white py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm mb-2">
            Copyright © {currentYear} Com-Partida de Matemática del Uruguay | Todos los Derechos Reservados.
          </p>
          <p className="text-xs text-sky-200">
            Sitio web desarrollado por ex-olímpicos uruguayos con ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
