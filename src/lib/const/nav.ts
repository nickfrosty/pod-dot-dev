/**
 * Common navigation routes (like those used in the primary nav)
 */

enum NavRouteNames {
  hosts = "hosts",
  // podcast = "podcast",
  episodes = "episodes",
  listen = "listen",
}

export const NAV_ROUTES: { [key in NavRouteNames]: LinkDetails } = {
  hosts: {
    title: "Meet the Hosts",
    href: "/hosts",
    description: "Who are the hosts",
  },
  episodes: {
    title: "Browse Episodes",
    href: "/episodes",
    description: "Browse previous podcast episodes",
  },
  listen: {
    title: "Where to Listen",
    href: "/listen",
    description: "Where to listen to the podcast",
  },
  // podcast: {
  //   title: "Podcast",
  //   href: "/podcast",
  //   // description: "",
  // },
};
