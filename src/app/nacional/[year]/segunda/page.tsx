import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import ClientPDFSection from './ClientPDFSection';

const niveles = [
  { key: 'IA', title: 'Nivel IA', pdf: 'https://drive.google.com/file/d/1pbL_tfzhYc_26GNVwCbjig82mC1QNUzE/view?usp=sharing', video: 'https://www.youtube.com/embed/HEGiZeOU6RM?embed_config=%7B%22enc%22:%22AXH1ezm5tzzrljO6cnDa0o55iqOXHyger8focAmsBNsoKlNjW9bRVJ0G3dHlZKPYOVrB6szSIsaPFBK7Gwk2SSw04phHi69lKR_vOdY4zGT7GcAuuBTTbHHCh1iGp2SHC3RpGemw0tV-TBm4clzG4dJbV-Xr9sxoj3ou_gWBEw5wWuY8%22%7D&errorlinks=1&rct=CpcBAXH1ezmldgc_chwG2jNAjhPV6UvUxYLlhEaZJlgGHwOnpm9UbEUl_S_8haiWp2EM-b8ITJSvMepim3GELSG7EU9RjVmtUKO7icZZixwvqQaRULoPfXD0gYfD6UZqkG8Gj6BgfeHpazcToRvhdc6jY2bq2GIhyin_-may2fA_kgp6HgpDXNt9Kp0YkD3S_KlJOe17uAFEWw%3D%3D', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IB', title: 'Nivel IB', pdf: 'https://drive.google.com/file/d/1qOaUKYJI6Bqxa_VGz7PcYu1EBUdDH-z5/view?usp=sharing', video: 'https://www.youtube.com/embed/DX-gEB-De7s?embed_config=%7B%22enc%22:%22AXH1eznh-muomqV1dSQ3rd3c6nSq5-NLtkElSjrBdvbKyPmCMjgm_DOZXejyr_ct98C5kfi-t0fwKXnJO_lqibd5bnZ7GLlcdx2hfDx6jvSl3kXYHnViCRT4_C_aLeIb4dQtVe10H0kp1XgUm92CNjDnyA6pQx7VN0WaLuRvTpw-MFLE%22%7D&errorlinks=1&rct=CpcBAXH1ezlpiKf7CKPI74qBBnEmHyhSOR11pKZl50Yu3DVRwhnZE3siovoOiWrcOTzswwgrf5KFImcuGfGokQ0yqhZXWbt2c64V5JpWKhTA7iQjbZhmPgtbU-PmV26J34bw4VVoqURBqT8MX3L_ugs0_xOqujg1llwvW5IDAR7iYxBLKENbufdhE5-cTwfPm4a2stpv8fQdpw%3D%3D', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IC', title: 'Nivel IC', pdf: 'https://drive.google.com/file/d/1gM4c6IJfaU91Ik0aGroTZ9sxGieqIMab/view?usp=sharing', video: 'https://www.youtube.com/embed/9SyPsrpYJPI?embed_config=%7B%22enc%22:%22AXH1ezlALYtlLMc3eNYzuv44Z-UGmfZGpDntg65_Fyb0osWMN5RebNbhHYfZ6PsLAzUKaMBoxhCKXXE4keDaBQl7aBCCUsGk63v8yizBO7djMwBBKLWdymqPJBwy4B-oSyikotaRhnyhYVfEhZTTnLwabE479e8vQ0zvDJ-ts6DtXKR1%22%7D&errorlinks=1&rct=CpgBAXH1eznNY8MmkaVpTs4ntGC5EFarevh-57_62F2U1Qn5Arrka2XsU_ZvHoGIuuf5J4GVuJwF37wc4dK2LM9p03FfWClRtzvQT7sMRLn4eFaNw1ivhIjiZs-Vc3E1rmzYLOoDGggQmn9HjOpWAvanaX82kM7_-TIpIQWmNIeQznb922_VkntEPG9gfPctW_DliFFL1ckPJKY%3D', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'II', title: 'Nivel II', pdf: 'https://drive.google.com/file/d/17--pQqwcK6Woe-K53e0bd3i3Z7TyNGgG/view?usp=sharing', video: 'https://www.youtube.com/embed/fLkQnpoHQiw?embed_config=%7B%22enc%22:%22AXH1eznGQu_b_CtgJ006SHhCuP5h9_L1ny5YSj8LE5uj7pIzZEGUjE2YvjbRpLdGb4_5pRDSb_r0zNHdmcU5BB0VpGL4a6-DDLgiNxvI1AJddcT-VgY-9nV4Yr4m43baFqgeJAHgr_z0CYAQCNFDOm6ymsiZkF8vcXppaaGdPjSf1m83%22%7D&errorlinks=1&rct=CpcBAXH1ezm3jIi5EbtjWuBS2js6iz7J7-qb5Kz_3jfjqUYoQMUtQ6BUFYUqLQ7FeFUf126x33XdDsXUvX1WnQZkPAgtgmDhNWZH93E9YbfnStuMM4h0iv--ZYz0sp1ly0_sb_yx9vWtbssI-YhzHXzI_pSLQd1Pi9om4tduP9SmTzDpKlPZIzsNYwpenT7DQZxOfX50gU-0iw%3D%3D', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'III', title: 'Nivel III', pdf: 'https://drive.google.com/file/d/1NtxRoA3dwVlGtP8GSn4PQPDncWcQhAST/view?usp=sharing', video: 'https://www.youtube.com/embed/8ws2xuK3B2I?embed_config=%7B%22enc%22:%22AXH1ezkJhz3mYekoE51SXF_6YoeWFVDGBZzG7BgxdAi-tQYRVWYzmp0xsy9hlIYpjnDgzwe4uol_sVR8WdGRULIRNbegTg7eqt6wA10F6D5QJ2LWRoO6AeQZC79YouCeNWNlWDZ7pSBDt_fsWnWQZrE-7Qv3GfzE6ldKFsUM9NrslMRd%22%7D&errorlinks=1&rct=CpgBAXH1eznRUiH2K6t8v9DN2dp3cUfIPLNAx5Qo-1drLoPW45isNywrWGUSc46uxcAZrFSvEEcIEXYyJ03gRDVHsvMibB-lqNBoGGAafzmpXso5KvMCHX2LcN6EqiU1Z3bWrIYGAe0GVS9f3sT37uhH34E5iX1Uq8Ysae7xWqfN26FXdbU40WxjNJDiSSgRodMbCCez-shisjE%3D', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'IV', title: 'Nivel IV', pdf: 'https://drive.google.com/file/d/1avnfLWOb_ZLZT4Jk6Je8acrOblc-1b11/view?usp=sharing', video: 'https://www.youtube.com/embed/-xj4lJ6nlFQ?embed_config=%7B%22enc%22:%22AXH1eznjwHkxk6HmbdV5l-olIqkP_qS0gKb92OrMLU5ymJ0sSD1EasQih1RtBlwNyth6JZLazv12fiw49VChL8aaC-Qg_R93l_XfAf0Pq_-3_O296fu2yBZTGWyLsLs5OIot622DWTD1zRA0JHS7-rC4n_M6ij_iuTHZTZnYXenusRfM%22%7D&errorlinks=1&rct=CpgBAXH1ezl4RTs6H6uhYLSJKYSJ9DWX3z3OyXGhcvDRzY02z6gMeyv4c4mA_ZS-OSgClQbft3PimodxYrS_s4iHAwXaC29we0ZcNOZLBBTnHtABnHSDQNJuedSasoChFlH6Q6abUDPnAlunjTKaLUBvUdW23PWn5_Mm7_M-cM8ocq-lhpBcqEccIn5vcUAEfCPVQtJsE4fwsXA%3D', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
  { key: 'V', title: 'Nivel V', pdf: 'https://drive.google.com/file/d/17HwJIN3VkdJhdigTH_JK71zqjMxpXAMc/view?usp=sharing', video: 'https://www.youtube.com/embed/xXTTMKgKJZk?embed_config=%7B%22enc%22:%22AXH1ezkSULSs5DGT9XA7fs1fuKJvTS3SY2TQFp3wHK3RA0jaL7IBQxAl-z2cw2esiZoZujLGs5P-3OrwYQpGRRAkHMMlY5I0CrqVtWyYWV6Rofb-S3p8iVBRAhPUftH5gNYInv0iR6zDAwL1snxxyECqCUXeHFKe4P9ra-peFw7jw29g%22%7D&errorlinks=1&rct=CpcBAXH1ezl3mXsgdDQfl94DhQvdW3QX3Mak4BFtJ8cckL5PPFn0cfGq7lliSfuvNyGkIQ7J0G1VHZBIbrYlbeoE3kVj96ffPzR2Y05dkKoZhZmG2f-i5fpICQpqCK_wu5HojvNOf9I9_iV5CxdI4kGhBbr-bVRb1eH3JAcAwLkzFnAZVUBdC-smwCFlz8pyuKC67TQ5EZzRlA%3D%3D', img: 'https://ext.same-assets.com/1728315765/512160776.png' },
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