export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  image?: string;
  video?: string;
  /** Alternate image used as the Work grid cover instead of `image`, when set. */
  coverImage?: string;
  /** Lighter video used as the Work grid cover instead of `video`, when set. */
  coverVideo?: string;
  alt: string;
}

export const projects: Project[] = [
  {
    slug: "talebook-autotag",
    title: "Autotag",
    subtitle: "Talebook",
    year: "2023",
    image: "talebookAutotag",
    coverImage: "talebook-autotag-cover",
    alt: "Browser mockup of the Talebook usability study screen with the Autotag sidebar",
  },
  {
    slug: "comm-bud",
    title: "Comm-Bud",
    subtitle: "Hackathon 'Build the Beauty'",
    year: "2023",
    image: "commBud",
    coverImage: "comm-bud-cover",
    alt: "Three phone mockups of the Comm Bud contractor profile and booking confirmation screens on a green background",
  },
  {
    slug: "kineto-branding-presentation",
    title: "Kineto branding presentation",
    subtitle: "Kineto",
    year: "2026",
    video: "kineto-branding-presentation",
    coverVideo: "kineto-branding-presentation-cover",
    alt: "Kineto brand identity motion presentation",
  },
  {
    slug: "cubic-loader",
    title: "Cubic loader",
    subtitle: "Personal work",
    year: "2026",
    video: "cubic-loader",
    alt: "Looping isometric cube loader animation",
  },
  {
    slug: "money-float",
    title: "Money float",
    subtitle: "Personal work",
    year: "2026",
    video: "money-float",
    alt: "Looping animation of floating money",
  },
  {
    slug: "march-for-science",
    title: "March for Science",
    subtitle: "Foundation of Digital Competences",
    year: "2024",
    image: "marchForScience",
    coverImage: "march-for-science-cover",
    alt: "Screenshot of the redesigned March for Science Foundation website homepage",
  },
];
