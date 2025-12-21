import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  ExternalLink, 
  Heart, 
  MessageCircle,
  RefreshCw,
  AlertCircle,
  Play
} from 'lucide-react';
import type { SocialPost, SocialFeedResponse } from '../../types/social';

interface SocialFeedProps {
  className?: string;
  showFollowCards?: boolean;
  maxPosts?: number;
}

const SocialFeed = ({ 
  className = '', 
  showFollowCards = true,
  maxPosts = 6 
}: SocialFeedProps) => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [configured, setConfigured] = useState(false);
  const [filter, setFilter] = useState<'all' | 'facebook' | 'instagram'>('all');

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/social-feed');
      const data: SocialFeedResponse = await response.json();
      
      setConfigured(data.configured);
      
      if (data.error) {
        setError(data.error);
      }
      
      setPosts(data.posts || []);
    } catch (err) {
      setError('Failed to load social feed');
      console.error('Social feed fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    filter === 'all' || post.platform === filter
  ).slice(0, maxPosts);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className={`bg-gray-50 rounded-2xl p-4 md:p-6 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-gray-900">
          Latest from Social Media
        </h3>
        
        {configured && posts.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('facebook')}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors flex items-center gap-1 ${
                filter === 'facebook' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Facebook className="h-3.5 w-3.5" />
              Facebook
            </button>
            <button
              onClick={() => setFilter('instagram')}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors flex items-center gap-1 ${
                filter === 'instagram' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </button>
          </div>
        )}
      </div>

      {showFollowCards && (
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {/* Facebook Card */}
          <a
            href="https://www.facebook.com/kidpalaceschools"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 md:gap-4 rounded-xl bg-white p-3 md:p-4 shadow-sm transition-all hover:shadow-md hover:bg-blue-50"
          >
            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-110">
              <Facebook className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900">Facebook</h4>
              <p className="text-sm text-gray-500 truncate">@kidpalaceschools</p>
            </div>
            <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/kidpalaceschools"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 md:gap-4 rounded-xl bg-white p-3 md:p-4 shadow-sm transition-all hover:shadow-md hover:bg-pink-50"
          >
            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white transition-transform group-hover:scale-110">
              <Instagram className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900">Instagram</h4>
              <p className="text-sm text-gray-500 truncate">@kidpalaceschools</p>
            </div>
            <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-pink-600 flex-shrink-0" />
          </a>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <RefreshCw className="h-8 w-8 text-primary-600 animate-spin" />
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <AlertCircle className="h-10 w-10 text-red-500 mb-3" />
          <p className="text-gray-600 mb-3">{error}</p>
          <button
            onClick={fetchPosts}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
        </div>
      )}

      {/* Not Configured State */}
      {!loading && !configured && !error && (
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 md:p-8 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <Facebook className="h-8 w-8 text-blue-600" />
            <Instagram className="h-8 w-8 text-pink-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">Live Social Feed Coming Soon</h4>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Our latest posts from Facebook and Instagram will appear here once connected. 
            Click the links above to visit our official pages!
          </p>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && configured && filteredPosts.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Media */}
                {post.mediaUrl && (
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    {post.mediaType === 'VIDEO' ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-900">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    ) : (
                      <img
                        src={post.mediaUrl}
                        alt={post.message || post.caption || 'Social post'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    
                    {/* Platform Badge */}
                    <div className={`absolute top-2 left-2 p-1.5 rounded-lg ${
                      post.platform === 'facebook' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400'
                    }`}>
                      {post.platform === 'facebook' 
                        ? <Facebook className="h-4 w-4 text-white" />
                        : <Instagram className="h-4 w-4 text-white" />
                      }
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  {/* Text-only post header */}
                  {!post.mediaUrl && (
                    <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-white text-xs font-medium mb-3 ${
                      post.platform === 'facebook' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400'
                    }`}>
                      {post.platform === 'facebook' 
                        ? <Facebook className="h-3 w-3" />
                        : <Instagram className="h-3 w-3" />
                      }
                      {post.platform === 'facebook' ? 'Facebook' : 'Instagram'}
                    </div>
                  )}

                  {/* Post text */}
                  {(post.message || post.caption) && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {truncateText(post.message || post.caption || '')}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{formatDate(post.timestamp)}</span>
                    <div className="flex items-center gap-3">
                      {post.likes !== undefined && (
                        <span className="flex items-center gap-1">
                          <Heart className="h-3.5 w-3.5" />
                          {post.likes}
                        </span>
                      )}
                      {post.comments !== undefined && (
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3.5 w-3.5" />
                          {post.comments}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Empty state when configured but no posts */}
      {!loading && configured && filteredPosts.length === 0 && !error && (
        <div className="text-center py-8">
          <p className="text-gray-500">No posts to display</p>
        </div>
      )}
    </div>
  );
};

export default SocialFeed;
