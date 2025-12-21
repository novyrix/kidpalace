// Social Feed Types
export interface SocialPost {
  id: string;
  platform: 'facebook' | 'instagram';
  message?: string;
  caption?: string;
  mediaUrl?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' | 'TEXT';
  permalink: string;
  timestamp: string;
  likes?: number;
  comments?: number;
}

export interface SocialFeedResponse {
  configured: boolean;
  cached?: boolean;
  message?: string;
  error?: string;
  posts: SocialPost[];
}
