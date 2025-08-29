// app/services/page.tsx
'use client';

import Header, { notoSans, lexendExa, roboto } from '@/components/HeaderEst';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';



export default function ServicesPage() {

  // Optional: same smooth scrolling click handler (keeps behaviour consistent if user clicks a #hash on this page)
  useEffect(() => {
    const scrollToHash = (hash: string | null) => {
      if (!hash) return;
      const id = hash.startsWith('#') ? hash.slice(1) : hash;
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        // tiny delay helps if layout/images are still settling
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    };

    // on first load (if URL already has a hash)
    if (typeof window !== 'undefined' && window.location.hash) {
      scrollToHash(window.location.hash);
    }

    // listen for hash changes (back/forward or router pushes)
    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className={`flex min-h-screen flex-col items-center overflow-x-hidden bg-[#E6E6E9] text-[#183058] ${notoSans.className}`}>
      {/* Header */}
      <Header />

      {/* Services content */}
      <main className="w-full px-6 sm:px-10 flex-1 flex flex-col items-center">
        <div className="w-full max-w-[900px]">
          {/* <h1 className={`${lexendExa.className} text-3xl md:text-4xl font-extrabold mb-6 text-[#183058]`}>Услуги</h1> */}

          <p className="mb-6 text-base sm:text-lg">
            ArtTeam OÜ предлагает широкий выбор услуг, связаных с металлом, сваркой, а также со сборкой и установкой любого вида труб и вентиляции.
            В нашей работе нас отличает профессионализм и высокая квалификация наших работников. День ото дня мы учимся чему-то новому в нашей работе,
            находим новые возможности для лучших результатов. Каждый новый день для нас это возможность развития навыков и новых достижений.
          </p>

          <h2 className="text-xl font-semibold mb-3">Наша команда профессионалов специализируется в следующих областях:</h2>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Установка легкой и тяжелой вентиляции</li>
            <li>Монтаж и демонтаж металлических конструкций</li>
            <li>Установка перил, лестниц, поручней, а так же их производство</li>
            <li>Установка труб: железных, медных, пластмассовых (Blüchir, Aifit, Geberit mapress)</li>
            <li>Подключение кондиционеров</li>
            <li>Сварка металлоконструкций труб</li>
          </ul>

          <p className="text-sm text-gray-600">Пока что услуги со старого сайта, но эту страничку нужно будет переделать.</p>
        </div>
      </main>
    </div>
  );
}
