export const client = {
  // Business Details
  name: "Wesley Garden Maintenance",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Tunbridge Wells.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07957 110306",
  email: "",
  website: "",

  // Location
  address: "Tunbridge Wells",
  city: "Tunbridge Wells",
  county: "",
  postcode: "",
  basedIn: "Tunbridge Wells",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Poppy J.", rating: 5, text: "Had Wesley Garden Maintenance do our front and back gardens. The transformation is unreal — went from an embarrassing mess to something out of a magazine. The guys were polite, hardworking, and incredibly skilled.", date: "2 years ago" },
    { name: "Joanne Ward", rating: 5, text: "Top quality work from Wesley Garden Maintenance. They redesigned our outdoor space and it's now our favourite part of the house. The whole family spends so much more time outside now. Couldn't be happier.", date: "3 months ago" },
    { name: "Mandy Green", rating: 5, text: "Absolutely delighted with the work Wesley Garden Maintenance did on our garden. From the initial consultation to the finished result, everything was handled professionally. The team were punctual, tidy, and the quality of workmanship was outstandi...", date: "5 months ago" },
    { name: "Diane Wright", rating: 5, text: "Would give Wesley Garden Maintenance 10 stars if I could. They transformed our tired-looking garden into a beautiful, functional space. The team were a pleasure to deal with and the price was very competitive for Tunbridge Wells.", date: "3 months ago" },
    { name: "Elaine Green", rating: 5, text: "We had Wesley Garden Maintenance come out to completely transform our back garden and we couldn't be happier. They listened to exactly what we wanted and delivered beyond our expectations. The attention to detail was incredible — every edge, every...", date: "4 months ago" },
    { name: "Tony King", rating: 5, text: "We found Wesley Garden Maintenance online and after reading about their work, decided to give them a call. So glad we did — the garden has been completely transformed. Professional from start to finish.", date: "4 months ago" },
    { name: "Scott H.", rating: 5, text: "Used Wesley Garden Maintenance for landscaping work at our property in Tunbridge Wells. The team were friendly, professional and clearly know their trade inside out. The finished result exceeded what we'd imagined. Will definitely be using them ag...", date: "a year ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Wesley Garden Maintenance | Landscaper in Tunbridge Wells",
    description: "Professional landscaper in Tunbridge Wells. 5.0-star rated on Google. Call for a free quote.",
  },
};
