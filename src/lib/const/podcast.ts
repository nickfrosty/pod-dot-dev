/*
  Specific constants for the podcast
*/

/**
 * Location where people can find the episodes for the podcast
 */
export type PodcastFeedLocation = {
  label: string;
  href: string;
  icon: string;
};

/**
 * Location where people can rate the podcast
 */
export type PodcastRatingLocation = {
  label: string;
  href: string;
  icon: string;
};

export type Person = {
  name: string;
  img?: string;
  twitter: string;
  github?: string;
  website?: string;
  title?: string;
  bio?: string;
};

// export const PODCAST_FEED_LOCATIONS: PodcastFeedLocation[] = [
//   {
//     label: "RSS feed",
//     href: "/rss",
//     icon: "/icons/rss.svg",
//   },
//   {
//     label: "Apple Podcast",
//     href: "/apple",
//     icon: "/icons/apple.svg",
//   },
//   {
//     label: "Spotify",
//     href: "/spotify",
//     icon: "/icons/spotify.svg",
//   },
//   {
//     label: "PocketCasts",
//     href: "/pocketcasts",
//     icon: "/icons/pocketcasts.svg",
//   },
//   {
//     label: "YouTube",
//     href: "/youtube",
//     icon: "/icons/youtube.svg",
//   },
// ];

export const PODCAST_RATING_LOCATIONS: PodcastRatingLocation[] = [
  {
    label: "Apple Podcast",
    href: "https://podcasts.apple.com/us/podcast/pod-dev-startup-businesses-on-blockchain/id1751165138",
    icon: "/icons/apple.svg",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/5meBzwbt0vJvTBmv6RroMr",
    icon: "/icons/spotify.svg",
  },
];
