"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Tipos de datos para las competencias
export interface Competition {
  date: string;
  event: string;
  status?: 'finished' | 'finished-recent' | 'upcoming-next' | 'upcoming';
  highlight?: boolean;
  targetDate?: Date;
  daysLeft?: number | null;
}

// Props del componente
interface CompetitionsTableProps {
  competitions: Competition[];
  title?: string;
  showCountdown?: boolean;
  maxItems?: number;
  variant?: 'compact' | 'full';
  showLegend?: boolean;
  footerLink?: {
    href: string;
    text: string;
  };
}

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

// Componente contador solo de días
function CountdownDays({ targetDate }: { targetDate: Date }) {
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setDays(0);
        return;
      }
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDays(days);
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 1000); // actualiza cada minuto
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <span className="block text-sm text-yellow-600 mt-1">
      Faltan {days} días
    </span>
  );
}

// Función para obtener el badge de estado
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

export default function CompetitionsTable({
  competitions,
  title = "Competencias",
  showCountdown = true,
  maxItems,
  variant = 'full',
  showLegend = false,
  footerLink
}: CompetitionsTableProps) {
  // Filtrar y limitar items si es necesario
  const displayedCompetitions = maxItems ? competitions.slice(0, maxItems) : competitions;

  // Variante compacta para la página principal
  if (variant === 'compact') {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
            {title}
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
                    {displayedCompetitions.map((competition, index) => (
                      <tr key={index} className="hover:bg-sky-50">
                        <td className="py-3 px-4 font-medium">{competition.date}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-col gap-1">
                            <span>{competition.event}</span>
                            {showCountdown && competition.targetDate && (
                              <CountdownDays targetDate={competition.targetDate} />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {footerLink && (
                <div className="text-center py-4">
                  <Link href={footerLink.href} className="text-sky-600 hover:text-sky-800 font-medium">
                    {footerLink.text} →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante completa para páginas dedicadas
  return (
    <div className="w-full">
      {title && (
        <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-8">
          {title}
        </h1>
      )}

      {showLegend && (
        <div className="mb-10 bg-gradient-to-br from-sky-50 to-white p-7 rounded-2xl border border-sky-100 shadow flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-2 text-sky-800">Leyenda</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">{getStatusBadge('finished')}<span className="text-gray-700">Eventos ya realizados</span></div>
            <div className="flex items-center gap-2">{getStatusBadge('finished-recent')}<span className="text-gray-700">Eventos recientes</span></div>
            <div className="flex items-center gap-2">{getStatusBadge('upcoming-next')}<span className="text-gray-700">Próximo evento</span></div>
            <div className="flex items-center gap-2">{getStatusBadge('upcoming')}<span className="text-gray-700">Eventos futuros</span></div>
          </div>
        </div>
      )}

      <div className="bg-white shadow-lg border-2 border-sky-100 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead className="bg-gradient-to-r from-sky-700 to-sky-500 text-white">
              <tr>
                <th className="py-4 px-4 text-left font-semibold tracking-wide">Fecha</th>
                <th className="py-4 px-4 text-left font-semibold tracking-wide">Evento</th>
                {variant === 'full' && (
                  <th className="py-4 px-4 text-left font-semibold tracking-wide">Estado</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayedCompetitions.map((competition, index) => (
                <tr 
                  key={index} 
                  className={`transition-all duration-200 hover:bg-sky-50/70 ${
                    competition.status === 'finished' ? 'opacity-60' : ''
                  } ${
                    competition.status === 'upcoming-next' || competition.highlight ? 'bg-yellow-50/80' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-semibold whitespace-nowrap">{competition.date}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col gap-1">
                      <span>{competition.event}</span>
                      {showCountdown && competition.targetDate && (
                        <Countdown targetDate={competition.targetDate} />
                      )}
                    </div>
                  </td>
                  {variant === 'full' && (
                    <td className="py-4 px-4">{competition.status && getStatusBadge(competition.status)}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {footerLink && (
        <div className="mt-10 text-center">
          <Link href={footerLink.href} className="text-sky-600 hover:text-sky-800 font-medium">
            {footerLink.text} →
          </Link>
        </div>
      )}
    </div>
  );
} 