import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Calculator,
  FlaskConical,
  Globe,
  Palette,
  Music,
  Languages,
  Leaf,
  Heart,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  Award,
} from 'lucide-react';
import { Button } from '../components/ui';

import heroImg from '../assets/images/education/education-5.jpg';
import classroomImg from '../assets/images/education/education-6.jpg';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cbcLevels = [
  {
    level: 'Early Years Education',
    grades: 'Pre-Primary 1 & 2',
    description: 'Foundation stage focusing on play-based learning, social skills, and early literacy.',
    color: 'border-l-yellow-500',
  },
  {
    level: 'Lower Primary',
    grades: 'Grades 1-3',
    description: 'Building fundamental skills in literacy, numeracy, and basic sciences.',
    color: 'border-l-blue-500',
  },
  {
    level: 'Upper Primary',
    grades: 'Grades 4-6',
    description: 'Developing critical thinking and deeper subject knowledge.',
    color: 'border-l-green-500',
  },
  {
    level: 'Junior Secondary',
    grades: 'Grades 7-9',
    description: 'Preparing students for senior secondary with career exploration.',
    color: 'border-l-purple-500',
  },
];

const learningAreas = [
  { icon: Languages, title: 'Languages', desc: 'English, Kiswahili, Indigenous Languages' },
  { icon: Calculator, title: 'Mathematics', desc: 'Numeracy, problem-solving, logic' },
  { icon: FlaskConical, title: 'Science & Technology', desc: 'Integrated science and digital literacy' },
  { icon: Globe, title: 'Social Studies', desc: 'Citizenship, geography, history' },
  { icon: Heart, title: 'Religious Education', desc: 'Values and moral development' },
  { icon: Palette, title: 'Creative Arts', desc: 'Art, craft, and design' },
  { icon: Music, title: 'Performing Arts', desc: 'Music, drama, dance' },
  { icon: Leaf, title: 'Agriculture', desc: 'Environmental awareness and farming' },
];

const assessmentMethods = [
  'Regular classroom assessments',
  'Project-based evaluations',
  'Portfolio development',
  'Parent-teacher consultations',
  'Termly progress reports',
];

const Academics = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 pt-32 pb-20 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Academics at Kid Palace"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-400">
              <BookOpen className="h-4 w-4" />
              Academic Excellence
            </span>
            <h1 className="mt-6 font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Academic <span className="text-blue-400">Programs</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Comprehensive education following the Competency-Based Curriculum
              for holistic student development.
            </p>
          </div>
        </div>
      </section>

      {/* CBC Overview */}
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
                Our Curriculum
              </span>
              <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Competency-Based Learning
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Kid Palace Schools implements the Competency-Based Curriculum (CBC),
                which focuses on developing skills and competencies rather than
                just knowledge acquisition.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our experienced teachers are specifically trained in CBC methodology
                to ensure professional instruction that resonates with children at
                every level.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: BookOpen, title: 'Learning by Doing', desc: 'Practical application' },
                  { icon: Users, title: 'Collaboration', desc: 'Group activities' },
                  { icon: Award, title: 'Skill Development', desc: 'Core competencies' },
                  { icon: Calendar, title: 'Structured Learning', desc: 'Progressive curriculum' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-lg bg-blue-50 p-2">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
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
                src={classroomImg}
                alt="Students in class"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-blue-600 p-6 text-white shadow-lg">
                <p className="text-3xl font-bold">CBC</p>
                <p className="text-sm text-blue-100">Trained Teachers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Levels */}
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
              Education Pathways
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Progressive Learning Levels
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From early years to junior secondary, we provide comprehensive education
              at every stage
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cbcLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl border-l-4 bg-white p-6 shadow-sm ${level.color}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-['Poppins'] text-xl font-semibold text-gray-900">
                      {level.level}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-600">{level.grades}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-600">
                    {index + 1}
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section id="programs" className="py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Subjects
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Learning Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Comprehensive curriculum covering all essential subjects for holistic development
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex rounded-lg bg-blue-50 p-2.5">
                  <area.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{area.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="bg-gray-900 py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                Progress Tracking
              </span>
              <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
                Assessment & Progress
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed">
                We use a combination of formative and summative assessments to
                track student progress and ensure continuous improvement.
              </p>

              <ul className="mt-8 space-y-4">
                {assessmentMethods.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-2xl bg-gray-800 p-8"
            >
              <h3 className="font-['Poppins'] text-xl font-semibold text-white">
                Parent Partnership
              </h3>
              <p className="mt-4 text-gray-400">
                We believe in an inclusive execution program where the parent and
                the teacher closely monitor the progress of the child, reinforcing
                or changing strategy as need arises.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                  <Users className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Regular Meetings</p>
                  <p className="text-sm text-gray-400">Parent-teacher consultations each term</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Calendar Preview */}
      <section id="calendar" className="py-20 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              School Year
            </span>
            <h2 className="mt-3 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
              Academic Calendar
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our academic year is structured into three terms with breaks in between
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { term: 'Term 1', months: 'January - April', weeks: '14 weeks' },
                { term: 'Term 2', months: 'May - August', weeks: '13 weeks' },
                { term: 'Term 3', months: 'September - November', weeks: '11 weeks' },
              ].map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl bg-gray-50 p-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-gray-900">
                    {item.term}
                  </h3>
                  <p className="mt-1 text-blue-600">{item.months}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.weeks}</p>
                </motion.div>
              ))}
            </div>
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
              Ready to Start Your Child's Academic Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Discover the Kid Palace difference and give your child the education they deserve.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as="link" to="/admissions" variant="white" size="lg">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/schools/grade-school" variant="outline-light" size="lg">
                Explore Our Schools
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
