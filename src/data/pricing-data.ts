export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Perfect for getting started.",
    price: "$0",
    period: "/month",
    features: [
      "Up to 3 projects",
      "Basic task management",
      "List view",
      "Basic collaboration",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    description: "For individuals who want more.",
    price: "$9",
    period: "/month",
    features: [
      "Unlimited projects",
      "Advanced task management",
      "List and Board views",
      "AI-powered productivity",
      "Priority support",
    ],
    buttonText: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Team",
    description: "For teams that work together.",
    price: "$19",
    period: "/month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Shared workspaces",
      "Team performance reports",
      "Dedicated support",
    ],
    buttonText: "Choose Team",
  },
];