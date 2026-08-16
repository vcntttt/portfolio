export type PortfolioCategory =
  | "professional"
  | "product"
  | "academic"
  | "research";

export type PortfolioStatus =
  | "live"
  | "delivered"
  | "in-progress"
  | "finished"
  | "private";

export interface PortfolioLink {
  label: string;
  href: string;
}

export interface PortfolioEntry {
  slug: string;
  title: string;
  category: PortfolioCategory;
  status: PortfolioStatus;
  date: string;
  summary?: string;
  context?: string;
  role?: string;
  scope?: string;
  outcome?: string;
  highlights?: string[];
  links?: PortfolioLink[];
  image?: ImageMetadata;
  spotlightImage?: ImageMetadata;
  featured?: boolean;
}

export interface Experience {
  title: string;
  organization: string;
  organizationUrl?: string;
  date: string;
  location?: string;
  description: string;
  current?: boolean;
}

export interface Credential {
  title: string;
  issuer: string;
  icon?: string;
  date?: string;
  detail?: string;
  description?: string;
  link?: string;
  featured?: boolean;
}
