"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    <span className="text-yellow-700 font-medium text-sm">
      Faltan {timeLeft.days} días, {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
}

export default function CalendarPage() {
  // Events data with past events marked and target dates - sorted from closest to furthest from current date (May 25, 2025)
  const calendarEvents = [
    { 
      date: "Junio 4 al 9", 
      event: "36a Olimpíada Matemática de Países del Conosur (Minas, Uruguay)", 
      status: "upcoming-next",
      targetDate: new Date('2025-06-04T00:00:00')
    },
    { 
      date: "Julio 10 al 20", 
      event: "66th International Mathematical Olympiad (Sunshine Coast, Australia)", 
      status: "upcoming",
      targetDate: new Date('2025-07-10T00:00:00')
    },
    { 
      date: "Julio 27", 
      event: "Fecha límite Primera Instancia Olimpíada Nacional", 
      status: "upcoming",
      targetDate: new Date('2025-07-27T00:00:00')
    },
    { 
      date: "Agosto 17", 
      event: "Fecha límite Segunda Instancia Olimpíada Nacional", 
      status: "upcoming",
      targetDate: new Date('2025-08-17T00:00:00')
    },
    { date: "Agosto", event: "5a Olimpíada PAGMO (fecha y sede a confirmar)", status: "upcoming" },
    { 
      date: "Setiembre 7", 
      event: "Fecha límite Tercera Instancia Olimpíada Nacional (Semifinal)", 
      status: "upcoming",
      targetDate: new Date('2025-09-07T00:00:00')
    },
    { 
      date: "Setiembre 22 al 29", 
      event: "40a Olimpíada Iberoamericana de Matemática (Temuco, Chile)", 
      status: "upcoming",
      targetDate: new Date('2025-09-22T00:00:00')
    },
    { date: "Octubre", event: "Cuarta Instancia Olimpíada Nacional Secundaria (Final) (fecha a confirmar)", status: "upcoming" },
    { date: "Noviembre", event: "Cuarta Instancia Olimpíada Nacional Primaria (Final) (fecha a confirmar)", status: "upcoming" },
    { date: "Diciembre", event: "32a Olimpíada Rioplatense de Matemática (Buenos Aires, Argentina) (fecha a confirmar)", status: "upcoming" },
    { date: "Diciembre", event: "5a Olimpíada OLIMPRI (fecha a confirmar)", status: "upcoming" },
    { date: "Mayo 26", event: "Cuarta Prueba de Selección Iberoamericana", status: "finished" },
    { date: "Mayo 10", event: "Pruebas 31a Olimpíada Iberoamericana Juvenil de Mayo", status: "finished" },
    { date: "Mayo", event: "Tercera Prueba de Selección Iberoamericana", status: "finished" },
    { date: "Mayo", event: "Segunda Prueba de Selección PAGMO", status: "finished" },
    { date: "Mayo 05", event: "Segunda Prueba de Selección Conosur", status: "finished" },
    { date: "Abril", event: "Primera Prueba de Selección PAGMO", status: "finished" },
    { date: "Abril 25", event: "Primera Prueba de Selección Conosur", status: "finished" },
    { date: "Abril", event: "Segunda Prueba de Selección Iberoamericana", status: "finished" },
    { date: "Abril 07", event: "Tercera Prueba de Selección IMO", status: "finished" },
    { date: "Marzo 30", event: "Torneo Internacional Canguro - Desafío Nacional Canguro", status: "finished" },
    { date: "Marzo", event: "Primera Prueba de Selección Iberoamericana", status: "finished" },
    { date: "Marzo 24", event: "Segunda Prueba de Selección IMO", status: "finished" },
    { date: "Marzo", event: "Primera Prueba de Selección IMO", status: "finished" },
    { date: "Marzo 10", event: "Prueba XXXVI APMO", status: "finished" }
  ];
  

  // Get status badge for the event
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'finished':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded">Finalizado</span>;
      case 'finished-recent':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Finalizado Reciente</span>;
      case 'upcoming-next':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded">¡Próximo!</span>;
      case 'upcoming':
        return <span className="px-2 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded">Próximamente</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto px-2 md:px-8">
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-8">
              Calendario Completo 2025
            </h1>

            <div className="mb-10 bg-gradient-to-br from-sky-50 to-white p-7 rounded-2xl border border-sky-100 shadow flex flex-col gap-4">
              <h2 className="text-xl font-semibold mb-2 text-sky-800">Leyenda</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">{getStatusBadge('finished')}<span className="text-gray-700">Eventos ya realizados</span></div>
                <div className="flex items-center gap-2">{getStatusBadge('finished-recent')}<span className="text-gray-700">Eventos recientes</span></div>
                <div className="flex items-center gap-2">{getStatusBadge('upcoming-next')}<span className="text-gray-700">Próximo evento</span></div>
                <div className="flex items-center gap-2">{getStatusBadge('upcoming')}<span className="text-gray-700">Eventos futuros</span></div>
              </div>
            </div>

            <Card className="shadow-lg border-2 border-sky-100 bg-white/90 backdrop-blur-md">
              <CardContent className="p-0">
                <div className="overflow-x-auto rounded-xl">
                  <table className="w-full text-base">
                    <thead className="bg-gradient-to-r from-sky-700 to-sky-500 text-white">
                      <tr>
                        <th className="py-4 px-4 text-left font-semibold tracking-wide">Fecha</th>
                        <th className="py-4 px-4 text-left font-semibold tracking-wide">Evento</th>
                        <th className="py-4 px-4 text-left font-semibold tracking-wide">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {calendarEvents.map((event, index) => (
                        <tr 
                          key={index} 
                          className={`transition-all duration-200 hover:bg-sky-50/70 ${
                            event.status === 'finished' ? 'opacity-60' : ''
                          } ${
                            event.status === 'upcoming-next' ? 'bg-yellow-50/80' : ''
                          }`}
                        >
                          <td className="py-4 px-4 font-semibold whitespace-nowrap">{event.date}</td>
                          <td className="py-4 px-4">
                            <div className="flex flex-col gap-1">
                              <span>{event.event}</span>
                              {'targetDate' in event && event.targetDate && (
                                <Countdown targetDate={event.targetDate} />
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4">{getStatusBadge(event.status)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-10 text-center flex flex-col items-center gap-3">
              <p className="text-gray-500 text-sm">Fecha de referencia: 5 de julio de 2025</p>
              <p className="text-gray-700 text-base">Para más información sobre cualquiera de estos eventos, no dudes en contactarnos.</p>
              <Link href="/contacto">
                <Button variant="default" size="lg" className="mt-2 bg-sky-600 hover:bg-sky-700 text-white shadow-lg px-8 py-3 rounded-full text-base font-semibold transition-all duration-200">
                  Ir a Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 