// src/app/layout.tsx
import './globals.css';
import { Noto_Sans, Lexend_Exa, Roboto } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-noto-sans',
});

const lexendExa = Lexend_Exa({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lexend-exa',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['600'], // Assuming 'Black' corresponds to 900 weight
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${notoSans.className} ${lexendExa.className} ${roboto.className}`}>
      <body>{children}</body>
    </html>
  );
}
