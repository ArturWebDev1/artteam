'use client';

import Header, { notoSans, lexendExa, roboto } from '@/components/Header';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import photo1 from '@/images/gallery/gallery1.jpg';
import photo2 from '@/images/gallery/gallery2.jpg';
import photo3 from '@/images/gallery/gallery3.jpg';
import photo4 from '@/images/gallery/gallery4.jpg';
import photo5 from '@/images/gallery/gallery5.jpg';
import photo6 from '@/images/gallery/gallery6.jpg';
import photo7 from '@/images/gallery/gallery7.jpg';
import photo8 from '@/images/gallery/gallery8.jpg';
import photo9 from '@/images/gallery/gallery9.jpg';


const placeholderImages = [
  { id: '1', url: photo1 },
  { id: '2', url: photo2 },
  { id: '3', url: photo3 },
  { id: '4', url: photo4 },
  { id: '5', url: photo5 },
  { id: '6', url: photo6 },
  { id: '7', url: photo7 },
  { id: '8', url: photo8 },
  { id: '9', url: photo9 },
];

export default function GalleryPage() {
  const [images] = useState(placeholderImages);

  // Smooth-scrolling handler
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
      {/* Header (copied from your page.tsx) */}
      <Header />

      {/* Gallery content */}
      <main className="w-full px-6 sm:px-10 flex-1 flex flex-col items-center mb-[10vh]">
        <div className="w-full max-w-5xl">
          {/* <h1 className={`${lexendExa.className} text-3xl md:text-4xl font-extrabold mb-6 text-[#183058]`}>Галерея</h1> */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative w-full pb-[100%] rounded-xl overflow-hidden shadow-md group">
                {typeof image.url === 'string' ? (
                  // support string URLs as fallback
                  // plain <img> used for remote strings
                  // (local imports are StaticImageData objects handled by next/image)
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image.url}
                    alt={`Gallery image ${image.id}`}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={image.url}
                    alt={`Gallery image ${image.id}`}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
