import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '../components/ui';

import aboutHeroImg from '../assets/images/education/education-3.jpg';
import teamImg from '../assets/images/admin/admin-1.jpg';

const values = [
  {
    icon: Heart,
    title: 'Nurturing Care',
    description: 'A safe, loving environment where every child feels valued.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'High standards of education with curiosity and critical thinking.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Strong partnerships between parents, teachers, and students.',
  },
  {
    icon: BookOpen,
    title: 'Holistic Growth',
    description: 'Developing the whole child - intellectually and emotionally.',
  },
];

const milestones = [
  { year: '2004', title: 'Foundation', description: 'Kid Palace Kindergarten established in Ongata Rongai' },
  { year: '2010', title: 'Expansion', description: 'Grade School opened to serve growing community needs' },
  { year: '2017', title: 'CBC Adoption', description: 'Early adoption of Competency-Based Curriculum' },
  { year: 'Today', title: 'Excellence', description: 'Educating 500+ students annually with proven results' },
];

// Simple fade animation
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 pt-32 pb-20 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt="Kid Palace Schools campus"
            className="h-full w-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-1.5 text-sm font-medium text-yellow-400">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              About Us
            </span>
            <h1 className="mt-6 font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Building Foundations for{' '}
              <span className="text-yellow-400">Bright Futures</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Since 2004, Kid Palace Schools has been the trusted choice for parents
              seeking quality education in a nurturing environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Story
              </span>
              <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Where Every Child's Journey Begins
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Kid Palace Schools was founded with a simple vision: create an
                  exceptional learning environment where children thrive academically,
                  socially, and emotionally.
                </p>
                <p>
                  Located in a pleasant, quiet environment in Ongata Rongai, away from
                  the busy roads, our schools provide the perfect setting for focused
                  learning and holistic development.
                </p>
                <p>
                  With carefully thought-out programs and dedicated teachers, we've
                  become the preferred choice for knowledge transformation—where every
                  child is guaranteed success.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-bold text-gray-900">20+</p>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">2000+</p>
                  <p className="text-sm text-gray-500">Students Educated</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-500">Dedicated Staff</p>
                </div>
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
                src={teamImg}
                alt="Kid Palace Schools team"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-blue-600 p-6 text-white shadow-lg">
                <p className="text-3xl font-bold">Est.</p>
                <p className="text-3xl font-bold">2004</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Journey
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gray-900 px-4 py-2">
                  <span className="text-lg font-bold text-yellow-400">{milestone.year}</span>
                </div>
                <h3 className="font-['Poppins'] text-lg font-semibold text-gray-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-2xl bg-gray-900 p-8 lg:p-10"
            >
              <div className="inline-flex rounded-xl bg-blue-600 p-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 font-['Poppins'] text-2xl font-bold text-white">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                To execute a learning program that balances the child's interests
                with parents' expectations, ensuring academic excellence while
                nurturing character development and preparing students for future success.
              </p>
              <ul className="mt-6 space-y-3">
                {['Academic Excellence', 'Character Development', 'Future Readiness'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-2xl bg-blue-600 p-8 lg:p-10"
            >
              <div className="inline-flex rounded-xl bg-white/20 p-3">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 font-['Poppins'] text-2xl font-bold text-white">
                Our Vision
              </h3>
              <p className="mt-4 text-blue-100 leading-relaxed">
                To be the leading institution in knowledge transformation, creating
                an environment where every child discovers their potential and develops
                into a well-rounded individual ready to contribute positively to society.
              </p>
              <ul className="mt-6 space-y-3">
                {['Knowledge Transformation', 'Individual Potential', 'Positive Impact'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Core Values
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              These principles guide everything we do at Kid Palace Schools
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex rounded-xl bg-blue-50 p-3">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 lg:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
              Ready to Join the{' '}
              <span className="text-yellow-400">Kid Palace</span> Family?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Give your child the gift of quality education in a nurturing environment.
              Schedule a visit or start your application today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as="link" to="/admissions" variant="yellow" size="lg">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" variant="outline-light" size="lg">
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
