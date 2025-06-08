import Map from '@/components/Map';
import FadeInDown from '@/components/animations/FadeInDown';

export const metadata = {
  title: 'Contact Us | Simpler Salon Spa',
  description: 'Get in touch with Simpler Salon Spa for questions, feedback, or directions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <FadeInDown>
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Contact Us</h1>
      </FadeInDown>
      <div>
        <Map />
      </div>
    </main>
  );
}
