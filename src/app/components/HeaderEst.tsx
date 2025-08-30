'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Noto_Sans, Lexend_Exa, Roboto } from 'next/font/google';

// Fonts (exported so pages can reuse them)
export const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-noto-sans',
});

export const lexendExa = Lexend_Exa({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lexend-exa',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-roboto',
});

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
    const scrollToHash = (hash: string | null) => {
        if (!hash) return;
        const id = hash.startsWith('#') ? hash.slice(1) : hash;
        if (!id) return;
        const el = document.getElementById(id);
        if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const anchor = target.closest('a') as HTMLAnchorElement | null;
        if (!anchor) return;

        const hrefAttr = anchor.getAttribute('href');

        // 1) plain in-page anchors: "#contact"
        if (hrefAttr && hrefAttr.startsWith('#')) {
        e.preventDefault();
        // update URL without jump, then smooth scroll
        window.history.pushState(null, '', hrefAttr);
        scrollToHash(hrefAttr);
        setIsMobileMenuOpen(false);
        return;
        }

        // 2) links like "/#contact" or absolute URLs
        try {
        const url = new URL(anchor.href);
        if (url.hash && url.pathname === window.location.pathname) {
            e.preventDefault();
            // set url (pathname + hash) in address bar without causing browser autoscroll
            window.history.pushState(null, '', url.pathname + url.hash);
            scrollToHash(url.hash);
            setIsMobileMenuOpen(false);
        }
        } catch {
        // ignore invalid URLs
        }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <header className={`${notoSans.className} flex h-[90px] w-full items-center justify-center bg-[#E6E6E9] px-4 md:h-[120px]`}>
        <div className="flex h-full w-full max-w-[1200px] items-center justify-between md:grid md:grid-cols-7 md:justify-items-center">
            {/* Logo */}
            <Link href="/" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }} className={`${lexendExa.className} md:col-span-2 md:text-[48px]`}>
            ARTTEAM
            </Link>

            {/* Hamburger Menu Icon for mobile */}
            <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-2 focus:outline-none"
            aria-label="Open mobile menu"
            >
            <span className="block w-8 h-0.5 bg-[#183058]" />
            <span className="block w-8 h-0.5 bg-[#183058]" />
            <span className="block w-8 h-0.5 bg-[#183058]" />
            </button>

            {/* Navigation Links for desktop */}
            <div style={{ fontSize: 'clamp(12px, 2.0vw, 20px)' }} className="hidden md:flex md:col-span-5 md:items-center md:justify-between w-full">
            <Link href="/#contact" className="text-[#183058] hover:text-[#B2C900] hover:scale-110 transition-all">Kontakt</Link>
            <Link href="/services" className="text-[#183058] hover:text-[#B2C900] hover:scale-110 transition-all">Teenused</Link>
            <Link href="/#about-us" className="text-[#183058] hover:text-[#B2C900] hover:scale-110 transition-all">Meist</Link>
            <Link href="/gallery" className="text-[#183058] hover:text-[#B2C900] hover:scale-110 transition-all">Galerii</Link>

            {/* Language Switcher */}
            <div className="z-1 relative">
                <div className="flex items-center">
                <button onClick={toggleMenu} className="flex items-center text-[#183058] rounded focus:outline-none hover:text-[#B2C900] hover:scale-110 transition-all" aria-expanded={isMenuOpen}>
                    <span className="pr-1">EST</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-4 h-4 text-[#183058] transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" />
                    </svg>
                </button>
                </div>

                <div className={`absolute right-0 mt-2 w-24 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <Link href="/ru" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">RUS</Link>
                {/* <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">EST</Link> */}
                </div>
            </div>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-[#183058] flex flex-col items-center justify-center space-y-8 text-white text-2xl">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 text-[#FFFFFF]" aria-label="Close mobile menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B2C900]">Esileht</Link>
            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B2C900]">Kontakt</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B2C900]">Teenused</Link>
            <Link href="/#about-us" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B2C900]">Meist</Link>
            <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#B2C900]">Galerii</Link>
            <Link href="/ru" className="hover:text-[#B2C900]">RUS</Link>
            <Link href="/" className="hover:text-[#B2C900]">EST</Link>
            </div>
        )}
        </header>
    );
}
