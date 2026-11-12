/*
 * Site content.
 *
 * Copy lives here, not in components. Anything wrapped in [square brackets]
 * or flagged `placeholder: true` is unverified dummy content. Replace it
 * before launch. Do not add career facts, stats, teams or sponsors here
 * until Claire has confirmed them.
 */

export const site = {
  name: "Claire O'Sullivan",
  shortName: "C. O'Sullivan",
  number: "18", // visible on the supplied hero photograph
  description:
    "The official home of professional baseball player Claire O'Sullivan. Competitor, coach, always working towards the next level.",
  instagram: {
    handle: "@[instagram-handle]", // PLACEHOLDER
    url: "https://www.instagram.com/", // PLACEHOLDER: replace with profile URL
  },
  contactEmail: "[enquiries@domain]", // PLACEHOLDER
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/coaching", label: "Coaching" },
  { href: "/contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Professional baseball player",
  firstName: "Claire",
  lastName: "O'Sullivan",
  tagline: "Built to compete.",
  // Alternatives from the brief:
  // "Different game. Same drive."
  // "Built for the big moments."
  copy: "Professional baseball player. Competitor. Coach. Always working towards the next level.",
  primaryCta: { label: "Explore my journey", href: "/career" },
  secondaryCta: { label: "Coaching enquiries", href: "/contact#coaching" },
  image: {
    src: "/images/claire-osullivan-hero.jpg",
    alt: "Claire O'Sullivan pitching in her blue number 18 uniform",
    // Tailwind object-position classes (mobile, then large screens), tuned so
    // Claire's face stays clear of the headline. Must be literal class names.
    objectPositionClass: "object-[48%_30%] lg:object-[62%_35%]",
  },
};

export const experience = {
  eyebrow: "On the field",
  heading: "Professional experience",
  copy: "Experience competing in professional baseball environments in the United States and Japan. Different leagues, different cultures, the same standard every time she takes the mound.",
  regions: [
    { name: "USA", detail: "[Team / league to be confirmed]" },
    { name: "Japan", detail: "[Team / league to be confirmed]" },
  ],
  stats: [
    { value: "[00]", label: "Seasons", placeholder: true },
    { value: "[00]", label: "Appearances", placeholder: true },
    { value: "[00]", label: "Countries played", placeholder: true },
  ],
};

export const coaching = {
  eyebrow: "Private coaching",
  heading: "Specialised. Personal. Results-driven.",
  copy: "One-on-one baseball coaching built around the player in front of her. Lessons drawn from professional dugouts in America and Japan, broken down so they actually stick.",
  cta: { label: "Book a session", href: "/contact#coaching" },
  disciplines: [
    {
      number: "01",
      name: "Pitching",
      copy: "Develop mechanics, build velocity and improve control.",
    },
    {
      number: "02",
      name: "Hitting",
      copy: "Improve technique, create better contact and build consistency.",
    },
    {
      number: "03",
      name: "Fielding",
      copy: "Sharpen footwork, reaction time and game awareness.",
    },
  ],
  pillars: [
    "Technique and performance",
    "Mental approach",
    "Game awareness",
    "Personal development",
  ],
};

export const nextUp = {
  eyebrow: "What's next",
  heading: "On deck",
  items: [
    {
      kind: "Upcoming competition",
      title: "[Competition name]",
      meta: "[Date] · [Location]",
      copy: "Details to be announced. Follow along on Instagram for the latest.",
      href: "/career",
      feature: true,
    },
    {
      kind: "Featured media",
      title: "[Interview / feature title]",
      meta: "[Publication]",
      copy: "Placeholder for a featured interview, podcast or article.",
      href: "/about",
    },
    {
      kind: "Partnerships",
      title: "[Sponsor announcement]",
      meta: "Partnership",
      copy: "Placeholder for a sponsorship or brand partnership announcement.",
      href: "/contact#sponsorship",
    },
  ],
};

export const social = {
  heading: "Follow the journey.",
  copy: "From the field to the moments in between. Follow along for baseball, training, competition and everything that comes with the game.",
  cta: "Follow on Instagram",
  // Six placeholder tiles. Swap for real posts or an embed later.
  tiles: [
    { caption: "Game day" },
    { caption: "Bullpen" },
    { caption: "Training" },
    { caption: "On the road" },
    { caption: "Coaching" },
    { caption: "Off the field" },
  ],
};

export const enquiries = [
  {
    id: "coaching",
    title: "Coaching enquiries",
    copy: "Private one-on-one sessions in pitching, hitting and fielding. Tell Claire about the player, their level and what they want to work on.",
  },
  {
    id: "sponsorship",
    title: "Sponsorship & partnerships",
    copy: "Brand partnerships, equipment and sponsorship opportunities.",
  },
  {
    id: "media",
    title: "Media",
    copy: "Interviews, features, appearances and speaking.",
  },
] as const;

/*
 * Photography slots. Drop each file into /public at its path and it replaces
 * the labelled placeholder automatically (checked at build time). Alt text
 * describes the intended shot; update it to match the real photograph.
 */
export const images = {
  homeWide: {
    src: "/images/home-wide.jpg",
    alt: "Claire O'Sullivan in her leg kick on the mound",
    label: "Full-width action photograph",
    objectPosition: "48% 35%",
  },
  coaching: {
    src: "/images/coaching.jpg",
    alt: "Claire O'Sullivan driving through a swing at the plate",
    label: "Coaching photograph (portrait)",
    objectPosition: "55% 40%",
  },
  nextUp: [
    { src: "/images/next-up-competition.jpg", alt: "Claire O'Sullivan batting in front of the dugout", label: "Competition photograph", objectPosition: "45% 45%" },
    { src: "/images/next-up-media.jpg", alt: "Featured media", label: "Media photograph" },
    { src: "/images/next-up-partnership.jpg", alt: "Partnership announcement", label: "Partnership photograph" },
  ],
  instagram: [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/images/instagram-${n}.jpg`,
    label: `Instagram photograph ${n}`,
  })),
  aboutLead: { src: "/images/about-lead.jpg", alt: "Claire O'Sullivan", label: "About: lead photograph" },
  aboutPortrait: { src: "/images/about-portrait.jpg", alt: "Portrait of Claire O'Sullivan", label: "Portrait photograph" },
  careerLead: { src: "/images/career-lead.jpg", alt: "Claire O'Sullivan pitching in competition", label: "Career: lead photograph" },
  coachingLead: { src: "/images/coaching-lead.jpg", alt: "Claire O'Sullivan during a coaching session", label: "Coaching: lead photograph" },
  contactLead: { src: "/images/contact-lead.jpg", alt: "Claire O'Sullivan", label: "Contact: lead photograph" },
};
