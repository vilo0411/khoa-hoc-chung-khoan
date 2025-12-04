export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export interface Module {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}