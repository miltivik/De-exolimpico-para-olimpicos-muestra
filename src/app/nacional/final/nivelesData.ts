/**
 * Tipo que define la estructura de un problema de olimpiada
 */
export interface Problema {
  key: string;
  title: string;
  pdf: string;
}

/**
 * Tipo que define la estructura de un nivel con sus problemas
 */
export interface NivelProblemas {
  nivel: string;
  titulo: string;
  descripcion: string;
  problemas: Problema[];
}

/**
 * Datos de problemas para cada nivel en la Final Nacional
 */
export const NIVELES_FINAL: Record<string, NivelProblemas> = {
  'IA': {
    nivel: 'IA',
    titulo: 'Final Nacional - Nivel IA',
    descripcion: 'Problemas de la etapa final para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IA-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IA-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IA-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      }
    ]
  },
  'IB': {
    nivel: 'IB',
    titulo: 'Final Nacional - Nivel IB',
    descripcion: 'Problemas de la etapa final para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IB-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IB-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IB-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      }
    ]
  },
  'IC': {
    nivel: 'IC',
    titulo: 'Final Nacional - Nivel IC',
    descripcion: 'Problemas de la etapa final para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IC-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IC-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IC-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      }
    ]
  },
  'II': {
    nivel: 'II',
    titulo: 'Final Nacional - Nivel II',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-II-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-II-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-II-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      }
    ]
  },
  'III': {
    nivel: 'III',
    titulo: 'Final Nacional - Nivel III',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-III-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-III-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-III-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      }
    ]
  },
  'IV': {
    nivel: 'IV',
    titulo: 'Final Nacional - Nivel IV',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-IV-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IV-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IV-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      }
    ]
  },
  'V': {
    nivel: 'V',
    titulo: 'Final Nacional - Nivel V',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-V-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-V-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-V-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      }
    ]
  }
}; 