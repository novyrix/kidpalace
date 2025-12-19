import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import { contactInfo } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'School Life', path: '/school-life' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const schoolLinks = [
    { label: 'Grade School (1-9)', path: '/schools/grade-school' },
    { label: 'Kindergarten', path: '/schools/kindergarten' },
    { label: 'News & Events', path: '/news' },
  ];

  return (
    <footer className="bg-gray-900">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white md:text-3xl">
                Ready to Join <span className="text-yellow-400">Kid Palace</span>?
              </h3>
              <p className="mt-2 text-gray-400">
                Give your child the foundation for a successful future.
              </p>
            </div>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-gray-900 transition-all hover:bg-yellow-400 hover:gap-3"
            >
              Start Application
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="mb-6 flex items-center gap-3"
            >
              <img 
                src="/logos/kid palace logo-01transparent.png" 
                alt="Kid Palace Schools" 
                className="h-14 w-auto"
              />
              <div>
                <span className="font-['Playfair_Display'] text-white block text-lg leading-tight">
                  Kid Palace
                </span>
                <span className="font-['Nunito'] text-red-400 text-sm font-semibold">
                  Schools
                </span>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed text-gray-400">
              The preferred place for knowledge transformation where every child is guaranteed success through quality education.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-all hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-all hover:bg-sky-500 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-all hover:bg-pink-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-['Poppins'] text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-2 text-gray-400 transition-all hover:gap-3 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Schools */}
          <div>
            <h3 className="mb-6 font-['Poppins'] text-lg font-semibold text-white">
              Our Schools
            </h3>
            <ul className="space-y-3">
              {schoolLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-2 text-gray-400 transition-all hover:gap-3 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-['Poppins'] text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="rounded-lg bg-gray-800 p-2">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-lg bg-gray-800 p-2">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="flex flex-col gap-1">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-lg bg-gray-800 p-2">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-lg bg-gray-800 p-2">
                  <Clock className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="text-gray-400">{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-gray-500">
            © {currentYear} Kid Palace Schools. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-500 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
