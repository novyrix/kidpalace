import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Baby,
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
} from 'lucide-react';

// Import images
import gradeSchoolImg from '../../assets/images/grade-school/grade-school-1.jpg';
import kindergartenImg from '../../assets/images/kindergarten/kindergarten-1.jpg';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const schoolItems = [
  {
    title: 'Grade School',
    description: 'Comprehensive education for Grades 1-9 with CBC curriculum',
    path: '/schools/grade-school',
    icon: GraduationCap,
    image: gradeSchoolImg,
    color: 'bg-blue-500',
    features: ['CBC Curriculum', 'Modern Labs', 'Sports Programs'],
  },
  {
    title: 'Kindergarten',
    description: 'Nurturing environment for ages 6 months to 6 years',
    path: '/schools/kindergarten',
    icon: Baby,
    image: kindergartenImg,
    color: 'bg-yellow-500',
    features: ['Play-based Learning', 'Safe Environment', 'Qualified Teachers'],
  },
];

const quickLinks = [
  { label: 'Academics', path: '/academics', icon: BookOpen },
  { label: 'Admissions', path: '/admissions', icon: Users },
  { label: 'School Life', path: '/school-life', icon: Trophy },
];

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute left-0 right-0 top-full z-50 mx-auto max-w-6xl px-4"
          >
            <div className="mt-2 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
              <div className="grid lg:grid-cols-3">
                {/* Schools Section */}
                <div className="col-span-2 p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Our Schools
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {schoolItems.map((school, index) => (
                      <motion.div
                        key={school.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={school.path}
                          onClick={onClose}
                          className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-50 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
                        >
                          {/* Image */}
                          <div className="relative h-32 overflow-hidden">
                            <img
                              src={school.image}
                              alt={school.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className={`absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full ${school.color} px-3 py-1 text-sm font-medium text-white`}>
                              <school.icon className="h-4 w-4" />
                              {school.title}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex flex-1 flex-col p-4">
                            <p className="text-sm text-gray-600">
                              {school.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1">
                              {school.features.map((feature) => (
                                <span
                                  key={feature}
                                  className="rounded-full bg-white px-2 py-0.5 text-xs text-gray-600"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-gray-900 transition-transform group-hover:translate-x-1">
                              Learn More
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Links Section */}
                <div className="border-l border-gray-100 bg-gray-50 p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          onClick={onClose}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white transition-colors group-hover:bg-gray-900 group-hover:text-white">
                            <link.icon className="h-4 w-4" />
                          </div>
                          <span className="font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 rounded-xl bg-gray-900 p-4 text-white"
                  >
                    <h4 className="font-semibold">Ready to Join?</h4>
                    <p className="mt-1 text-sm text-gray-300">
                      Start the admissions process today.
                    </p>
                    <Link
                      to="/admissions"
                      onClick={onClose}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
