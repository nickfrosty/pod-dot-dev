/*
	Static configuration settings for use around the apps
*/

export const SITE = {
  name: "pod.dev",
  domain: "pod.dev",
  url:
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : "https://pod.dev",
};

export const SOCIAL = {
  twitter: "nickfrosty",
  github: "nickfrosty",
  indiehackers: "nickfrosty",
};

export default SITE;

export const SITE_ADDR = "https://pod.dev";

export const META_TITLE_SEPARATOR = "–";
