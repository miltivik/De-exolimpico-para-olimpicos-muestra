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
      { ...NIVELES_BASE[1], pdf: 'https://drive.google.com/file/d/1rmFHR_FGYD3pNkZxDnuJh54dcfyZ5_92/view?usp=sharing', video: 'https://www.youtube.com/embed/BHGWRr0WHX4?embed_config=%7B%22enc%22:%22AXH1ezlsFxRg-dT0r7YM_jnTz3VL-4twkQfgnPCKp5Bu1oPlGuX1xHgEV86vE8npSr_BIK3s0yzgDeuPMIj0JZhQSWr84yc4M9a2mtT4AJ1j0rdgbd5eh5_yg7z3ifAxhh-145buSdz76BfoH2D7SbR9zqis7_VNiwi0FM73PkqqeiAi%22%7D&errorlinks=1&rct=CpgBAXH1ezmtBzh-ILXJ6UIGydp-zSGx6Cy-OLBqD8VJKrtOOX2yI7cFFavgEbp-Ac_H7DYoxGO0AypTkPLER32oeWvsnxN_ygkG75EeJseWQqa-RUiGx9maWfA9IRlEqYT8VKIP_jvOksaHgCqxm_nh3KMgNdtWwJJ2AiGnnhM6VC7-spBmKoihTy2IhAgvVHGEdwZKHhunUBM%3D' },
      { ...NIVELES_BASE[2], pdf: 'https://drive.google.com/file/d/12CqLFkCBLxn7p3xPtOEKGEu8VghIGvXw/view?usp=sharing', video: 'https://www.youtube.com/embed/FUMYsbRoxfQ?embed_config=%7B%22enc%22:%22AXH1ezktJRmzW6o1GojUnQYOqJrro6lCp_dwsFpjhtaPpzFbZSk1MuWoSy4r6Nu7OY9qltoW9iLyVPrfbv9j5fPkcjDkYZutffTWVz9YQhztvLXUzH7Ru0Wu2J9k8bo1Hwg5UDHVF072vh-S8ZSv4JRSvPocQEF9WGZ9_uA2GTOF_nqs%22%7D&errorlinks=1&rct=CpcBAXH1eznLt_AbqDlVx_Xez1VaiTm8dPi20-ROyyKdWlyCzZshQXkmc4s5UtQ9giL61UfhGm2GvwxjPWeP0qLMUlNWpWhhX_RoJhEAeDOXhHPd39JEpwONIq4rSFtMkYiA78_e6mdBJ07A2NY0i7m-HljWuVo1yYfPB3q3AGdimtn7UwBFiXxT11cIE5x2FhPRAzp06gLBZA%3D%3D' },
      { ...NIVELES_BASE[3], pdf: 'https://drive.google.com/file/d/1yqNaM15R1F9Ui6m5KlS7qLjajjCnyKop/view?usp=sharing', video: 'https://www.youtube.com/embed/wAXjU0wWjMo?embed_config=%7B%22enc%22:%22AXH1ezm3nsQePegK9o4A3l5WuM-PvyYBoYbhmeia2xAe0p_HIv0nYQ5hDLJsbeQa9PTiKH0TSR1IFGPIzNUtd0EpvGsxX4ZxuhkCuLOY0_vDl9pLS10ReUbpYVwATw8B5vNOfFmqvl3zLwrRtzLKCZE15V8Jxpg92bHLdk9iZrNi4VNH%22%7D&errorlinks=1&rct=CpgBAXH1ezmPNWhhPeozfXDzEOh1u0yT_sOPPvUzoHwBhPHWiWJEbSzyIYCHpwoBBKgLwYg1z8u6cgp3HklVZTLtfGbxaw7rHaQco_Twp5i4FzgrbcLUupNYyaWXx-yQ-dcPcmzTTBMOn2wyRZzELzHAJnXmepN2PXSVMFMHen3yH6OXa5kuieChIOVpKeZyOl-U_iZxBgw17vk%3D' },
      { ...NIVELES_BASE[4], pdf: 'https://drive.google.com/file/d/1yAjri8lb-9fvEBQKnHLVDDHsk_OQKX3w/view?usp=sharing', video: 'https://www.youtube.com/embed/MNKSTaNomIU?embed_config=%7B%22enc%22:%22AXH1eznms-r0T1TLdXUtQ52pXVIs0ros9TThpUE5JIvVjKBdLld-XsNUjlzvErXlZ02yyYgmXpTxLLWCcitMvrxBURL5NCVA3k-JL9hocOm_d-_8mRbowNFYYNwn7bKmzwAOXuFguvPPNEgsOH11plbUds1_a90Xj9IMAxDLJFIwQyKC%22%7D&errorlinks=1&rct=CpgBAXH1ezkiCvV3Bdxz15T-yJ9k_H5WMzFcd5bbJlx_XEjGywgCInr8_zwUxm0HgwGER1ePcVsvW224IH5crg1AwaXBMcK5Kn5aVgmhsztUVVRrnJ27wOVN08w5cpk8q0o8KdFcmu6z7RutYb7seeeXFvidSio0YYXYGMEYAPF7VUiQI9mAHwcbDLsyx710VdMeLmnJnoLj3Tg%3D' },
      { ...NIVELES_BASE[5], pdf: 'https://drive.google.com/file/d/1wgyAjAwFdHEzB4dlY3wa8gMwtU94p1xO/view?usp=sharing', video: 'https://www.youtube.com/embed/JutTx_llv4Y?embed_config=%7B%22enc%22:%22AXH1ezljsoD7kCtm9kh3OGbrPskAGZ1wO5MowbYtwPwCiPtRK6Fy_TMDRAvhB8pZW8sGPudjesP0ZYTvAr6lc3OQ3EDAn1LXTpJfG4L1V1Wi_8O1rwGpLgbxG9QQgxhY-nQU2gz6EseOlehvPONqlLoZ97xQyEpVrzOJoAgBAfGtNkhQ%22%7D&errorlinks=1&rct=CpcBAXH1ezlIfgAesnv3IekL06F3vBw8xCLplKCk1j688kL0OEpKAg0a3JWrpW03hONV0Y02O4ma9sSrkciOXWeAHnTq_c8J7vn-4lHKMsLJ_--bfwhoKOtLYhFB44JWb18PWbU-Rp-x1qBmFaxdWFatpkvxdmO2KdyIjkKai3w-lxr9UTySqU6FRcFMM0pVEcuot9WCMsyFfg%3D%3D' },
      { ...NIVELES_BASE[6], pdf: 'https://drive.google.com/file/d/1-gtX0OE_iImsjpMpUO0a3y7K4H5OL7qK/view?usp=sharing', video: 'https://www.youtube.com/embed/KR19RPniYTE?embed_config=%7B%22enc%22:%22AXH1ezlf0bmqJIzvJOe0Nl4faN7mpDLzAMO3f9XOBDqPwa1NYabVJTIzsfJ3IMcnvq484__FXuctMgCt1Q1EuSp1XBYnuK9JJwljKB-jYE3teR7EccaqeQgYXb6YF4k2aBXUe9hrEdlWiPVZzdjDjE3RpV1FyTPP66a_P9_pFmxdljN5%22%7D&errorlinks=1&rct=CpgBAXH1ezlmY_5rTuCQoDbjKDlnEDkNicgWGCUfEj2dcLB7Tbs8VZsdQy-qzEkKrLsUymoLPluCEnDkPJvPFZRKND5tRy06kv1_IAGB1jdRGSnUhY8D45McPaqI-5esRchaIriX5vfZqCog-AKG-__-MZ5zM_MLLJRD_AITYFlPzWVoopb3Tc4hqYUUPmTcK9SvlMoR15ptYa4%3D' },
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