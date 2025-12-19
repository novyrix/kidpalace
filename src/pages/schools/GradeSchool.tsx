import {
  BookOpen,
  Trophy,
  Music,
  Palette,
  Globe,
  Calculator,
  FlaskConical,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { SectionHeader, Button, IconTextBlock } from '../../components/ui';

import heroImg from '../../assets/images/grade-school/grade-school-1.jpg';
import classroomImg from '../../assets/images/education/education-4.jpg';
import sportsImg from '../../assets/images/sports/sports-1.jpg';

const programs = [
  {
    icon: BookOpen,
    title: 'Languages',
    description: 'English, Kiswahili, and Indigenous Languages',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Numeracy and problem-solving skills',
  },
  {
    icon: FlaskConical,
    title: 'Science & Technology',
    description: 'Integrated Science and Digital Literacy',
  },
  {
    icon: Globe,
    title: 'Social Studies',
    description: 'Citizenship, Geography, and History',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description: 'Art, Craft, and Design',
  },
  {
    icon: Music,
    title: 'Performing Arts',
    description: 'Music, Drama, and Dance',
  },
];

const features = [
  'Competency-Based Curriculum (CBC) implementation',
  'Reasonable small class sizes for personalized attention',
  'Experienced teachers trained in CBC methodology',
  'Modern learning facilities and resources',
  'Strong focus on character development',
  'Regular parent-teacher communication',
  'Extensive co-curricular activities',
  'Safe and secure learning environment',
];

const GradeSchool = () => {
  return (
    <div className="pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImg}
            alt="Kidpalace Grade School"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-medium">
            Grades 1-9
          </div>
          <h1 className="mt-4 font-['Poppins'] text-4xl font-bold md:text-5xl">
            Kidpalace Grade School
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            The primary vision of the institution is to execute a learning
            program that provides a balance between the child's interests and
            the parents' expectations, ensuring academic excellence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="link" to="/admissions" variant="white" size="lg">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="link" to="/contact" variant="outline-light" size="lg">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* About Grade School */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Excellence in Primary & Junior Education
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Kidpalace Grade School offers comprehensive education for
                children in Grades 1-9, following the Competency-Based
                Curriculum (CBC) designed to develop well-rounded individuals.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                With carefully thought out and implemented Kidpalace specifics,
                the school carves a niche for itself as the preferred place for
                knowledge transformation where every child is guaranteed
                success.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={classroomImg}
                alt="Students in classroom"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <SectionHeader
            title="Academic Programs"
            subtitle="Our curriculum covers all essential learning areas for holistic development"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="inline-flex rounded-lg bg-blue-100 p-3">
                  <program.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="mt-4 font-['Poppins'] text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img
                src={sportsImg}
                alt="Students in sports activities"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Co-curricular Activities
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We believe in developing the whole child. Our extensive
                co-curricular program helps students discover and develop their
                talents beyond the classroom.
              </p>
              <div className="mt-8 space-y-4">
                <IconTextBlock
                  icon={Trophy}
                  title="Sports & Athletics"
                  description="Basketball, hockey, cricket, lawn tennis, and swimming"
                />
                <IconTextBlock
                  icon={Music}
                  title="Arts & Performance"
                  description="Music, drama, dance, and creative arts"
                />
                <IconTextBlock
                  icon={Globe}
                  title="Outdoor Learning"
                  description="School trips and excursions to discover the wider world"
                />
              </div>
              <div className="mt-8">
                <Button as="link" to="/school-life">
                  Explore School Life
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
              World-Class Facilities
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-400" />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Modern Classrooms', desc: 'Well-equipped learning spaces' },
              { title: 'Science Lab', desc: 'Hands-on experiments and discovery' },
              { title: 'Computer Lab', desc: 'Digital literacy programs' },
              { title: 'Sports Field', desc: 'Extensive play and sports area' },
            ].map((facility) => (
              <div
                key={facility.title}
                className="rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <h3 className="font-['Poppins'] text-xl font-semibold text-white">
                  {facility.title}
                </h3>
                <p className="mt-2 text-blue-200">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom text-center">
          <h2 className="font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Join Kidpalace Grade School?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Give your child the foundation for academic excellence and personal
            growth. Start the admissions process today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as="link" to="/admissions" variant="blue" size="lg">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="link" to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GradeSchool;
