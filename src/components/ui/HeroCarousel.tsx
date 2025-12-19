import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TitlePart {
  text: string;
  highlight?: boolean;
}

interface Slide {
  image: string;
  title: string | TitlePart[];
  subtitle?: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
  children?: React.ReactNode;
}

const HeroCarousel = ({
  slides,
  autoPlayInterval = 7000,
  children,
}: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide, autoPlayInterval, isPaused]);

  const renderTitle = (title: string | TitlePart[]) => {
    if (typeof title === 'string') {
      return <span className="text-white">{title}</span>;
    }
    return (
      <>
        {title.map((part, i) => (
          <span
            key={i}
            className={part.highlight ? 'text-yellow-400' : 'text-white'}
          >
            {part.text}
          </span>
        ))}
      </>
    );
  };

  return (
    <div
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images - Simple crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="text-sm font-medium text-white">
                  Welcome to Kidpalace Schools
                </span>
              </div>

              {/* Main Title */}
              <h1 className="font-['Poppins'] text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
                {renderTitle(slides[currentSlide].title)}
              </h1>

              {/* Subtitle */}
              {slides[currentSlide].subtitle && (
                <p className="max-w-xl text-lg text-gray-300 md:text-xl">
                  {slides[currentSlide].subtitle}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="pt-2">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Simple Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-yellow-400'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
