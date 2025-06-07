import { Metadata } from 'next';
import './globals.css';
import { Navbar, Footer, PromoBanner } from '@/layouts';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: {
    default: 'Simpler Salon Demo',
    template: '%s | Simpler Salon Demo',
  },
  description: 'DEMO - Own your salon website with a one-time payment—no subscriptions, no hassle. Simpler Salon Demo gives you full control and easy updates.',
  keywords: [
    'salon websites',
    'small business websites',
    'one-time payment websites',
    'website builder',
    'Simpler Salon Demo',
    'affordable websites',
    'custom salon site',
    'no subscription website',
    'hair salon website',
    'nail salon website',
  ],
  openGraph: {
    title: 'Simpler Salon Demo',
    description: 'Own your salon website with a one-time payment and full control. Built for simplicity and designed for beauty.',
    url: 'https://demo.simplersalon.com',
    siteName: 'Simpler Salon Demo',
    images: [
      {
        url: 'https://simplersalon.com/templogo.png',
        width: 1200,
        height: 630,
        alt: 'Simpler Salon Demo website preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simpler Salon Demo',
    description: 'A beautiful salon website you own—no subscriptions required.',
    images: ['https://simplersalon.com/templogo.png'],
  },
  metadataBase: new URL('https://simplersalon.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        <div className="pt-24">
          <PromoBanner />
        </div>

        <Toaster position="bottom-center" />

        {children}
        <Footer />
      </body>
    </html>
  );
}
