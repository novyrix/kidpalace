import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  FileText,
  Users,
  ClipboardCheck,
  GraduationCap,
  Send,
  ChevronDown,
  Sparkles,
  Clock,
  Shield,
} from 'lucide-react';
import { Button } from '../components/ui';

import heroImg from '../assets/images/admin/admin-2.jpg';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

const admissionSteps = [
  {
    step: 1,
    title: 'Submit Inquiry',
    description: 'Fill out our simple inquiry form or contact us directly to express your interest in enrollment.',
    icon: Send,
    color: 'bg-blue-500',
  },
  {
    step: 2,
    title: 'Campus Tour',
    description: 'Schedule a personalized tour to explore our facilities and meet our dedicated teaching staff.',
    icon: MapPin,
    color: 'bg-emerald-500',
  },
  {
    step: 3,
    title: 'Application',
    description: 'Complete the application form and submit the required documents for processing.',
    icon: FileText,
    color: 'bg-amber-500',
  },
  {
    step: 4,
    title: 'Assessment',
    description: 'Age-appropriate assessment to understand your child\'s learning needs and abilities.',
    icon: ClipboardCheck,
    color: 'bg-purple-500',
  },
  {
    step: 5,
    title: 'Welcome!',
    description: 'Receive your admission letter, complete enrollment, and join the Kid Palace family!',
    icon: GraduationCap,
    color: 'bg-rose-500',
  },
];

const requirements = [
  { text: 'Birth certificate (original and copy)', icon: FileText },
  { text: 'Previous school reports (if applicable)', icon: ClipboardCheck },
  { text: 'Passport-size photos (4 copies)', icon: Users },
  { text: 'Medical & immunization records', icon: Shield },
  { text: 'Parent/Guardian ID copies', icon: FileText },
  { text: 'Transfer letter (for transfer students)', icon: Send },
];

const terms = [
  { name: 'Term 1', period: 'January - April', status: 'Applications Open' },
  { name: 'Term 2', period: 'May - August', status: 'Applications Open' },
  { name: 'Term 3', period: 'September - December', status: 'Applications Open' },
];

const gradeOptions = [
  { group: 'Early Years', options: ['Baby Care (6mo-1yr)', 'Toddlers (1-2yrs)', 'Playgroup (2-3yrs)'] },
  { group: 'Pre-Primary', options: ['Pre-Primary 1 (PP1)', 'Pre-Primary 2 (PP2)'] },
  { group: 'Primary School', options: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'] },
  { group: 'Junior Secondary', options: ['Grade 7', 'Grade 8', 'Grade 9'] },
];

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ComponentType<{ className?: string }>;
}

