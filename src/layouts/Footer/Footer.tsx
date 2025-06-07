import { COMPANY_NAME, COMPANY_QUOTE, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding & Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{COMPANY_NAME}</h2>
          <p className="text-gray-400 mb-4">&apos;{COMPANY_QUOTE}&apos;</p>
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-red-400" />
              {COMPANY_ADDRESS}
            </p>
            <p>
              <i className="fas fa-phone-alt mr-2 text-green-400" />
              <a href="tel:5555555555" className="hover:underline">{COMPANY_PHONE}</a>
            </p>
            <p>
              <i className="fas fa-email-alt mr-2 text-green-400" />
              <a href="mailto:gmail@gmail.com" className="hover:underline">{COMPANY_EMAIL}</a>
            </p>

          </div>
          <div className="mt-6 text-sm text-gray-300">
            <h4 className="font-semibold mb-2">Business Hours</h4>
            <ul className="space-y-1">
              <li>Sunday: 12:00 PM – 6:00 PM</li>
              <li>Monday – Saturday: 10:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/appointment" className="hover:text-white">Appointments</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/admin" className="hover:text-white">Admin</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
