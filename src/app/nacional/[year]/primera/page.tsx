import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import GoogleDrivePDFViewer from '@/components/GoogleDrivePDFViewer';
import dynamic from "next/dynamic";
import ClientPDFSection from './ClientPDFSection';

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
  { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/view?usp=sharing', video: '' },
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
      { ...NIVELES_BASE[1], pdf: 'https://drive.google.com/file/d/1rmFHR_FGYD3pNkZxDnuJh54dcfyZ5_92/view?usp=sharing', video: 'https://www.youtube.com/embed/BHGWRr0WHX4?embed_config=%7B%22enc%22:%22AXH1ezkmYbvoBhYV9BGMg5rzuKNmO-d6dZlrYyy8Pme5X7-lDSEL2egMllvzqhaoGkARfTj4xyVuOUyLWRORav02dMHllgu8xxFJXmZ82F6BdqkBmJcP_8p0UlDGfm09x_OOSN_g0fD8KAPYvl08FUdOkugQmw7p8rGaLyPrtNNsXPnD%22%7D&errorlinks=1&rct=CpgBAXH1ezlrsKi0oK76pdpoFaeYGel6hR-XAm90wih2E3GfFWzRGMMqQl27bI8VNM-X62-b43CyAYAi6-4U7RNUhM3lCIzprWCYI5XxXVAENQlXKdQwvq0xkLtc5nlZfW71Px74EfAFS6yyXyk5vgwl5qiKynUloCElVU8GvtCWRI4cW6AG9p4zFQvgbea7AnDlQxp3FNSr5NI%3D' },
      { ...NIVELES_BASE[2], pdf: 'https://drive.google.com/file/d/12CqLFkCBLxn7p3xPtOEKGEu8VghIGvXw/view?usp=sharing', video: 'https://www.youtube.com/embed/FUMYsbRoxfQ?embed_config=%7B%22enc%22:%22AXH1ezmDNePVojwtNZLr8S2hnQg-4l4NEhkUHxIJvjuuJnZhVIUUZCykJcMYEOx0FVKQ7hWkoGm-v5ciKSJwWL859LwvyGmM3ukdy0D_VliFX5sq21v_Ln54HgOcxM5pkOojGUxMRRTtW1SLYLXGY1uOOQpv6HfYf4Ml7wQsJdPhcccI%22%7D&errorlinks=1&rct=CpcBAXH1ezl1Km7wijyskbvfCKb2UoiMo7EwJfwkALhP6QfkQgVbKBk8KijrZsMlDbgCFDabyMhgEVSJfr-ywXg2z-ufnLanXFeEka_MtDdWYoz4hlMgD2fx2_ultsgCY7JGuChvDAdsSHXLjd7eISrdI00OfxLn3jpNBSo0uToInaQX1qP1ulcGuMCnbor-YbO1EnTQGbNQuA%3D%3D' },
      { ...NIVELES_BASE[3], pdf: 'https://drive.google.com/file/d/1yqNaM15R1F9Ui6m5KlS7qLjajjCnyKop/view?usp=sharing', video: 'https://www.youtube.com/embed/wAXjU0wWjMo?embed_config=%7B%22enc%22:%22AXH1eznles74qxD_zhEMHXr7yVQzOUQS7RWglOj0fDAFpu7wCKnrYeMv7i4X-ndWBKP_BlH6utGjDDiDZ2MDJZmJDmNIIMxGj1zaB14C8t7vinXcFElDpxRDWW3c0DWzPV7b3xmuEUCYrygJ2qfZTb8wlsZNpzSK2UrXxGeRhbB2rE_e%22%7D&errorlinks=1&rct=CpgBAXH1eznGPzfsmwURcBO1SdBbZTWCxy69ytsEkiRlNxxk3HycIwcHMMqEPh-siE--pUw_h_k5xPF75UTn2BEoo45iGeuI9GquG438p8JDjN3VFSvQeSM-ESs8DetLwdz7cGH2TBMdR8EdcKuJRc-yXlghmVdwQF3SXRArnz9tsQtkL05SGwxYo1vtomw5rEX_7gUOxuUOS-I%3D' },
      { ...NIVELES_BASE[4], pdf: 'https://drive.google.com/file/d/1yAjri8lb-9fvEBQKnHLVDDHsk_OQKX3w/view?usp=sharing', video: 'https://www.youtube.com/embed/MNKSTaNomIU?embed_config=%7B%22enc%22:%22AXH1ezlhyHTTW42qt87PX1o709cxkFSX1hjxP9eV7gayihewAzoEPeu2l4Wd2LYK73oMN_svDwJkIS8nx4IkbDhjS0PyVAsYQV-yiZBK--UMUOCCmJzclK9y79_De2z_S9qq4-6FMSpKOu7M-aqnnjf_Cj6jZaoWCe_HPnEKKfsoCTB3%22%7D&errorlinks=1&rct=CpgBAXH1ezlCVsknlK3FNGHJjto3b0uXn0wdnLiP3lkfLncDGgZqA0TxzxclgqcKq8jiFiPjNCLIcEhcCl_cjEopOzDpkqX8y7cwvSoGBquB-XQ3wHzGR2WXP7OHYaZ3MDE5R6jEmmojNJqu3WYv3rWlpfPnW4ZpiCEW2Hzra9QzSgQFG9ff6a3N1nvLJsD9p8mlUBJBrw4EO-0%3D' },
      { ...NIVELES_BASE[5], pdf: 'https://drive.google.com/file/d/1wgyAjAwFdHEzB4dlY3wa8gMwtU94p1xO/view?usp=sharing', video: 'https://www.youtube.com/embed/JutTx_llv4Y?embed_config=%7B%22enc%22:%22AXH1ezmX_uk2yvvvXwSFFUGQJeqQXeCTcJkGD-auxBOl0EhTBXbJiFLXNXMV7cw7tRpU2aBd0WEJOaVuj8yItquF7d_O7yxbq8kDMKjA-QEoIS7-Y7lyt2rq1agXIYFI15Tbd737ATHv-J_RyUyrAac9jqu-d-9nwutDhriPm0cSDjR1%22%7D&errorlinks=1&rct=CpcBAXH1ezlaGx_VAuE5aM3f7Wu6czbk7osxFRbKYiqnV4pRuHUId4kyrsfc5hAGjBfvKNGh0ghbnzeRGBvTI23HpD9uZisrS2dVGgeTobAT3gmbpc-yykS3jwaF1q2a0AhAkpMXIHdt76cdgUqxjTZBikbznUGYQdWAKCxTu53qXxQCaGiEUqrypblax8HrRX17tQP2hzYbvw%3D%3D' },
      { ...NIVELES_BASE[6], pdf: 'https://drive.google.com/file/d/1-gtX0OE_iImsjpMpUO0a3y7K4H5OL7qK/view?usp=sharing', video: 'https://www.youtube.com/embed/KR19RPniYTE?embed_config=%7B%22enc%22:%22AXH1ezl2ANlMtINRMcK8F1EuAVXLxg6IoeVhGXozPskRnjvMdrc8Fmcog-Kua2atsdktfR6eMCDG12jxcqoN7_eh2a_hfJbc22JSmbE5IKmZfXQNFlg1yn_Tf5tA3-Z-aa0HijoUWodIZa_J4OYk_z8m1wM_CFC9Yhl8EI4OErMgIDQs%22%7D&errorlinks=1&rct=CpgBAXH1ezmXvOwv4m-mBDMPpCZI2A_KocqwjKxw3bN8mT3qELTKXoP4gMgiT1iVMimh4MBOLHv_j_aOe7Xwz7WFQaakvwBuV4uZ7cIIS1pVK-ygqxPUXQ0qiyz7Lg_Nhk_7koP27PLfusl2EIN-0MuQbGVSue7FTmvSeh1MBxbvuvG6hE0K1-npgq8okoPD5H5k1H8z20Jm0cI%3D' },
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

export default async function PrimeraInstanciaPage({ params }: { params: Promise<Params> }) {
  const { year } = await params;
  const niveles: Nivel[] = DATA[year]?.primera || [];
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10">{year} - Primera Instancia</h1>
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