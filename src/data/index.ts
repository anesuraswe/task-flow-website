import {
  BrainCircuit,
  FolderKanban,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
];

export const features: Feature[] = [
  {
    title: "AI-Powered Productivity",
    description:
      "Work smarter with AI-assisted task organization, prioritization, and productivity insights.",
    icon: BrainCircuit,
  },
  {
    title: "Project Management",
    description:
      "Manage multiple projects, organize tasks, and monitor your progress from one central workspace.",
    icon: FolderKanban,
  },
  {
    title: "Flexible Task Views",
    description:
      "Switch between List and Board layouts to organize your tasks in the way that works best for you.",
    icon: LayoutDashboard,
  },
];
