import type { VercelRequest, VercelResponse } from '@vercel/node';

// Types for social media posts
interface SocialPost {
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

interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
  likes?: { summary: { total_count: number } };
  comments?: { summary: { total_count: number } };
}

interface InstagramMedia {
  id: string;
  caption?: string;
  media_url?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

// Cache for storing fetched posts (in-memory, resets on cold start)
let cachedPosts: SocialPost[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchFacebookPosts(accessToken: string, pageId: string): Promise<SocialPost[]> {
  try {
    const fields = 'id,message,full_picture,permalink_url,created_time,likes.summary(true),comments.summary(true)';
    const url = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=${fields}&limit=6&access_token=${accessToken}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Facebook API Error:', error);
      return [];
    }
    
    const data = await response.json();
    
    return (data.data || []).map((post: FacebookPost) => ({
      id: post.id,
      platform: 'facebook' as const,
      message: post.message,
      mediaUrl: post.full_picture,
      mediaType: post.full_picture ? 'IMAGE' : 'TEXT',
      permalink: post.permalink_url,
      timestamp: post.created_time,
      likes: post.likes?.summary?.total_count || 0,
      comments: post.comments?.summary?.total_count || 0,
    }));
  } catch (error) {
    console.error('Error fetching Facebook posts:', error);
    return [];
  }
}

async function fetchInstagramPosts(accessToken: string, igUserId: string): Promise<SocialPost[]> {
  try {
    const fields = 'id,caption,media_url,media_type,permalink,timestamp,like_count,comments_count';
    const url = `https://graph.facebook.com/v18.0/${igUserId}/media?fields=${fields}&limit=6&access_token=${accessToken}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Instagram API Error:', error);
      return [];
    }
    
    const data = await response.json();
    
    return (data.data || []).map((media: InstagramMedia) => ({
      id: media.id,
      platform: 'instagram' as const,
      caption: media.caption,
      mediaUrl: media.media_url,
      mediaType: media.media_type,
      permalink: media.permalink,
      timestamp: media.timestamp,
      likes: media.like_count || 0,
      comments: media.comments_count || 0,
    }));
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get environment variables
  const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
  const FB_PAGE_ID = process.env.FB_PAGE_ID;
  const IG_USER_ID = process.env.IG_USER_ID;

  // Check if API is configured
  if (!FB_ACCESS_TOKEN) {
    return res.status(200).json({
      configured: false,
      message: 'Social feed API not configured. Add FB_ACCESS_TOKEN to environment variables.',
      posts: [],
    });
  }

  // Check cache
  const now = Date.now();
  if (cachedPosts.length > 0 && (now - lastFetchTime) < CACHE_DURATION) {
    return res.status(200).json({
      configured: true,
      cached: true,
      posts: cachedPosts,
    });
  }

  try {
    const posts: SocialPost[] = [];

    // Fetch Facebook posts
    if (FB_PAGE_ID) {
      const fbPosts = await fetchFacebookPosts(FB_ACCESS_TOKEN, FB_PAGE_ID);
      posts.push(...fbPosts);
    }

    // Fetch Instagram posts
    if (IG_USER_ID) {
      const igPosts = await fetchInstagramPosts(FB_ACCESS_TOKEN, IG_USER_ID);
      posts.push(...igPosts);
    }

    // Sort by timestamp (newest first)
    posts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Update cache
    cachedPosts = posts;
    lastFetchTime = now;

    return res.status(200).json({
      configured: true,
      cached: false,
      posts: posts.slice(0, 12), // Return max 12 posts
    });
  } catch (error) {
    console.error('Social feed error:', error);
    return res.status(500).json({
      configured: true,
      error: 'Failed to fetch social feed',
      posts: cachedPosts, // Return cached data on error
    });
  }
}
