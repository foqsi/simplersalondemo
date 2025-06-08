import GallerySection from '@/features/gallery/Gallery';

export const metadata = {
  title: 'Gallery | Simpler Salon',
  description: 'Check Out the Simpler Salon Demo!',
  authors: [{ name: 'Simpler Salon', url: 'https://demo.simplersalon.com/gallery' }],
  robots: 'index, follow',
  generator: 'Next.js',
  applicationName: 'Simpler Salon',
  keywords: ['nail spa', 'nail art', 'manicure', 'pedicure', 'gallery'],
  openGraph: {
    title: 'Gallery | Simpler Salon',
    description: 'View the Simpler Salon Demo Gallery.',
    url: 'https://demo.simplersalon.com/gallery',
    siteName: 'Simpler Salon',
    type: 'website',
    images: [
      {
        url: 'https://demo.simplersalon.com/gallery',
        width: 1200,
        height: 630,
        alt: 'Simpler Salon Gallery Demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Simpler Salon',
    description: 'Check Out the Simpler Salon Demo!',
    images: ['https://demo.simplersalon.com/gallery'],
  },
};


export default function GalleryPage() {
  return (
    <main className="min-h-screen px-4">
      <GallerySection />
    </main>
  );
}
