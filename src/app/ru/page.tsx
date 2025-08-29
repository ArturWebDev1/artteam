'use client';

import Header, { notoSans, lexendExa, roboto } from '@/components/Header';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Assume these are the images you have in your src/images folder
import mainImage from '@/images/main.jpg';
import aboutUsPhoto1 from '@/images/about_us_photo1.jpg';
import aboutUsPhoto2 from '@/images/about_us_photo2.jpg';
import contactUsPhoto1 from '@/images/contact_us_photo1.jpg';
import contactUsPhoto1Shadow from '@/images/contact_us_photo1_shadow.png';

export default function Home() {


  // useEffect hook to handle smooth scrolling to sections
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
    <div
      className={`flex min-h-screen flex-col items-center overflow-x-hidden bg-[#E6E6E9] text-[#183058] ${notoSans.className}`}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center w-full px-4">
        {/* Main Photo - now with a max-width and responsive height on small screens */}
        <div className="artteam-hero-image-container">
          <Image
            src={mainImage}
            alt="Main glass product photo"
            fill
            className="rounded-[16px] object-cover"
          />
          {/* Gallery Button - now with Roboto font and default letter spacing */}
          <a
            href="/ru/gallery"
            className={`${roboto.className} absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2
                      items-center justify-center rounded-[4px] border-[1px] md:border-[2px] border-white
                      text-center font-black text-[16px] tracking-[0.02em] text-white hover:scale-110 transition-transform`}
            style={{
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              fontSize: 'clamp(14px, calc(0.7vw + 0.7vh), 20px)',
              padding: '0.35em 0.8em'
            }}
          >
            ГАЛЕР<span className='tracking-[0.08em]'>ЕЯ</span>
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="pt-[4vh] md:pt-[8vh] w-full px-4">
        <div className="flex flex-col gap-[4vh] md:gap-[8vh] md:justify-center max-w-[1200px] mx-auto">

          {/* --- First Row: Text on left, Photo on right --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vh] md:gap-[8vh]">
            {/* Text blocks for the first row */}
            <div className="flex flex-col gap-[4vh] md:gap-[8vh] md:justify-center">
              {/* "О нас" and "Качество" text blocks */}
              <div className="flex flex-col">
                <h2 style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }} className="font-bold text-[#183058]">О нас</h2>
                <p style={{ fontSize: 'clamp(12px, 2.0vw, 14px)' }} className="mt-[12px]">
                  Artteam — команда высококвалифицированных специалистов в сфере услуг, связанных с установкой порталов, дверей, остекления балконов. Мы учитываем особые пожелания наших клиентов и разрабатываем оптимальное решение для каждого дома. Наши специалисты всегда готовы помочь вам советом и поддержкой!
                </p>
              </div>
              <div className="flex flex-col">
                <h2 style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }} className="text-3xl sm:text-4xl font-bold text-[#183058]">Качество</h2>
                <p style={{ fontSize: 'clamp(12px, 2.0vw, 14px)' }}  className="mt-[12px] text-base sm:text-lg">
                  Раздвижные двери просты и удобны в эксплуатации. А благодаря низкому порогу, порталы подходят даже для домов, где живут семьи с детьми.
                </p>
              </div>
            </div>
            {/* Photo for the first row */}
            <div className="artteam-about-us-image-container">
              {/* About us photo 1 - now responsive */}
              <div className="relative w-full pb-[100%] rounded-[16px] overflow-hidden mx-auto">
                <Image
                  src={aboutUsPhoto1}
                  alt="About us photo 1"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* --- Second Row: Photo on left, Text on right --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vh] md:gap-[8vh]">
            {/* Fourth column for desktop, reordered for mobile */}
            {/* Text blocks for the second row */}
            <div className="flex flex-col gap-[4vh] md:gap-[8vh] md:justify-center md:order-2">
              {/* "Сотрудничество" and "Простота" text blocks */}
              <div className="flex flex-col">
                <h2 style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }} className="text-3xl sm:text-4xl font-bold text-[#183058]">Сотрудничество</h2>
                <p style={{ fontSize: 'clamp(12px, 2.0vw, 14px)' }}  className="mt-[12px] text-base sm:text-lg">
                  Мы постоянно сотрудничаем как с профессионалами в своей области, так и с конечными клиентами. Мы понимаем, что довольный клиент — наша главная визитная карточка, будь то строительная компания, агентство недвижимости или частный дом.
                </p>
              </div>
              <div className="flex flex-col">
                <h2 style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }} className="text-3xl sm:text-4xl font-bold text-[#183058]">Простота</h2>
                <p style={{ fontSize: 'clamp(12px, 2.0vw, 14px)' }}  className="mt-[12px] text-base sm:text-lg">
                  Мы знаем, насколько сложным может быть процесс покупки и установки окон и дверей. За десятилетия мы сделали наши услуги максимально удобными для клиентов. Поэтому мы обещаем помогать вам на протяжении всего процесса: от планирования до послепродажного обслуживания.
                </p>
              </div>
            </div>
            {/* About us photo 2 - now responsive */}
            <div className="artteam-about-us-image-container md:order-1">
              <div className="relative w-full pb-[100%] rounded-[16px] overflow-hidden">
                <Image
                  src={aboutUsPhoto2}
                  alt="About us photo 2"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="flex flex-col items-center w-full px-4 mt-[8vh] mb-[8vh]">
        {/* Contact us photo - now responsive */}
        <div className="artteam-hero-image-container">
          <Image
            src={contactUsPhoto1Shadow}
            alt="Contact us photo"
            className="rounded-[16px] object-cover"
          />
          {/* Contact Info */}
          <div className="absolute left-[80px] top-1/2 -translate-y-1/2">
            <p className="text-xl text-white">+372 56 099 666</p>
            <p className="mt-[8px] text-xl text-white">info@artteam.ee</p>
          </div>
        </div>
      </section>
    </div>
  );
}
