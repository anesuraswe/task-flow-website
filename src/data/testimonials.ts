// src/data/testimonials.ts

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maxy Chikuwira",
    role: "Project Manager",
    company: "Neurofox Technologies",
    initials: "MC",
    rating: 5,
    quote:
      "TaskFlow has completely transformed how I manage my projects. Everything is organized in one place, and I never miss important deadlines.",
  },
  {
    name: "Anesu Nyamajiwa",
    role: "Software Developer",
    company: "Vivid Designs",
    initials: "AN",
    rating: 5,
    quote:
      "I love how simple and intuitive TaskFlow is. The board layout makes tracking tasks effortless, and it has improved my daily productivity.",
  },
  {
    name: "Deloris Chimuka",
    role: "Teacher",
    company: "Elevate Group of Schools",
    initials: "DC",
    rating: 5,
    quote:
      "Managing a team used to be complicated. With TaskFlow, we can collaborate, track progress, and keep everyone on the same page.",
  },
];