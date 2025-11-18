import { MemoryItem, TimelineEvent, FutureDream } from './types';

export const MEMORIES: MemoryItem[] = [
  { id: 1, src: "https://firebasestorage.googleapis.com/v0/b/llm-frontend-prod.appspot.com/o/user-images%2Fp-20240523-195932-0545%2Fgenerated_1.jpeg?alt=media&token=e95963e6-1c7b-402a-9f50-3d5f1e149f12", alt: "A beautiful memory with Radhu in a red room" },
  { id: 2, src: "https://firebasestorage.googleapis.com/v0/b/llm-frontend-prod.appspot.com/o/user-images%2Fp-20240523-195932-0545%2Fgenerated_2.jpeg?alt=media&token=c426214b-70c8-47e9-a477-8d0f1710972e", alt: "A sweet black and white memory" },
  { id: 3, src: "https://firebasestorage.googleapis.com/v0/b/llm-frontend-prod.appspot.com/o/user-images%2Fp-20240523-195932-0545%2Fgenerated_3.jpeg?alt=media&token=9635e954-472c-474c-8f9f-689e3776b2c2", alt: "A sunny day with palm trees" },
  { id: 4, src: "https://firebasestorage.googleapis.com/v0/b/llm-frontend-prod.appspot.com/o/user-images%2Fp-20240523-195932-0545%2Fgenerated_4.jpeg?alt=media&token=818c3533-3d71-49e5-b1a7-e1c070f80721", alt: "A fun elevator selfie" },
  { id: 5, src: "https://firebasestorage.googleapis.com/v0/b/llm-frontend-prod.appspot.com/o/user-images%2Fp-20240523-195932-0545%2Fgenerated_5.jpeg?alt=media&token=87d7b1d6-84d4-42b7-84c4-726887565437", alt: "A cozy hug at night" },
  { id: 6, src: "https://firebasestorage.googleapis.com/v0/b/llm-frontend-prod.appspot.com/o/user-images%2Fp-20240523-195932-0545%2Fgenerated_6.jpeg?alt=media&token=3b5c464e-0a5f-4a0b-80a5-3a0595301886", alt: "A cute selfie with heart filters" },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "5 Years Ago",
    title: "Our First Date at Radhika Sweets",
    description: "Who knew a simple kachori could be the start of our beautiful forever story? My heart knew right then and there that you were special.",
  },
  {
    year: "Our Journey",
    title: "Lunch Dates at Origin",
    description: "Sharing meals and laughter at Origin became our little tradition. Every lunch with you feels like a mini-celebration of us.",
  },
  {
    year: "Countless Miles",
    title: "Long Drives & Naturals Ice Cream",
    description: "The endless roads, our favorite songs, and a sweet scoop of ice cream from Naturals. Those drives with you are my favorite escape.",
  },
  {
    year: "Foodie Partners",
    title: "Momos at King Momos & Dahi Puri at Nandan",
    description: "From spicy momos to tangy dahi puri, we've explored it all. Being your foodie partner-in-crime is the best adventure.",
  },
  {
    year: "Morning Rituals",
    title: "Jogging at Krushi Nagar",
    description: "Even a simple morning jog feels magical with you by my side. Chasing sunrises and fitness goals together... what could be better?",
  },
  {
    year: "Today",
    title: "5 Years of Unforgettable Love",
    description: "Five years have flown by, filled with more love and happiness than I could have ever imagined. I cherish every single moment, Radhu.",
  },
];

export const REASONS_I_LOVE_YOU: string[] = [
  "Your smile lights up my entire world.",
  "The way you laugh at my silly jokes.",
  "Your kindness and compassion for everyone.",
  "How you always know how to make me feel better.",
  "Our endless conversations about everything and nothing.",
  "You're my biggest supporter and my greatest fan.",
  "The way your eyes sparkle when you're excited.",
  "For being the most amazing foodie partner!",
];

export const FUTURE_DREAMS: FutureDream[] = [
    {
        icon: 'plane',
        title: "Explore the World Together",
        description: "From the streets of Paris to the beaches of Bali, I can't wait to see the world with you by my side.",
    },
    {
        icon: 'food',
        title: "Endless Food Adventures",
        description: "Continuing our quest to find the best momos, the sweetest ice cream, and every delicious bite in between.",
    },
    {
        icon: 'road',
        title: "Countless More Road Trips",
        description: "Discovering new roads and new favorite songs, with you as my forever co-pilot.",
    },
    {
        icon: 'home',
        title: "Build Our Cozy Haven",
        description: "Creating a home that's filled with love, laughter, and the smell of your favorite comfort food.",
    },
    {
        icon: 'stars',
        title: "Watch the Northern Lights",
        description: "Holding you close under a sky full of dancing lights, making a wish for our forever.",
    },
    {
        icon: 'heart',
        title: "Grow Old & Grey",
        description: "Still holding hands, still going for morning jogs, and still loving you more each and every day.",
    }
];