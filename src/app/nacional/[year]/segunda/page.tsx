import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const niveles = [
  { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/ID_IA_2/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IA_2', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IB', title: 'Nivel IB', pdf: 'https://drive.google.com/file/d/ID_IB_2/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IB_2', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IC', title: 'Nivel IC', pdf: 'https://drive.google.com/file/d/ID_IC_2/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IC_2', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'II', title: 'Nivel II', pdf: 'https://drive.google.com/file/d/ID_II_2/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_II_2', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'III', title: 'Nivel III', pdf: 'https://drive.google.com/file/d/ID_III_2/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_III_2', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IV', title: 'Nivel IV', pdf: 'https://drive.google.com/file/d/ID_IV_2/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_IV_2', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'V', title: 'Nivel V', pdf: 'https://drive.google.com/file/d/ID_V_2/view?usp=sharing', video: 'https://www.youtube.com/embed/VIDEO_ID_V_2', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
];

export default function SegundaInstanciaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10">2021 - Segunda Instancia</h1>
          <div className="grid grid-cols-1 gap-10">
            {niveles.map((nivel) => (
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