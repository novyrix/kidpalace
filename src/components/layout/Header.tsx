import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
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
  Newspaper
} from 'lucide-react';

// Import images
import gradeSchoolImg from '../../assets/images/grade-school/grade-school-1.jpg';
import kindergartenImg from '../../assets/images/kindergarten/kindergarten-1.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    setMobileDropdown(null);
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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-xl font-bold"
            aria-label="Kid Palace Schools Home"
          >
            <div className="rounded-xl bg-gray-900 p-2">
              <GraduationCap className="h-6 w-6 text-yellow-400" />
            </div>
            <span className="font-['Poppins'] text-gray-900">
              Kid Palace <span className="text-red-600">Schools</span>
            </span>
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

                {/* Explore Dropdown */}
                <AnimatePresence>
                  {activeMegaMenu === 'explore' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full z-50 w-64 pt-4"
                      onMouseEnter={() => handleMegaMenuEnter('explore')}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="overflow-hidden rounded-xl bg-white p-2 shadow-2xl ring-1 ring-gray-200">
                        <Link
                          to="/school-life"
                          className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-50"
                        >
                          <Heart className="h-5 w-5 text-red-500" />
                          <div>
                            <span className="block font-medium text-gray-900">School Life</span>
                            <span className="block text-xs text-gray-500">Activities & culture</span>
                          </div>
                        </Link>
                        <Link
                          to="/gallery"
                          className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-50"
                        >
                          <Image className="h-5 w-5 text-purple-500" />
                          <div>
                            <span className="block font-medium text-gray-900">Gallery</span>
                            <span className="block text-xs text-gray-500">Photos & memories</span>
                          </div>
                        </Link>
                        <Link
                          to="/news"
                          className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-gray-50"
                        >
                          <Newspaper className="h-5 w-5 text-blue-500" />
                          <div>
                            <span className="block font-medium text-gray-900">News & Events</span>
                            <span className="block text-xs text-gray-500">Latest updates</span>
                          </div>
                        </Link>
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
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t bg-white lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-4">
              <ul className="space-y-1">
                <li>
                  <Link to="/" className={`block rounded-lg px-4 py-3 font-medium ${location.pathname === '/' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={`block rounded-lg px-4 py-3 font-medium ${isActive('/about') ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                    About
                  </Link>
                </li>

                {/* Schools Dropdown */}
                <li>
                  <button
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium ${mobileDropdown === 'schools' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    onClick={() => setMobileDropdown(mobileDropdown === 'schools' ? null : 'schools')}
                  >
                    Schools
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === 'schools' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdown === 'schools' && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1 overflow-hidden border-l-2 border-gray-200 pl-4 pt-1"
                      >
                        <li>
                          <Link to="/schools/grade-school" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:text-gray-900">
                            <GraduationCap className="h-4 w-4 text-blue-600" />
                            Grade School
                          </Link>
                        </li>
                        <li>
                          <Link to="/schools/kindergarten" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:text-gray-900">
                            <Baby className="h-4 w-4 text-yellow-600" />
                            Kindergarten
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link to="/academics" className={`block rounded-lg px-4 py-3 font-medium ${isActive('/academics') ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                    Academics
                  </Link>
                </li>
                <li>
                  <Link to="/admissions" className={`block rounded-lg px-4 py-3 font-medium ${isActive('/admissions') ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                    Admissions
                  </Link>
                </li>

                {/* Explore Dropdown */}
                <li>
                  <button
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium ${mobileDropdown === 'explore' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    onClick={() => setMobileDropdown(mobileDropdown === 'explore' ? null : 'explore')}
                  >
                    Explore
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === 'explore' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdown === 'explore' && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1 overflow-hidden border-l-2 border-gray-200 pl-4 pt-1"
                      >
                        <li>
                          <Link to="/school-life" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:text-gray-900">
                            <Heart className="h-4 w-4 text-red-500" />
                            School Life
                          </Link>
                        </li>
                        <li>
                          <Link to="/gallery" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:text-gray-900">
                            <Image className="h-4 w-4 text-purple-500" />
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link to="/news" className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:text-gray-900">
                            <Newspaper className="h-4 w-4 text-blue-500" />
                            News & Events
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link to="/contact" className={`block rounded-lg px-4 py-3 font-medium ${isActive('/contact') ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                    Contact
                  </Link>
                </li>

                {/* Mobile CTA */}
                <li className="pt-2">
                  <Link
                    to="/admissions"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
