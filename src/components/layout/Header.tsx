import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  ChevronDown,
  GraduationCap,
  Baby,
  BookOpen,
  ClipboardCheck,
  Calendar,
  Users,
  Phone,
  ArrowRight,
  Sparkles,
  Heart,
  Image,
  Newspaper,
  UserCircle,
  Trophy,
  Music,
  Palette,
  MapPin,
  Clock,
  Mail
} from 'lucide-react';
import MobileMenu from './MobileMenu';

// Import images
import gradeSchoolImg from '../../assets/images/grade-school/grade-school-1.jpg';
import kindergartenImg from '../../assets/images/kindergarten/kindergarten-1.jpg';

// Portal links for Staff, Students, Parents
const portalLinks = [
  { label: 'Staff Portal', href: '#', icon: UserCircle, comingSoon: true },
  { label: 'Student Portal', href: '#', icon: GraduationCap, comingSoon: true },
  { label: 'Parent Portal', href: '#', icon: Users, comingSoon: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const location = useLocation();
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const portalTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
    setIsPortalOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleMegaMenuEnter = (menuType: string) => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setActiveMegaMenu(menuType);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const handlePortalEnter = () => {
    if (portalTimeout.current) clearTimeout(portalTimeout.current);
    setIsPortalOpen(true);
  };

  const handlePortalLeave = () => {
    portalTimeout.current = setTimeout(() => {
      setIsPortalOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Top Bar - Fixed (hidden on mobile) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white hidden md:block">
        <div className="container-custom">
          <div className="flex h-10 items-center justify-between text-sm">
            {/* Left side - Contact info */}
            <div className="flex items-center gap-4">
              <a href="tel:+254712247074" className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5" />
                <span>0712 247074</span>
              </a>
              <a href="mailto:info@kidpalaceschools.ac.ke" className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-white">
                <Mail className="h-3.5 w-3.5" />
                <span>info@kidpalaceschools.ac.ke</span>
              </a>
              <span className="flex items-center gap-1.5 text-gray-300">
                <MapPin className="h-3.5 w-3.5" />
                <span>Ongata Rongai, Kenya</span>
              </span>
            </div>

            {/* Right side - Portal Dropdown */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-300">
                <Clock className="h-3.5 w-3.5" />
                <span>Mon-Fri: 7:00 AM - 5:00 PM</span>
              </div>
              
              {/* Portal Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handlePortalEnter}
                onMouseLeave={handlePortalLeave}
              >
                <button
                  className="flex items-center gap-1.5 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  onClick={() => setIsPortalOpen(!isPortalOpen)}
                >
                  <UserCircle className="h-4 w-4" />
                  <span>Portals</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isPortalOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isPortalOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full z-[60] mt-2 w-56 overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200"
                      onMouseEnter={handlePortalEnter}
                      onMouseLeave={handlePortalLeave}
                    >
                      {portalLinks.map((portal) => (
                        <div
                          key={portal.label}
                          className="flex items-center justify-between gap-3 px-4 py-3 text-gray-400 cursor-not-allowed"
                        >
                          <div className="flex items-center gap-3">
                            <portal.icon className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">{portal.label}</span>
                          </div>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                            Coming Soon
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-md'
            : 'bg-white shadow-sm'
        } top-0 md:top-10`}
      >
      <div className="container-custom">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 md:gap-3 text-xl font-bold"
            aria-label="Kidpalace Schools Home"
          >
            <img 
              src="/logos/Kidpalace grade school logo-transparent.png" 
              alt="Kidpalace Schools" 
              className="h-10 md:h-14 w-auto"
            />
            <div className="hidden xs:block sm:block">
              <span className="font-['Playfair_Display'] text-gray-900 block text-sm md:text-lg leading-tight">
                Kidpalace
              </span>
              <span className="font-['Nunito'] text-red-600 text-xs md:text-sm font-semibold tracking-wide">
                Schools
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* About */}
              <li>
                <Link
                  to="/about"
                  className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                    isActive('/about')
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  About
                </Link>
              </li>

              {/* Programs Mega Menu (Schools + Academics + Admissions) */}
              <li
                className="relative"
                onMouseEnter={() => handleMegaMenuEnter('programs')}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 font-medium transition-colors ${
                    isActive('/schools') || isActive('/academics') || isActive('/admissions') || activeMegaMenu === 'programs'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  Programs
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === 'programs' ? 'rotate-180' : ''}`} />
                </button>

                {/* Programs Mega Menu */}
                <AnimatePresence>
                  {activeMegaMenu === 'programs' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full z-50 w-[800px] -translate-x-1/2 pt-4"
                      onMouseEnter={() => handleMegaMenuEnter('programs')}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
                        <div className="grid grid-cols-12">
                          {/* Schools Column */}
                          <div className="col-span-5 border-r border-gray-100 p-6">
                            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                              <Sparkles className="h-4 w-4" />
                              Our Schools
                            </h3>

                            {/* Grade School Card */}
                            <Link
                              to="/schools/grade-school"
                              className="group mb-3 flex gap-4 rounded-xl p-3 transition-colors hover:bg-blue-50"
                            >
                              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                                <img src={gradeSchoolImg} alt="Grade School" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <GraduationCap className="h-4 w-4 text-blue-600" />
                                  <span className="font-semibold text-gray-900">Grade School</span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Grades 1-9</p>
                                <p className="mt-1 text-xs text-gray-400">CBC Curriculum • Holistic Development</p>
                              </div>
                            </Link>

                            {/* Kindergarten Card */}
                            <Link
                              to="/schools/kindergarten"
                              className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-yellow-50"
                            >
                              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                                <img src={kindergartenImg} alt="Kindergarten" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <Baby className="h-4 w-4 text-yellow-600" />
                                  <span className="font-semibold text-gray-900">Kindergarten</span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">6 months - 6 years</p>
                                <p className="mt-1 text-xs text-gray-400">Play-based Learning • Safe Environment</p>
                              </div>
                            </Link>
                          </div>

                          {/* Academics Column */}
                          <div className="col-span-3 border-r border-gray-100 p-6">
                            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                              <BookOpen className="h-4 w-4" />
                              Academics
                            </h3>
                            <div className="space-y-1">
                              <Link
                                to="/academics"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                              >
                                <BookOpen className="h-5 w-5 text-blue-500" />
                                <div>
                                  <span className="block text-sm font-medium">Curriculum</span>
                                  <span className="block text-xs text-gray-400">CBC Overview</span>
                                </div>
                              </Link>
                              <Link
                                to="/academics#programs"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                              >
                                <Users className="h-5 w-5 text-green-500" />
                                <div>
                                  <span className="block text-sm font-medium">Programs</span>
                                  <span className="block text-xs text-gray-400">Activities & Clubs</span>
                                </div>
                              </Link>
                              <Link
                                to="/academics#calendar"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                              >
                                <Calendar className="h-5 w-5 text-purple-500" />
                                <div>
                                  <span className="block text-sm font-medium">Calendar</span>
                                  <span className="block text-xs text-gray-400">Academic Year</span>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Admissions Column */}
                          <div className="col-span-4 bg-gray-50 p-6">
                            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                              <ClipboardCheck className="h-4 w-4" />
                              Admissions
                            </h3>
                            <div className="space-y-1">
                              <Link
                                to="/admissions"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-white hover:text-gray-900"
                              >
                                <ClipboardCheck className="h-5 w-5 text-blue-500" />
                                <div>
                                  <span className="block text-sm font-medium">Apply Now</span>
                                  <span className="block text-xs text-gray-400">Start your application</span>
                                </div>
                              </Link>
                              <Link
                                to="/admissions#process"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-white hover:text-gray-900"
                              >
                                <Calendar className="h-5 w-5 text-green-500" />
                                <div>
                                  <span className="block text-sm font-medium">Process</span>
                                  <span className="block text-xs text-gray-400">Steps to enroll</span>
                                </div>
                              </Link>
                              <Link
                                to="/contact"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-white hover:text-gray-900"
                              >
                                <Phone className="h-5 w-5 text-yellow-500" />
                                <div>
                                  <span className="block text-sm font-medium">Schedule Visit</span>
                                  <span className="block text-xs text-gray-400">Tour our campus</span>
                                </div>
                              </Link>
                            </div>

                            {/* CTA Button */}
                            <Link
                              to="/admissions"
                              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                            >
                              Start Application
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Explore Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => handleMegaMenuEnter('explore')}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 font-medium transition-colors ${
                    activeMegaMenu === 'explore' || isActive('/school-life') || isActive('/gallery') || isActive('/news')
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  Explore
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === 'explore' ? 'rotate-180' : ''}`} />
                </button>

                {/* Explore Mega Menu */}
                <AnimatePresence>
                  {activeMegaMenu === 'explore' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full z-50 w-[600px] pt-4"
                      onMouseEnter={() => handleMegaMenuEnter('explore')}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
                        <div className="grid grid-cols-2">
                          {/* School Life Column */}
                          <div className="p-6 border-r border-gray-100">
                            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                              <Heart className="h-4 w-4" />
                              School Life
                            </h3>
                            <div className="space-y-1">
                              <Link
                                to="/school-life"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                              >
                                <Heart className="h-5 w-5 text-red-500" />
                                <div>
                                  <span className="block text-sm font-medium">Campus Life</span>
                                  <span className="block text-xs text-gray-400">Daily activities & culture</span>
                                </div>
                              </Link>
                              <Link
                                to="/school-life#sports"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                              >
                                <Trophy className="h-5 w-5 text-yellow-500" />
                                <div>
                                  <span className="block text-sm font-medium">Sports & Athletics</span>
                                  <span className="block text-xs text-gray-400">Games & competitions</span>
                                </div>
                              </Link>
                              <Link
                                to="/school-life#clubs"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                              >
                                <Music className="h-5 w-5 text-purple-500" />
                                <div>
                                  <span className="block text-sm font-medium">Clubs & Activities</span>
                                  <span className="block text-xs text-gray-400">Music, drama & more</span>
                                </div>
                              </Link>
                              <Link
                                to="/school-life#arts"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                              >
                                <Palette className="h-5 w-5 text-pink-500" />
                                <div>
                                  <span className="block text-sm font-medium">Arts & Creativity</span>
                                  <span className="block text-xs text-gray-400">Visual arts & crafts</span>
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Media & Updates Column */}
                          <div className="p-6 bg-gray-50">
                            <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                              <Newspaper className="h-4 w-4" />
                              Media & Updates
                            </h3>
                            <div className="space-y-1">
                              <Link
                                to="/gallery"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-white hover:text-gray-900"
                              >
                                <Image className="h-5 w-5 text-blue-500" />
                                <div>
                                  <span className="block text-sm font-medium">Photo Gallery</span>
                                  <span className="block text-xs text-gray-400">Memories & moments</span>
                                </div>
                              </Link>
                              <Link
                                to="/news"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-white hover:text-gray-900"
                              >
                                <Newspaper className="h-5 w-5 text-green-500" />
                                <div>
                                  <span className="block text-sm font-medium">News & Events</span>
                                  <span className="block text-xs text-gray-400">Latest happenings</span>
                                </div>
                              </Link>
                              <Link
                                to="/news#calendar"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-700 transition-colors hover:bg-white hover:text-gray-900"
                              >
                                <Calendar className="h-5 w-5 text-orange-500" />
                                <div>
                                  <span className="block text-sm font-medium">Events Calendar</span>
                                  <span className="block text-xs text-gray-400">Upcoming events</span>
                                </div>
                              </Link>
                            </div>

                            {/* Quick Action */}
                            <div className="mt-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
                              <h4 className="font-semibold">Virtual Tour</h4>
                              <p className="mt-1 text-sm text-white/80">
                                Explore our campus online
                              </p>
                              <Link
                                to="/contact"
                                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-yellow-300 transition-colors hover:text-yellow-200"
                              >
                                Schedule a Visit
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                    isActive('/contact')
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  Contact
                </Link>
              </li>

              {/* CTA Button */}
              <li className="ml-2">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white transition-colors hover:bg-gray-800"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>

    {/* Full Screen Mobile Menu */}
    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
