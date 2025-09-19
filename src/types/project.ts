export interface ProjectImage {
  url: string;
  source: string;
  alt?: string;
}

export interface CTALinks {
  details?: string;
  book?: string;
  plan?: string;
}

export interface MapCoords {
  lat: number;
  lng: number;
}

export interface Project {
  id: string;
  developer: string;
  name: string;
  slug: string;
  type: 'Residential' | 'Commercial'; // Added property type
  short_desc: string;
  meta_desc: string;
  long_desc: string;
  images: ProjectImage[];
  status: 'pre-launch' | 'development' | 'available' | 'sold-out' | 'developed';
  plot_sizes: string[];
  features: string[];
  cta_links: CTALinks;
  map_coords?: MapCoords;
  source_urls: string[];
  location: string;
  city: string;
}

export interface CompanyProfile {
  id: string;
  company_name: string;
  tagline: string;
  ceo: {
    name: string;
    title: string;
    bio?: string;
    image?: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  team: Array<{
    name: string;
    role: string;
    description?: string;
    image?: string;
  }>;
  services: string[];
  specialFeatures?: string[];
}
