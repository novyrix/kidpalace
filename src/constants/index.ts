// Color Tokens - Use these instead of raw hex values
export const colors = {
  // Grade School Colors
  gradeSchool: {
    primary: '#1e40af', // Blue-700
    primaryLight: '#3b82f6', // Blue-500
    primaryDark: '#1e3a8a', // Blue-800
    accent: '#dc2626', // Red-600
    accentLight: '#ef4444', // Red-500
  },

  // Kindergarten Colors
  kindergarten: {
    primary: '#eab308', // Yellow-500
    primaryLight: '#facc15', // Yellow-400
    primaryDark: '#ca8a04', // Yellow-600
    accent: '#dc2626', // Red-600
    accentLight: '#ef4444', // Red-500
  },

  // Neutral Colors
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// Typography
export const typography = {
  fontFamily: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// Spacing
export const spacing = {
  section: {
    sm: '3rem', // 48px
    md: '4rem', // 64px
    lg: '6rem', // 96px
  },
  container: {
    maxWidth: '1280px',
    padding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
    },
  },
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// School Types
export type SchoolType = 'grade-school' | 'kindergarten';

// Navigation Links - Simplified for header
export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Schools',
    path: '/schools',
    dropdown: [
      { label: 'Grade School', path: '/schools/grade-school' },
      { label: 'Kindergarten', path: '/schools/kindergarten' },
    ],
  },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  {
    label: 'Explore',
    path: '/explore',
    dropdown: [
      { label: 'School Life', path: '/school-life' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'News & Events', path: '/news' },
    ],
  },
  { label: 'Contact', path: '/contact' },
] as const;

// Contact Information
export const contactInfo = {
  address: 'Mage Road, off Laiser Hill, Ongata Rongai',
  phones: ['0712 247074', '0723 230066'],
  email: 'info@kidpalaceschools.ac.ke',
  hours: 'Monday - Friday: 7:00 AM - 5:00 PM',
} as const;

// School Information
export const schoolInfo = {
  gradeSchool: {
    name: 'Kidpalace Grade School',
    description: 'The primary vision of the institution is to execute a learning program informed by the need to provide a balance between the child interests and the parents\' interests, academic excellence, and holistic development.',
    ageRange: 'Grades 1-9',
    features: [
      'Competency-Based Curriculum (CBC)',
      'Small class sizes for personalized attention',
      'Experienced and qualified teachers',
      'Modern learning facilities',
      'Extensive co-curricular activities',
    ],
  },
  kindergarten: {
    name: 'Kidpalace Kindergarten',
    description: 'An exclusive school for the little ones, catering for children from the age of 6 months to six years. Located in a pleasant, homely and quiet environment far from the noisy road.',
    ageRange: '6 months - 6 years',
    features: [
      'Nurturing and safe environment',
      'Play-based learning approach',
      'Early childhood development focus',
      'Age-appropriate play materials',
      'Trained early childhood educators',
    ],
  },
} as const;

// Why Choose Us Features
export const whyChooseUs = [
  {
    title: 'Small Class Sizes',
    description: 'Reasonable class sizes that permit child-centered teaching, encourage self-expression, self-motivation, and self-discipline.',
  },
  {
    title: 'Extensive Facilities',
    description: 'An extensive play field for co-curricular activities with a variety of sports including basketball, hockey, cricket, and lawn tennis.',
  },
  {
    title: 'Outdoor Activities',
    description: 'Exposure to a variety of outdoor activities including swimming, school trips, and excursions to help pupils discover the wider world.',
  },
  {
    title: 'Experienced Teachers',
    description: 'Experienced P.I. teachers specifically trained in CBC to handle professional instruction and resonate with children.',
  },
  {
    title: 'Parent Partnership',
    description: 'An inclusive execution program where the parent and the teacher closely monitor the progress of the child.',
  },
  {
    title: 'Safety First',
    description: 'Extra support staff and teamwork to ensure that children are taken care of and their whereabouts are known at all times.',
  },
] as const;
