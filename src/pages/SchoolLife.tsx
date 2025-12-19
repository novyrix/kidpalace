import { motion, type Variants } from 'framer-motion';
import {
  Trophy,
  Music,
  Palette,
  Users,
  Tent,
  Camera,
  Calendar,
  Heart,
  Star,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/ui';

import heroImg from '../assets/images/sports/sports-2.jpg';
import sportsImg from '../assets/images/sports/sports-3.jpg';
import artsImg from '../assets/images/education/education-7.jpg';
import diningImg from '../assets/images/dining/dining-1.jpg';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const activities = [
  {
    icon: Trophy,
    title: 'Sports & Athletics',
    description:
      'Basketball, hockey, cricket, lawn tennis, and swimming programs to develop physical fitness and teamwork.',
    image: sportsImg,
    color: 'bg-blue-500',
  },
  {
    icon: Music,
    title: 'Music & Performing Arts',
    description:
      'Music classes, drama productions, and dance programs that nurture creative expression.',
    image: artsImg,
    color: 'bg-purple-500',
  },
  {
    icon: Palette,
    title: 'Visual Arts',
    description:
      'Art, craft, and design activities that encourage creativity and artistic development.',
    image: diningImg,
    color: 'bg-amber-500',
  },
  {
    icon: Tent,
    title: 'Outdoor Adventures',
    description:
      'School trips and excursions to help pupils discover the wider world beyond the classroom.',
    image: heroImg,
    color: 'bg-emerald-500',
  },
];

const clubs = [
  { name: 'Debate Club', icon: Users },
  { name: 'Drama Club', icon: Star },
  { name: 'Music Club', icon: Music },
  { name: 'Art Club', icon: Palette },
  { name: 'Science Club', icon: Trophy },
  { name: 'Environmental Club', icon: Tent },
  { name: 'Reading Club', icon: Heart },
  { name: 'Dance Club', icon: Star },
];

const events = [
  {
    title: 'Annual Sports Day',
    description: 'A celebration of athletic achievement featuring various sporting competitions.',
    month: 'March',
    icon: Trophy,
  },
  {
    title: 'Cultural Day',
    description: 'Showcasing diverse cultures through music, dance, food, and traditional attire.',
    month: 'June',
    icon: Heart,
  },
  {
    title: 'Music Festival',
    description: 'Students perform and compete in various music and drama categories.',
    month: 'August',
    icon: Music,
  },
  {
    title: 'Prize Giving Day',
    description: 'Celebrating academic and co-curricular achievements of our students.',
    month: 'November',
    icon: Star,
  },
];

const sports = ['Basketball', 'Hockey', 'Cricket', 'Lawn Tennis', 'Swimming', 'Athletics'];

const SchoolLife = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 pt-40 pb-20 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="School Life"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeIn}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-1.5 text-sm font-medium text-yellow-400"
            >
              <Heart className="h-4 w-4" />
              Beyond the Classroom
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="mt-6 font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              School <span className="text-yellow-400">Life</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-xl text-gray-300"
            >
              Discover the vibrant activities, events, and experiences that make
              Kid Palace Schools special. We believe in developing the whole child.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-4">
              <Button as="link" to="/gallery" variant="yellow" size="lg">
                View Gallery
                <Camera className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" variant="outline-light" size="lg">
                Schedule a Visit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Activities
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Co-curricular Programs
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              We believe in developing the whole child through diverse activities
              that complement academic learning.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl ${activity.color} p-2.5`}>
                      <activity.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-['Poppins'] text-xl font-semibold text-gray-900">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Athletics
              </span>
              <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Extensive Sports Facilities
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our extensive play field provides space for various sports
                activities, helping students develop physical fitness, teamwork,
                and competitive spirit.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {sports.map((sport) => (
                  <div
                    key={sport}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium text-gray-800">{sport}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={sportsImg}
                alt="Sports activities"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-yellow-500 p-5 shadow-lg">
                <Trophy className="h-8 w-8 text-white" />
                <p className="mt-2 text-sm font-semibold text-white">Champions!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Get Involved
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Clubs & Societies
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Join various clubs to explore interests and develop new skills
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4"
          >
            {clubs.map((club) => (
              <motion.div
                key={club.name}
                variants={fadeIn}
                className="group flex items-center gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-lg bg-gray-100 p-2.5 transition-colors group-hover:bg-yellow-100">
                  <club.icon className="h-5 w-5 text-gray-600 transition-colors group-hover:text-yellow-600" />
                </div>
                <span className="font-medium text-gray-800">{club.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="bg-gray-900 py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Calendar
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
              Annual Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Key events that bring our school community together throughout the year
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {events.map((event) => (
              <motion.div
                key={event.title}
                variants={fadeIn}
                className="group rounded-2xl bg-gray-800 p-6 transition-colors hover:bg-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-yellow-500/20 p-3">
                    <event.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {event.month}
                  </div>
                </div>
                <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{event.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Wellbeing */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={diningImg}
                alt="Student dining"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Wellbeing
              </span>
              <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Student Welfare & Nutrition
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We prioritize the health and wellbeing of every student. Our school
                provides nutritious meals prepared fresh daily, ensuring students
                have the energy they need to learn and grow.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: 'Nutritious Meals', desc: 'Balanced diet prepared fresh daily' },
                  { title: 'Health Monitoring', desc: 'Regular health checks and support' },
                  { title: 'Safe Environment', desc: 'Secure campus with trained staff' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-lg bg-yellow-100 p-2">
                      <Heart className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Camera className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-6 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              See Our School in Action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Browse our photo gallery to see students enjoying the various activities
              and events at Kid Palace Schools.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as="link" to="/gallery" variant="primary" size="lg">
                View Gallery
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/admissions" variant="outline" size="lg">
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SchoolLife;
