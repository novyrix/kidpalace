import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronRight,
  ChevronLeft,
  Home,
  Info,
  GraduationCap,
  Baby,
  BookOpen,
  ClipboardCheck,
  Heart,
  Image,
  Newspaper,
  Phone,
  ArrowRight,
  School,
  Compass,
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuScreen = 'main' | 'programs' | 'explore';

interface MenuItem {
  label: string;
  path?: string;
  icon: React.ElementType;
  iconColor: string;
  hasSubmenu?: boolean;
  submenuKey?: MenuScreen;
  description?: string;
}

const mainMenuItems: MenuItem[] = [
  { label: 'Home', path: '/', icon: Home, iconColor: 'text-blue-500' },
  { label: 'About Us', path: '/about', icon: Info, iconColor: 'text-purple-500' },
  { label: 'Programs', icon: School, iconColor: 'text-green-500', hasSubmenu: true, submenuKey: 'programs' },
  { label: 'Explore', icon: Compass, iconColor: 'text-orange-500', hasSubmenu: true, submenuKey: 'explore' },
  { label: 'Contact', path: '/contact', icon: Phone, iconColor: 'text-red-500' },
];

const programsItems: MenuItem[] = [
  { label: 'Grade School', path: '/schools/grade-school', icon: GraduationCap, iconColor: 'text-blue-600', description: 'Grades 1-9 • CBC Curriculum' },
  { label: 'Kindergarten', path: '/schools/kindergarten', icon: Baby, iconColor: 'text-yellow-600', description: '6 months - 6 years' },
  { label: 'Academics', path: '/academics', icon: BookOpen, iconColor: 'text-green-600', description: 'Curriculum & Programs' },
  { label: 'Admissions', path: '/admissions', icon: ClipboardCheck, iconColor: 'text-purple-600', description: 'Apply Now' },
];

const exploreItems: MenuItem[] = [
  { label: 'School Life', path: '/school-life', icon: Heart, iconColor: 'text-red-500', description: 'Campus activities & culture' },
  { label: 'Gallery', path: '/gallery', icon: Image, iconColor: 'text-purple-500', description: 'Photos & memories' },
  { label: 'News & Events', path: '/news', icon: Newspaper, iconColor: 'text-blue-500', description: 'Latest updates' },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [currentScreen, setCurrentScreen] = useState<MenuScreen>('main');
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const handleSubmenuClick = (submenuKey: MenuScreen) => {
    setDirection('forward');
    setCurrentScreen(submenuKey);
  };

  const handleBack = () => {
    setDirection('back');
    setCurrentScreen('main');
  };

  const handleLinkClick = () => {
    setCurrentScreen('main');
    onClose();
  };

  const slideVariants = {
    enterFromRight: { x: '100%', opacity: 0 },
    enterFromLeft: { x: '-100%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exitToLeft: { x: '-100%', opacity: 0 },
    exitToRight: { x: '100%', opacity: 0 },
  };

  const getSubmenuItems = (screen: MenuScreen): MenuItem[] => {
    switch (screen) {
      case 'programs': return programsItems;
      case 'explore': return exploreItems;
      default: return [];
    }
  };

  const getSubmenuTitle = (screen: MenuScreen): string => {
    switch (screen) {
      case 'programs': return 'Programs';
      case 'explore': return 'Explore';
      default: return '';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] lg:hidden"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gray-900" />

          {/* Menu Container */}
          <div className="relative flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/Kidpalace grade school logo-transparent.png"
                  alt="Kidpalace Schools"
                  className="h-10 w-auto"
                />
                <div>
                  <span className="font-['Playfair_Display'] text-white block text-base leading-tight">
                    Kidpalace
                  </span>
                  <span className="font-['Nunito'] text-red-400 text-xs font-semibold">
                    Schools
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Content with Page Transitions */}
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                {currentScreen === 'main' ? (
                  <motion.div
                    key="main"
                    initial={direction === 'back' ? 'enterFromLeft' : 'center'}
                    animate="center"
                    exit={direction === 'forward' ? 'exitToLeft' : 'exitToRight'}
                    variants={slideVariants}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 overflow-y-auto px-5 py-6"
                  >
                    <nav>
                      <ul className="space-y-2">
                        {mainMenuItems.map((item) => (
                          <li key={item.label}>
                            {item.hasSubmenu ? (
                              <button
                                onClick={() => handleSubmenuClick(item.submenuKey!)}
                                className="flex w-full items-center justify-between rounded-xl bg-gray-800/50 p-4 text-left transition-colors hover:bg-gray-800"
                              >
                                <div className="flex items-center gap-4">
                                  <div className={`rounded-lg bg-gray-800 p-2.5 ${item.iconColor}`}>
                                    <item.icon className="h-5 w-5" />
                                  </div>
                                  <span className="text-lg font-medium text-white">{item.label}</span>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-500" />
                              </button>
                            ) : (
                              <Link
                                to={item.path!}
                                onClick={handleLinkClick}
                                className="flex items-center gap-4 rounded-xl bg-gray-800/50 p-4 transition-colors hover:bg-gray-800"
                              >
                                <div className={`rounded-lg bg-gray-800 p-2.5 ${item.iconColor}`}>
                                  <item.icon className="h-5 w-5" />
                                </div>
                                <span className="text-lg font-medium text-white">{item.label}</span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <Link
                        to="/admissions"
                        onClick={handleLinkClick}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-gray-900 transition-colors hover:bg-yellow-400"
                      >
                        Apply Now
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 rounded-xl bg-gray-800/50 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Contact Us
                      </h3>
                      <div className="mt-4 space-y-3">
                        <a href="tel:+254712247074" className="flex items-center gap-3 text-gray-300 hover:text-white">
                          <Phone className="h-4 w-4" />
                          <span>0712 247074</span>
                        </a>
                        <a href="tel:+254723230066" className="flex items-center gap-3 text-gray-300 hover:text-white">
                          <Phone className="h-4 w-4" />
                          <span>0723 230066</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentScreen}
                    initial="enterFromRight"
                    animate="center"
                    exit="exitToRight"
                    variants={slideVariants}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 overflow-y-auto px-5 py-6"
                  >
                    {/* Back Button */}
                    <button
                      onClick={handleBack}
                      className="mb-6 flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="font-medium">Back</span>
                    </button>

                    {/* Submenu Title */}
                    <h2 className="mb-6 font-['Playfair_Display'] text-2xl font-bold text-white">
                      {getSubmenuTitle(currentScreen)}
                    </h2>

                    {/* Submenu Items */}
                    <nav>
                      <ul className="space-y-3">
                        {getSubmenuItems(currentScreen).map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.path!}
                              onClick={handleLinkClick}
                              className="flex items-center gap-4 rounded-xl bg-gray-800/50 p-4 transition-colors hover:bg-gray-800"
                            >
                              <div className={`rounded-lg bg-gray-800 p-3 ${item.iconColor}`}>
                                <item.icon className="h-6 w-6" />
                              </div>
                              <div>
                                <span className="block text-lg font-medium text-white">{item.label}</span>
                                {item.description && (
                                  <span className="block text-sm text-gray-400">{item.description}</span>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-800 px-5 py-4">
              <p className="text-center text-sm text-gray-500">
                © 2025 Kidpalace Schools. Learn To Transform.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
