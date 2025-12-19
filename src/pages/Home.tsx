import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Users,
  BookOpen,
  Trophy,
  Heart,
  Shield,
  Lightbulb,
  GraduationCap,
  Calendar,
  ArrowRight,
  Play,
} from 'lucide-react';
import { Button, HeroCarousel } from '../components/ui';
import { whyChooseUs } from '../constants';

// Import images
import heroImg1 from '../assets/images/education/education-1.jpg';
import heroImg2 from '../assets/images/grade-school/grade-school-1.jpg';
import heroImg3 from '../assets/images/kindergarten/kindergarten-1.jpg';
import gradeSchoolImg from '../assets/images/grade-school/grade-school-2.jpg';
import kindergartenImg from '../assets/images/kindergarten/kindergarten-2.jpg';
import aboutImg from '../assets/images/education/education-2.jpg';

const heroSlides = [
  {
    image: heroImg1,
    title: [
      { text: 'Welcome to ' },
      { text: 'Kidpalace', highlight: true },
      { text: ' Schools' },
    ],
    subtitle:
      'Nurturing young minds and building strong foundations for a bright future.',
  },
  {
    image: heroImg2,
    title: [
      { text: 'Excellence in ' },
      { text: 'Education', highlight: true },
    ],
    subtitle:
      'Providing quality education with a balance of academics and character development.',
  },
  {
    image: heroImg3,
    title: [
      { text: 'Where ' },
      { text: 'Learning', highlight: true },
      { text: ' is Fun' },
    ],
    subtitle:
      'A safe, caring environment where every child can thrive and discover their potential.',
  },
];

const whyChooseIcons = [Users, BookOpen, Trophy, Heart, Shield, Lightbulb];

const latestNews = [
  {
    id: 1,
    title: 'Term 3 Academic Calendar Released',
    excerpt:
      'View the complete schedule for the upcoming term including important dates and events.',
    date: 'December 10, 2025',
    image: heroImg1,
  },
  {
    id: 2,
    title: 'Annual Sports Day Announced',
    excerpt:
      'Join us for our annual sports day celebration featuring various athletic competitions.',
    date: 'December 5, 2025',
    image: heroImg2,
  },
  {
    id: 3,
    title: 'Parent-Teacher Conference',
    excerpt:
      'Important meeting to discuss student progress and upcoming school initiatives.',
    date: 'November 28, 2025',
    image: heroImg3,
  },
];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <div>
      {/* Hero Section - Full viewport */}
      <HeroCarousel slides={heroSlides}>
        <div className="flex flex-wrap gap-4">
          <Button as="link" to="/admissions" variant="white" size="lg">
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button as="link" to="/about" variant="outline-light" size="lg">
            <Play className="h-4 w-4" />
            Learn More
          </Button>
        </div>
      </HeroCarousel>

      {/* About Snapshot Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid gap-16 lg:grid-cols-2 lg:items-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative z-10 overflow-hidden rounded-3xl">
                <img
                  src={aboutImg}
                  alt="Students learning at Kidpalace Schools"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-yellow-400/30 to-red-500/30" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20 rounded-xl md:rounded-2xl bg-gray-900 p-3 md:p-6 text-white shadow-2xl"
              >
                <p className="text-3xl md:text-5xl font-bold text-yellow-400">20+</p>
                <p className="mt-1 text-xs md:text-sm text-gray-300">Years of Excellence</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <span className="inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-semibold text-yellow-700">
                About Us
              </span>
              <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Building Bright Futures,{' '}
                <span className="text-yellow-500">One Child</span> at a Time
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                With carefully thought out and implemented Kidpalace specifics,
                the school carves a niche for itself as the preferred place for
                knowledge transformation where every child is guaranteed success.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our mission is to provide a balanced learning program that
                addresses both the child's interests and the parents'
                expectations, ensuring academic excellence and holistic
                development.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button as="link" to="/about" className="bg-gray-900 hover:bg-gray-800">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Schools Overview Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Our Schools
            </span>
            <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Comprehensive Education for{' '}
              <span className="text-blue-600">Every Age</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Kidpalace offers quality education from early childhood through grade school
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mt-12 grid gap-8 md:grid-cols-2"
          >
            {/* Grade School Card */}
            <motion.div variants={scaleIn}>
              <Link
                to="/schools/grade-school"
                className="group block h-full overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={gradeSchoolImg}
                    alt="Kidpalace Grade School students"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                    <GraduationCap className="h-4 w-4" />
                    Grades 1-9
                  </div>
                  <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 md:text-3xl">
                    Kidpalace Grade School
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Comprehensive primary and junior secondary education with
                    focus on CBC curriculum and holistic development.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3">
                    Explore Grade School
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Kindergarten Card */}
            <motion.div variants={scaleIn}>
              <Link
                to="/schools/kindergarten"
                className="group block h-full overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={kindergartenImg}
                    alt="Kidpalace Kindergarten children"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-semibold text-yellow-700">
                    <Heart className="h-4 w-4" />
                    6 months - 6 years
                  </div>
                  <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900 md:text-3xl">
                    Kidpalace Kindergarten
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Nurturing early childhood development in a safe, homely
                    environment with play-based learning.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-600 transition-all group-hover:gap-3">
                    Explore Kindergarten
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
              Why Kidpalace
            </span>
            <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              What Makes Us <span className="text-green-600">Different</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover what makes us the preferred choice for quality education
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((item, index) => {
              const Icon = whyChooseIcons[index];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-green-200 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="mb-5 inline-flex rounded-xl bg-green-50 p-3 transition-colors duration-300 group-hover:bg-green-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-['Poppins'] text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row"
          >
            <div>
              <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">
                Stay Updated
              </span>
              <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Latest News & <span className="text-purple-600">Announcements</span>
              </h2>
            </div>
            <Button as="link" to="/news" variant="outline" className="border-gray-300">
              View All News
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {latestNews.map((news) => (
              <motion.article
                key={news.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {news.date}
                  </div>
                  <h3 className="font-['Poppins'] text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-700">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{news.excerpt}</p>
                  <Link
                    to={`/news/${news.id}`}
                    className="mt-4 inline-flex items-center gap-1 font-semibold text-gray-900 transition-colors hover:text-blue-700"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Black Background */}
      <section className="relative overflow-hidden bg-gray-900 py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <GraduationCap className="mx-auto h-16 w-16 text-yellow-400" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="mt-6 font-['Poppins'] text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Ready to Join{' '}
              <span className="text-yellow-400">Kidpalace Schools?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
            >
              Give your child the gift of quality education in a nurturing
              environment. Start the admissions process today!
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Button as="link" to="/admissions" variant="yellow" size="lg">
                Start Application
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" variant="outline-light" size="lg">
                Schedule a Visit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
