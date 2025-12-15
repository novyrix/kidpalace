import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, title, thumbnail, className = '' }: YouTubeEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Default YouTube thumbnail if not provided
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-2xl ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <motion.button
      onClick={() => setIsPlaying(true)}
      className={`group relative aspect-video w-full overflow-hidden rounded-2xl ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          // Fallback to lower quality thumbnail if maxres doesn't exist
          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />

      {/* Play Button */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-transform">
          <Play className="h-8 w-8 fill-gray-900 text-gray-900 ml-1" />
        </div>
      </motion.div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <p className="text-left text-lg font-semibold text-white">{title}</p>
      </div>
    </motion.button>
  );
};

export default YouTubeEmbed;
