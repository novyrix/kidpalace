import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Baby,
  Heart,
  Smile,
  Puzzle,
  Music,
  Palette,
  Sun,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Utensils,
  Bus,
} from 'lucide-react';
import { Button } from '../../components/ui';

import heroImg from '../../assets/images/kindergarten/kindergarten-1.jpg';
import playImg from '../../assets/images/kindergarten/kindergarten-3.jpg';
import learningImg from '../../assets/images/kindergarten/kindergarten-4.jpg';

const programs = [
  {
    icon: Baby,
    title: 'Baby Care',
    age: '6 months - 1 year',
    description: 'Nurturing care for infants in a safe, loving environment',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Smile,
    title: 'Toddlers',
    age: '1 - 2 years',
    description: 'Sensory exploration and early motor skill development',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Puzzle,
    title: 'Playgroup',
    age: '2 - 3 years',
    description: 'Social interaction and creative play activities',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Sun,
    title: 'Pre-Primary 1',
    age: '3 - 4 years',
    description: 'Introduction to structured learning and literacy',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Palette,
    title: 'Pre-Primary 2',
    age: '4 - 5 years',
    description: 'Advanced pre-school curriculum and school readiness',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Music,
    title: 'Pre-Primary 3',
    age: '5 - 6 years',
    description: 'Preparation for transition to primary school',
    color: 'bg-purple-50 text-purple-600',
  },
];

const facilities = [
  { icon: Puzzle, title: 'Play Areas', desc: 'Swings, slides, toys, and play equipment' },
  { icon: Shield, title: 'Safe Environment', desc: 'Secure facilities with trained staff' },
  { icon: Utensils, title: 'Nutritious Meals', desc: 'Healthy meals prepared fresh daily' },
  { icon: Bus, title: 'School Transport', desc: 'Safe vans and buses for travel' },
];

const features = [
  'Pleasant, homely and quiet environment',
  'Age-appropriate play materials and toys',
  'Trained early childhood educators',
  'Low child-to-teacher ratios',
  'Regular health and safety checks',
  'Smooth transition to Grade School',
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Kindergarten = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 pt-40 pb-20 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Kid Palace Kindergarten"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-1.5 text-sm font-medium text-yellow-400">
              <Baby className="h-4 w-4" />
              Ages 6 months - 6 years
            </span>
            <h1 className="mt-6 font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Kid Palace <span className="text-yellow-400">Kindergarten</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              An exclusive school for little ones, providing nurturing care and
              play-based learning in a pleasant, homely environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" to="/admissions" variant="yellow" size="lg">
                Enroll Your Child
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" variant="outline-light" size="lg">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
                Why Choose Us
              </span>
              <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Where Little Ones Thrive
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Kid Palace Kindergarten is located in a pleasant, homely and quiet
                environment far from the noisy road, providing the perfect setting
                for early childhood development.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We understand that the early years are crucial for a child's development.
                Our play-based learning approach nurtures curiosity, creativity, and
                confidence in every child.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <img
                src={playImg}
                alt="Children at play"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-yellow-500 p-5 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
                <p className="mt-2 text-sm font-semibold text-white">Nurturing Care</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Our Programs
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Age-Appropriate Learning
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Tailored programs for each stage of early childhood development
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`inline-flex rounded-xl p-3 ${program.color}`}>
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-['Poppins'] text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-yellow-600">{program.age}</p>
                <p className="mt-3 text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <img
                src={learningImg}
                alt="Children learning through play"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
                Our Approach
              </span>
              <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Learning Through Play
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                We believe that children learn best through play and exploration.
                Our curriculum is designed to foster curiosity, creativity, and
                a love for learning.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 rounded-xl bg-yellow-50 p-3">
                    <Puzzle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Play-Based Learning</h3>
                    <p className="mt-1 text-gray-600">Engaging activities that develop cognitive and motor skills</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 rounded-xl bg-yellow-50 p-3">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Social Development</h3>
                    <p className="mt-1 text-gray-600">Building friendships and learning to work together</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 rounded-xl bg-yellow-50 p-3">
                    <Heart className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Emotional Nurturing</h3>
                    <p className="mt-1 text-gray-600">Creating a safe space for emotional expression and growth</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Preview - Interactive Timeline */}
      <section className="bg-yellow-50 py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              A Day at Kid Palace
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Sample Daily Schedule
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Every day is filled with engaging activities designed to nurture growth and learning
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-4xl">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-yellow-300 md:left-1/2 md:-translate-x-1/2" />
              
              <div className="space-y-6">
                {[
                  { time: '7:30 AM', activity: 'Arrival & Free Play', desc: 'Warm welcome and supervised play time', icon: '🌅', color: 'bg-amber-100' },
                  { time: '8:30 AM', activity: 'Morning Circle & Songs', desc: 'Group bonding with songs and greetings', icon: '🎵', color: 'bg-pink-100' },
                  { time: '9:00 AM', activity: 'Learning Activities', desc: 'Age-appropriate educational activities', icon: '📚', color: 'bg-blue-100' },
                  { time: '10:00 AM', activity: 'Snack Time', desc: 'Healthy snacks and hydration break', icon: '🍎', color: 'bg-red-100' },
                  { time: '10:30 AM', activity: 'Outdoor Play', desc: 'Physical activities and exploration', icon: '⚽', color: 'bg-green-100' },
                  { time: '11:30 AM', activity: 'Creative Arts', desc: 'Art, craft, music, and creative expression', icon: '🎨', color: 'bg-purple-100' },
                  { time: '12:30 PM', activity: 'Lunch Time', desc: 'Nutritious meal prepared fresh daily', icon: '🍽️', color: 'bg-orange-100' },
                  { time: '1:30 PM', activity: 'Rest/Nap Time', desc: 'Quiet time for younger children', icon: '😴', color: 'bg-indigo-100' },
                  { time: '3:00 PM', activity: 'Afternoon Activities & Pickup', desc: 'Wrap-up activities and safe pickup', icon: '🏠', color: 'bg-teal-100' },
                ].map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className={`relative flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className={`ml-16 flex-1 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`rounded-2xl ${item.color} p-5 shadow-sm transition-shadow hover:shadow-md`}
                      >
                        <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className="text-2xl">{item.icon}</span>
                          <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                            <h3 className="font-['Poppins'] text-lg font-semibold text-gray-900">
                              {item.activity}
                            </h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-0 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg md:static md:mx-4">
                      <Clock className="h-5 w-5" />
                    </div>

                    {/* Time Label */}
                    <div className={`hidden flex-1 items-center md:flex ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                      <span className="rounded-full bg-white px-4 py-2 font-semibold text-yellow-600 shadow-sm">
                        {item.time}
                      </span>
                    </div>

                    {/* Mobile Time Label */}
                    <span className="absolute left-16 top-0 text-sm font-semibold text-yellow-600 md:hidden">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
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
              Our Facilities
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
              Child-Friendly Environment
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-gray-800 p-6 text-center"
              >
                <div className="mx-auto inline-flex rounded-xl bg-yellow-500/20 p-3">
                  <facility.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-white">
                  {facility.title}
                </h3>
                <p className="mt-2 text-gray-400">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Baby className="mx-auto h-16 w-16 text-yellow-500" />
            <h2 className="mt-6 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Give Your Child the Best Start
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Join the Kid Palace Kindergarten family and give your little one a
              nurturing environment to grow and learn.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as="link" to="/admissions" variant="yellow" size="lg">
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Kindergarten;
