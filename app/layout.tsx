// app/layout.js
import './styles/globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio créé avec Next.js',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className='light bg-background text-text-high flex flex-col mx-auto'>
        {children}
      </body>
    </html>
  );
}
