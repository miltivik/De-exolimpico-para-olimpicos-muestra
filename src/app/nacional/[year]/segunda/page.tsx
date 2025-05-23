import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import ClientPDFSection from './ClientPDFSection';

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
          <ClientPDFSection niveles={niveles} />
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