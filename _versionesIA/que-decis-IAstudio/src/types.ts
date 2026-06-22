export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name mapping
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  isVerified: boolean;
  avatarInitials: string;
}

export interface PhraseCategory {
  id: string;
  name: string;
  phrases: string[];
}
