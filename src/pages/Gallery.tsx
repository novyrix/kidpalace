import { useState } from 'react';
import { X } from 'lucide-react';

// Import images from all categories
import admin1 from '../assets/images/admin/admin-1.jpg';
import admin2 from '../assets/images/admin/admin-2.jpg';
import admin3 from '../assets/images/admin/admin-3.jpg';
import dining1 from '../assets/images/dining/dining-1.jpg';
import dining2 from '../assets/images/dining/dining-2.jpg';
import dining3 from '../assets/images/dining/dining-3.jpg';
import education1 from '../assets/images/education/education-1.jpg';
import education2 from '../assets/images/education/education-2.jpg';
import education3 from '../assets/images/education/education-3.jpg';
import education4 from '../assets/images/education/education-4.jpg';
import gradeSchool1 from '../assets/images/grade-school/grade-school-1.jpg';
import gradeSchool2 from '../assets/images/grade-school/grade-school-2.jpg';
import gradeSchool3 from '../assets/images/grade-school/grade-school-3.jpg';
import gradeSchool4 from '../assets/images/grade-school/grade-school-4.jpg';
import kindergarten1 from '../assets/images/kindergarten/kindergarten-1.jpg';
import kindergarten2 from '../assets/images/kindergarten/kindergarten-2.jpg';
import kindergarten3 from '../assets/images/kindergarten/kindergarten-3.jpg';
import kindergarten4 from '../assets/images/kindergarten/kindergarten-4.jpg';
import sports1 from '../assets/images/sports/sports-1.jpg';
import sports2 from '../assets/images/sports/sports-2.jpg';
import sports3 from '../assets/images/sports/sports-3.jpg';
import sports4 from '../assets/images/sports/sports-4.jpg';

type Category = 'all' | 'admin' | 'dining' | 'education' | 'grade-school' | 'kindergarten' | 'sports';

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const galleryImages: GalleryImage[] = [
  { src: admin1, alt: 'School Administration', category: 'admin' },
  { src: admin2, alt: 'Administrative Building', category: 'admin' },
  { src: admin3, alt: 'School Office', category: 'admin' },
  { src: dining1, alt: 'Dining Hall', category: 'dining' },
  { src: dining2, alt: 'Students at Lunch', category: 'dining' },
  { src: dining3, alt: 'Meal Time', category: 'dining' },
  { src: education1, alt: 'Classroom Learning', category: 'education' },
  { src: education2, alt: 'Students in Class', category: 'education' },
  { src: education3, alt: 'Learning Activities', category: 'education' },
  { src: education4, alt: 'Educational Session', category: 'education' },
  { src: gradeSchool1, alt: 'Grade School Students', category: 'grade-school' },
  { src: gradeSchool2, alt: 'Grade School Activities', category: 'grade-school' },
  { src: gradeSchool3, alt: 'Primary Students', category: 'grade-school' },
  { src: gradeSchool4, alt: 'Grade School Learning', category: 'grade-school' },
  { src: kindergarten1, alt: 'Kindergarten Kids', category: 'kindergarten' },
  { src: kindergarten2, alt: 'Early Learning', category: 'kindergarten' },
  { src: kindergarten3, alt: 'Kindergarten Activities', category: 'kindergarten' },
  { src: kindergarten4, alt: 'Young Learners', category: 'kindergarten' },
  { src: sports1, alt: 'Sports Activities', category: 'sports' },
  { src: sports2, alt: 'Athletic Events', category: 'sports' },
  { src: sports3, alt: 'Sports Day', category: 'sports' },
  { src: sports4, alt: 'Physical Education', category: 'sports' },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Photos' },
  { value: 'education', label: 'Education' },
  { value: 'grade-school', label: 'Grade School' },
  { value: 'kindergarten', label: 'Kindergarten' },
  { value: 'sports', label: 'Sports' },
  { value: 'dining', label: 'Dining' },
  { value: 'admin', label: 'Facilities' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-20 md:pt-32">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20 lg:py-28">
        <div className="container-custom text-center text-white">
          <h1 className="font-['Poppins'] text-4xl font-bold md:text-5xl">
            Photo Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Explore moments from our school life, events, and activities
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/40">
                  <div className="flex h-full items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-medium text-white">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
