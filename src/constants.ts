import type { PageContent } from "./types";

// Placeholder paths until all images are generated
// We will simply reference them by the names we expect to exist in public/image/
export const PAGES_DATA: Record<string, PageContent> = {
  home: {
    id: "home",
    title: "Stories That Move You",
    subtitle: "Unlimited Mini-Series created by independent creators",
    description:
      "Discover a world of independent cinema. From gritty dramas to mind-bending sci-fi, experience the next generation of storytelling.",
    backgroundImage: "/image/home_bg.png",
  },
  about: {
    id: "about",
    title: "About Us",
    subtitle: "Crafting Stories That Matter",
    description:
      "We are an independent creative force dedicated to producing mini-series that challenge conventions. From concept to screen, we breathe life into narratives that demand to be told.",
    backgroundImage: "/image/about_bg.png",
  },
  team: {
    id: "team",
    title: "Our Team",
    subtitle: "Visionaries & Creators",
    description:
      "Meet the directors, writers, and artists behind the scenes. A collective of passionate storytellers united by a single vision.",
    backgroundImage: "/image/team_bg.png",
  },
  productions: {
    id: "productions",
    title: "Productions",
    subtitle: "Original Mini-Series",
    description:
      "Explore our catalog of genre-bending series. Thrillers, dramas, sci-fi, and more. Binge-worthy content curated for the bold.",
    backgroundImage: "/image/productions_bg.png",
  },
  plans: {
    id: "plans",
    title: "Plans",
    subtitle: "Join the Revolution",
    description:
      "Support independent creators. Choose a plan that fits your viewing habits and get exclusive behind-the-scenes access.",
    backgroundImage: "/image/plans_bg.png",
  },
  watch: {
    id: "watch",
    title: "Watch Now",
    subtitle: "Stream Anywhere",
    description:
      "Dive into our latest releases. No ads, just pure storytelling. Available on all your favorite devices.",
    backgroundImage: "/image/watch_bg.png",
  },
};

export const NAV_LINKS = [
  { path: "/about", label: "About" },
  { path: "/team", label: "Our Team" },
  { path: "/productions", label: "Productions" },
  { path: "/plans", label: "Plans" },
  { path: "/watch", label: "Watch Now" },
];
