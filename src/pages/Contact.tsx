import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { SectionHeader, Button } from '../components/ui';
import { contactInfo } from '../constants';

import heroImg from '../assets/images/admin/admin-3.jpg';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gray-900 pt-40 pb-20 lg:pb-28">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Contact Us"
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
              <MessageCircle className="h-4 w-4" />
              Get in Touch
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="mt-6 font-['Poppins'] text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Contact <span className="text-yellow-400">Us</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-xl text-gray-300"
            >
              We'd love to hear from you! Reach out for admissions inquiries,
              school visits, or any questions about Kid Palace Schools.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-8 flex flex-wrap gap-6"
            >
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white transition-colors hover:text-yellow-400"
              >
                <div className="rounded-full bg-white/10 p-3">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-medium">{contactInfo.phones[0]}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-white transition-colors hover:text-yellow-400"
              >
                <div className="rounded-full bg-white/10 p-3">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium">{contactInfo.email}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="inline-flex rounded-lg bg-blue-100 p-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-gray-900">
                Our Location
              </h3>
              <p className="mt-2 text-gray-600">{contactInfo.address}</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="inline-flex rounded-lg bg-blue-100 p-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-gray-900">
                Phone Numbers
              </h3>
              <div className="mt-2 space-y-1">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-gray-600 hover:text-blue-600"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="inline-flex rounded-lg bg-blue-100 p-3">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-gray-900">
                Email Address
              </h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-2 block text-gray-600 hover:text-blue-600"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="inline-flex rounded-lg bg-blue-100 p-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 font-['Poppins'] text-lg font-semibold text-gray-900">
                Office Hours
              </h3>
              <p className="mt-2 text-gray-600">{contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="font-['Poppins'] text-3xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
              <p className="mt-4 text-gray-600">
                Have a question or want to learn more about our schools? Fill out
                the form below and we'll get back to you as soon as possible.
              </p>

              {submitSuccess ? (
                <div className="mt-8 rounded-xl bg-green-50 p-8 text-center">
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                  <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for contacting us. We'll respond to your message
                    shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-medium text-gray-700"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block font-medium text-gray-700"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      >
                        <option value="">Select a subject...</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="fees">Fee Structure</option>
                        <option value="programs">Academic Programs</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="font-['Poppins'] text-3xl font-bold text-gray-900">
                Find Us
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
              <p className="mt-4 text-gray-600">
                We're located in Ongata Rongai, in a pleasant and quiet
                environment ideal for learning.
              </p>
              <div className="mt-8 aspect-square overflow-hidden rounded-xl bg-gray-200 lg:aspect-video">
                {/* Map placeholder - in production, use Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.252839147792!2d36.744!3d-1.396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjMnNDUuNiJTIDM2wrA0NCczOC40IkU!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kid Palace Schools Location"
                  className="h-full w-full"
                />
              </div>
              <div className="mt-6 rounded-lg bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900">Directions</h4>
                <p className="mt-2 text-sm text-gray-600">
                  From Nairobi CBD, take Langata Road towards Ongata Rongai. Turn
                  off at Laiser Hill and proceed to Mage Road. Our school is
                  located in a quiet residential area, away from the main road
                  for a peaceful learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: 'What are your school hours?',
                a: 'School runs from 7:30 AM to 4:00 PM, Monday through Friday. Extended care is available until 5:00 PM.',
              },
              {
                q: 'Do you provide school transport?',
                a: 'Yes, we have adequate school transport consisting of school vans, mini buses, and buses covering various routes in Ongata Rongai and surrounding areas.',
              },
              {
                q: 'What is the admission process?',
                a: 'Please visit our Admissions page for detailed information on the enrollment process, requirements, and timelines.',
              },
              {
                q: 'Do you offer meals at school?',
                a: 'Yes, we provide nutritious breakfast, lunch, and snacks prepared in our well-equipped kitchen facilities.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-['Poppins'] text-lg font-semibold text-gray-900">
                  {faq.q}
                </h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
