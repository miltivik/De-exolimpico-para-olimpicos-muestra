import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

interface Nivel {
  key: string;
  title: string;
  pdf: string;
  video: string;
}

interface Params {
  year: string;
}

// Base de niveles para customización
const NIVELES_BASE: Nivel[] = [
  { key: 'IA', title: 'Nivel IA', pdf: '', video: '' },
  { key: 'IB', title: 'Nivel IB', pdf: '', video: '' },
  { key: 'IC', title: 'Nivel IC', pdf: '', video: '' },
  { key: 'II', title: 'Nivel II', pdf: '', video: '' },
  { key: 'III', title: 'Nivel III', pdf: '', video: '' },
  { key: 'IV', title: 'Nivel IV', pdf: '', video: '' },
  { key: 'V', title: 'Nivel V', pdf: '', video: '' },
];

// Parametrización por año
const DATA: Record<string, { primera: Nivel[]; segunda: Nivel[] }> = {
  '2021': {
    primera: [
      { ...NIVELES_BASE[0], pdf: 'https://drive.google.com/file/d/1AYDvXep9SYU_HY_J6qXl3ium5DcdOYXx/view?usp=sharing', video: 'https://www.youtube.com/embed/0nxDewGMmT4' },
      { ...NIVELES_BASE[1], pdf: 'https://drive.google.com/file/d/ID_IB_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IB_2021' },
      { ...NIVELES_BASE[2], pdf: 'https://drive.google.com/file/d/ID_IC_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IC_2021' },
      { ...NIVELES_BASE[3], pdf: 'https://drive.google.com/file/d/ID_II_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_II_2021' },
      { ...NIVELES_BASE[4], pdf: 'https://drive.google.com/file/d/ID_III_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_III_2021' },
      { ...NIVELES_BASE[5], pdf: 'https://drive.google.com/file/d/ID_IV_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IV_2021' },
      { ...NIVELES_BASE[6], pdf: 'https://drive.google.com/file/d/ID_V_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_V_2021' },
    ],
    segunda: [
      { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/ID_IA_2_2021/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IA_2_2021' },
    ]
  },
  '2020': {
    primera: NIVELES_BASE.map(n => ({ ...n })),
    segunda: NIVELES_BASE.map(n => ({ ...n })),
  },
  '2019': {
    primera: NIVELES_BASE.map(n => ({ ...n })),
    segunda: NIVELES_BASE.map(n => ({ ...n })),
  },
  'anteriores': {
    primera: NIVELES_BASE.map(n => ({ ...n })),
    segunda: NIVELES_BASE.map(n => ({ ...n })),
  },
};

export default async function PrimeraInstanciaPage({ params }: { params: Params }) {
  const year = params.year;
  const niveles: Nivel[] = DATA[year]?.primera || [];
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10">{year} - Primera Instancia</h1>
          <div className="grid grid-cols-1 gap-10">
            {niveles.map((nivel: Nivel) => (
              <div key={nivel.key} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 min-h-[400px]">
                <div className="flex-1 flex flex-col items-center w-full">
                  <h2 className="text-2xl font-bold text-sky-700 mb-4">{nivel.title}</h2>
                  <div className="w-full flex flex-col items-center">
                    <iframe
                      src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(nivel.pdf)}`}
                      width="100%"
                      height="400"
                      style={{ maxWidth: '700px', background: '#fafafa', border: '1px solid #eee', borderRadius: '12px' }}
                      title={`Enunciado ${nivel.title}`}
                      className="mb-4 w-full rounded-lg shadow"
                    ></iframe>
                    <a href={nivel.pdf} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline mb-6 text-lg">Abrir PDF en nueva pestaña</a>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center w-full">
                  <iframe
                    width="100%"
                    height="400"
                    style={{ maxWidth: '700px' }}
                    src={nivel.video}
                    title={`Resolución ${nivel.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow mb-4 w-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { year: '2021' },
    { year: '2020' },
    { year: '2019' },
    { year: 'anteriores' },
  ];
} 