const FormInput = ({ label, id, type = 'text', placeholder, required, value, onChange, icon: Icon }: FormInputProps) => (
  <div className="group">
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-600" />
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 ${Icon ? 'pl-12' : ''}`}
      />
    </div>
  </div>
);

interface CustomSelectProps {
  label: string;
  id: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { group: string; options: string[] }[];
  placeholder?: string;
}

const CustomSelect = ({ label, id, required, value, onChange, options, placeholder }: CustomSelectProps) => (
  <div className="group">
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 pr-12 text-gray-900 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
      >
        <option value="">{placeholder || 'Select...'}</option>
        {options.map((group) => (
          <optgroup key={group.group} label={group.group}>
            {group.options.map((opt) => (
              <option key={opt} value={opt.toLowerCase().replace(/\s+/g, '-')}>
                {opt}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
    </div>
  </div>
);

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    gradeLevel: '',
    school: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      gradeLevel: '',
      school: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Admissions"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="container-custom relative z-10 flex min-h-[60vh] items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl py-20"
          >
            <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Now Enrolling for 2025</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Begin Your Child's
              <span className="block text-yellow-400">Journey With Us</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-300 md:text-xl">
              Join the Kid Palace Schools family and give your child the foundation
              for a lifetime of learning and success.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <a href="#inquiry-form">
                <Button variant="yellow" size="lg">
                  Apply Now
                </Button>
              </a>
              <Button as="link" to="/contact" variant="outline-light" size="lg">
                Schedule a Tour
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admissions Process - Redesigned */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Simple Process
            </span>
            <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              How to Join Our School
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We've made the admission process simple and straightforward.
              Follow these five easy steps to enroll your child.
            </p>
          </motion.div>

          {/* Process Steps - Card Layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3 lg:grid-cols-5"
          >
            {admissionSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={scaleIn}
                  className="group relative"
                >
                  {/* Connector Line */}
                  {index < admissionSteps.length - 1 && (
                    <div className="absolute left-full top-12 hidden h-0.5 w-6 bg-gray-200 lg:block" />
                  )}
                  <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Step Number */}
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                      {item.step}
                    </div>
                    {/* Icon */}
                    <div className={`mb-4 inline-flex rounded-xl ${item.color} p-3 text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-['Poppins'] text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Requirements & Timeline */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Requirements */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                What You'll Need
              </span>
              <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl">
                Admission Requirements
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Please prepare the following documents for a smooth admission process.
              </p>
              <div className="mt-8 space-y-4">
                {requirements.map((req, index) => {
                  const Icon = req.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-700">{req.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] text-2xl font-bold text-gray-900">
                      Academic Calendar
                    </h3>
                    <p className="text-gray-600">Rolling admissions year-round</p>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  {terms.map((term, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl bg-gray-50 p-5 transition-colors hover:bg-blue-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{term.name}</p>
                          <p className="text-sm text-gray-600">{term.period}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        {term.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-blue-50 p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Applications are accepted throughout the year.
                    We recommend applying at least 2 weeks before the start of each term.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form - Redesigned */}
      <section id="inquiry-form" className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                Get Started Today
              </span>
              <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Admission Inquiry
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Fill out the form below and our admissions team will contact you
                within 24 hours to guide you through the next steps.
              </p>
            </motion.div>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-12 text-center shadow-lg ring-1 ring-green-100"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="mt-6 font-['Poppins'] text-2xl font-bold text-gray-900">
                  Thank You for Your Interest!
                </h3>
                <p className="mx-auto mt-3 max-w-md text-gray-600">
                  Your inquiry has been submitted successfully. Our admissions team will
                  contact you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitSuccess(false)}
                  variant="primary"
                  size="lg"
                  className="mt-8"
                >
                  Submit Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 md:p-12"
              >
                {/* Parent Information */}
                <div className="mb-8">
                  <h3 className="mb-6 flex items-center gap-2 font-['Poppins'] text-lg font-semibold text-gray-900">
                    <Users className="h-5 w-5 text-blue-600" />
                    Parent/Guardian Information
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormInput
                      label="Full Name"
                      id="parentName"
                      placeholder="Enter your full name"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      icon={Mail}
                    />
                    <div className="md:col-span-2">
                      <FormInput
                        label="Phone Number"
                        id="phone"
                        type="tel"
                        placeholder="+254 7XX XXX XXX"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        icon={Phone}
                      />
                    </div>
                  </div>
                </div>

                {/* Child Information */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                  <h3 className="mb-6 flex items-center gap-2 font-['Poppins'] text-lg font-semibold text-gray-900">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    Child Information
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormInput
                      label="Child's Name"
                      id="childName"
                      placeholder="Enter child's full name"
                      required
                      value={formData.childName}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Child's Age"
                      id="childAge"
                      type="number"
                      placeholder="Age in years"
                      required
                      value={formData.childAge}
                      onChange={handleChange}
                    />
                    <CustomSelect
                      label="Intended Grade/Class"
                      id="gradeLevel"
                      required
                      value={formData.gradeLevel}
                      onChange={handleChange}
                      options={gradeOptions}
                      placeholder="Select grade level..."
                    />
                    <div className="group">
                      <label htmlFor="school" className="mb-2 block text-sm font-medium text-gray-700">
                        Preferred School <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="school"
                          name="school"
                          value={formData.school}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 pr-12 text-gray-900 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                        >
                          <option value="">Select school...</option>
                          <option value="kindergarten">Kid Palace Kindergarten</option>
                          <option value="grade-school">Kid Palace Grade School</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                  <h3 className="mb-6 flex items-center gap-2 font-['Poppins'] text-lg font-semibold text-gray-900">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Additional Information
                  </h3>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Any questions or special requirements?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your child's interests, any learning needs, or questions you may have..."
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col items-center gap-4 border-t border-gray-100 pt-8">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto md:min-w-[280px]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Submit Inquiry
                      </span>
                    )}
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to be contacted by our admissions team.
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-gray-900 py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
              Prefer to Talk Directly?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Our admissions team is ready to answer all your questions
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                description: 'Speak directly with our team',
                action: '0712 247074',
                link: 'tel:0712247074',
                color: 'bg-blue-500',
              },
              {
                icon: Mail,
                title: 'Email Us',
                description: 'Get a response within 24 hours',
                action: 'info@kidpalaceschools.ac.ke',
                link: 'mailto:info@kidpalaceschools.ac.ke',
                color: 'bg-emerald-500',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                description: 'Schedule a campus tour',
                action: 'Get Directions',
                link: '/contact',
                isInternal: true,
                color: 'bg-amber-500',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group rounded-2xl bg-gray-800 p-8 transition-colors hover:bg-gray-700"
                >
                  <div className={`mb-6 inline-flex rounded-xl ${item.color} p-4`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 font-['Poppins'] text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-gray-400">{item.description}</p>
                  {item.isInternal ? (
                    <Button as="link" to={item.link} variant="outline-light" size="sm">
                      {item.action}
                    </Button>
                  ) : (
                    <a
                      href={item.link}
                      className="inline-block font-medium text-yellow-400 transition-colors hover:text-yellow-300"
                    >
                      {item.action}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
