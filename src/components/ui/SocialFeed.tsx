import { Facebook, Instagram, ExternalLink } from 'lucide-react';

interface SocialFeedProps {
  className?: string;
}

const SocialFeed = ({ className = '' }: SocialFeedProps) => {
  return (
    <div className={`bg-gray-50 rounded-2xl p-6 ${className}`}>
      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gray-900 mb-6">
        Follow Us on Social Media
      </h3>
      <p className="text-gray-600 mb-6">
        Stay connected with Kidpalace Schools! Follow us on our social media platforms for the latest updates, photos, and announcements.
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Facebook Card */}
        <a
          href="https://www.facebook.com/kidpalaceschools"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md hover:bg-blue-50"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-110">
            <Facebook className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">Facebook</h4>
            <p className="text-sm text-gray-500">@kidpalaceschools</p>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/kidpalaceschools"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md hover:bg-pink-50"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white transition-transform group-hover:scale-110">
            <Instagram className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">Instagram</h4>
            <p className="text-sm text-gray-500">@kidpalaceschools</p>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-pink-600" />
        </a>
      </div>

      {/* Embedded Feed Placeholder */}
      <div className="mt-6 rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <Facebook className="h-8 w-8 text-blue-600" />
          <Instagram className="h-8 w-8 text-pink-600" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-2">Live Social Feed</h4>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Our latest posts from Facebook and Instagram will appear here. 
          Click the links above to visit our official pages and follow us for updates!
        </p>
      </div>

      {/* Note about integration */}
      <p className="mt-4 text-xs text-gray-400 text-center">
        For live feed integration, contact your web administrator to set up Facebook/Instagram API connections.
      </p>
    </div>
  );
};

export default SocialFeed;
