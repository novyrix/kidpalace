import { motion, type Variants } from 'framer-motion';
import { Calendar, ArrowRight, Bell, Newspaper, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, SocialFeedLive } from '../components/ui';

import newsImg1 from '../assets/images/education/education-1.jpg';
import newsImg2 from '../assets/images/sports/sports-1.jpg';
import newsImg3 from '../assets/images/admin/admin-1.jpg';
import newsImg4 from '../assets/images/kindergarten/kindergarten-1.jpg';
import newsImg5 from '../assets/images/grade-school/grade-school-1.jpg';
import newsImg6 from '../assets/images/dining/dining-1.jpg';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const newsArticles = [
  {
    id: 1,
    title: 'Term 3 Academic Calendar Released',
    excerpt:
      'View the complete schedule for the upcoming term including important dates, holidays, and school events. Parents are encouraged to mark their calendars.',
    date: 'December 10, 2025',
    category: 'Announcements',
    image: newsImg1,
    featured: true,
  },
  {
    id: 2,
    title: 'Annual Sports Day 2025',
    excerpt:
      'Join us for our annual sports day celebration featuring various athletic competitions across all age groups. Parents and guardians are welcome to attend.',
    date: 'December 5, 2025',
    category: 'Events',
    image: newsImg2,
    featured: true,
  },
  {
    id: 3,
    title: 'Parent-Teacher Conference',
    excerpt:
      'Important meeting to discuss student progress and upcoming school initiatives. All parents are encouraged to attend this valuable session.',
    date: 'November 28, 2025',
    category: 'Meetings',
    image: newsImg3,
    featured: false,
  },
  {
    id: 4,
    title: 'Kindergarten Open Day Success',
    excerpt:
      'We welcomed many prospective parents and their little ones to our kindergarten open day. Thank you to all who attended!',
    date: 'November 20, 2025',
    category: 'Events',
    image: newsImg4,
    featured: false,
  },
  {
    id: 5,
    title: 'Grade 6 Excursion to National Museum',
    excerpt:
      'Our Grade 6 students had an educational trip to the National Museum, learning about Kenyan history and culture.',
    date: 'November 15, 2025',
    category: 'Activities',
    image: newsImg5,
    featured: false,
  },
  {
    id: 6,
    title: 'New School Menu Announced',
    excerpt:
      'We have updated our school meal program with more nutritious options. Check out the new menu for this term.',
    date: 'November 10, 2025',
    category: 'Announcements',
    image: newsImg6,
    featured: false,
  },
];

const categories = [
  { name: 'All', count: newsArticles.length },
  { name: 'Announcements', count: newsArticles.filter(a => a.category === 'Announcements').length },
  { name: 'Events', count: newsArticles.filter(a => a.category === 'Events').length },
  { name: 'Activities', count: newsArticles.filter(a => a.category === 'Activities').length },
  { name: 'Meetings', count: newsArticles.filter(a => a.category === 'Meetings').length },
];

const News = () => {
  const featuredArticles = newsArticles.filter((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className="pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 backdrop-blur-sm">
              <Newspaper className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Latest Updates</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              News & Announcements
            </motion.h1>
            <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
              Stay updated with the latest news, events, and announcements from
              Kidpalace Schools
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Tag className="h-5 w-5 text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {cat.name}
                <span className="ml-1.5 text-gray-400">({cat.count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Featured
            </span>
            <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Top Stories
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Important updates and highlights from our school community
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2"
          >
            {featuredArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={scaleIn}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                  <h2 className="font-['Poppins'] text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/news/${article.id}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-800"
                  >
                    Read Full Story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All News */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="inline-block rounded-full bg-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-700">
              All News
            </span>
            <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Latest Updates
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              All the news and announcements from Kidpalace Schools
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {regularArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={scaleIn}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="font-['Poppins'] text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-600">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/news/${article.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg">
              View All News
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 md:text-4xl">
              Connect With Us
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Follow our social media for real-time updates and behind-the-scenes moments
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SocialFeedLive maxPosts={6} />
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 lg:p-16"
          >
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <div className="mb-6 inline-flex rounded-full bg-white/10 p-4">
                <Bell className="h-8 w-8 text-yellow-400" />
              </div>
              <h2 className="font-['Poppins'] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Never Miss an Update
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-gray-400">
                Subscribe to our newsletter to receive updates on school events,
                announcements, and important information directly in your inbox.
              </p>
              <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-xl border-2 border-gray-700 bg-gray-800 px-5 py-4 text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                />
                <Button type="submit" variant="yellow" size="lg" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
