import type {Metadata} from 'next';
import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Bachtiar Aryansyah Putra - Portfolio',
  description: 'Photography and Videography Portfolio',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-[#FDFCFB] text-black antialiased font-sans flex flex-col min-h-screen selection:bg-black selection:text-white border-[1px] border-black m-0 h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
