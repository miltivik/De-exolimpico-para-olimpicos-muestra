import { Competition } from '@/components/competitions/CompetitionsTable';

// Datos centralizados de todas las competencias 2025
export const allCompetitions: Competition[] = [
  // Próximas competencias (ordenadas por fecha más cercana)
  { 
    date: "Junio 4 al 9", 
    event: "36a Olimpíada Matemática de Países del Conosur (Minas, Uruguay)", 
    status: "upcoming-next",
    highlight: true,
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
  { 
    date: "Agosto (fecha y sede a confirmar)", 
    event: "5a Olimpíada PAGMO", 
    status: "upcoming"
  },
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
  { 
    date: "Octubre", 
    event: "Cuarta Instancia Olimpíada Nacional Secundaria (Final) (fecha a confirmar)", 
    status: "upcoming"
  },
  { 
    date: "Noviembre", 
    event: "Cuarta Instancia Olimpíada Nacional Primaria (Final) (fecha a confirmar)", 
    status: "upcoming"
  },
  { 
    date: "Diciembre", 
    event: "32a Olimpíada Rioplatense de Matemática (Buenos Aires, Argentina) (fecha a confirmar)", 
    status: "upcoming"
  },
  { 
    date: "Diciembre", 
    event: "5a Olimpíada OLIMPRI (fecha a confirmar)", 
    status: "upcoming"
  },

  // Eventos ya finalizados (ordenados cronológicamente descendente)
  { 
    date: "Mayo 26", 
    event: "Cuarta Prueba de Selección Iberoamericana", 
    status: "finished-recent"
  },
  { 
    date: "Mayo 10", 
    event: "Pruebas 31a Olimpíada Iberoamericana Juvenil de Mayo", 
    status: "finished-recent"
  },
  { 
    date: "Mayo", 
    event: "Tercera Prueba de Selección Iberoamericana", 
    status: "finished"
  },
  { 
    date: "Mayo", 
    event: "Segunda Prueba de Selección PAGMO", 
    status: "finished"
  },
  { 
    date: "Mayo 05", 
    event: "Segunda Prueba de Selección Conosur", 
    status: "finished"
  },
  { 
    date: "Abril", 
    event: "Primera Prueba de Selección PAGMO", 
    status: "finished"
  },
  { 
    date: "Abril 25", 
    event: "Primera Prueba de Selección Conosur", 
    status: "finished"
  },
  { 
    date: "Abril", 
    event: "Segunda Prueba de Selección Iberoamericana", 
    status: "finished"
  },
  { 
    date: "Abril 07", 
    event: "Tercera Prueba de Selección IMO", 
    status: "finished"
  },
  { 
    date: "Marzo 30", 
    event: "Torneo Internacional Canguro - Desafío Nacional Canguro", 
    status: "finished"
  },
  { 
    date: "Marzo", 
    event: "Primera Prueba de Selección Iberoamericana", 
    status: "finished"
  },
  { 
    date: "Marzo 24", 
    event: "Segunda Prueba de Selección IMO", 
    status: "finished"
  },
  { 
    date: "Marzo", 
    event: "Primera Prueba de Selección IMO", 
    status: "finished"
  },
  { 
    date: "Marzo 10", 
    event: "Prueba XXXVI APMO", 
    status: "finished"
  }
];

// Filtros útiles para diferentes vistas
export const upcomingCompetitions = allCompetitions.filter(
  competition => competition.status?.includes('upcoming') || competition.status === 'upcoming-next'
);

export const finishedCompetitions = allCompetitions.filter(
  competition => competition.status?.includes('finished')
);

export const nextSixCompetitions = upcomingCompetitions.slice(0, 6);

export const featuredCompetition = allCompetitions.find(
  competition => competition.status === 'upcoming-next' || competition.highlight
);

// Función helper para obtener competencias por estado
export function getCompetitionsByStatus(status: Competition['status']) {
  return allCompetitions.filter(competition => competition.status === status);
}

// Función helper para obtener las próximas N competencias
export function getNextCompetitions(count: number = 5) {
  return upcomingCompetitions.slice(0, count);
} 