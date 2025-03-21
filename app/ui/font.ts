import { Lato, Montserrat }  from 'next/font/google';

export const font = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  fallback: ['Inter', 'sans-serif'],
});

export const lusitana = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  fallback: ['Inter', 'sans-serif'],
});
