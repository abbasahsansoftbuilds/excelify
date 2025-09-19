import { Project, CompanyProfile } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'capital-smart-city',
    developer: 'Future Development Holdings (FDH)',
    name: 'Capital Smart City',
    slug: 'capital-smart-city',
    type: 'Residential', // Added property type
    short_desc: "Pakistan's first smart city with cutting-edge technology and sustainable infrastructure in Islamabad",
    meta_desc: 'Capital Smart City - Pakistan\'s first smart city offering residential plots with modern amenities, smart infrastructure, and sustainable development in Islamabad.',
    long_desc: `Capital Smart City represents the future of urban living in Islamabad. As Pakistan's first smart city, it combines cutting-edge technology with sustainable development practices. Located on the main GT Road near Islamabad, this revolutionary project offers residents a lifestyle that seamlessly integrates modern conveniences with environmental consciousness.

The city features smart home automation, fiber optic connectivity, renewable energy systems, and intelligent traffic management. With its prime location just 9.2 km from New Islamabad International Airport, Capital Smart City provides excellent connectivity while maintaining a peaceful, green environment.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?w=600&h=400&fit=crop&crop=building',
        source: 'capital-smart-city',
        alt: 'Capital Smart City aerial view'
      }
    ],
    status: 'development',
    plot_sizes: ['5 Marla', '7 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
    features: [
      'Smart Home Automation',
      'Fiber Optic Internet',
      'Solar Energy System',
      'Intelligent Traffic Management',
      'Green Building Standards',
      'Smart Water Management'
    ],
    cta_links: {
      details: '/projects/capital-smart-city',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.6844,
      lng: 73.0479
    },
    source_urls: [
      'https://capitalsmartcity.pk'
    ],
    location: 'GT Road, Islamabad',
    city: 'Islamabad'
  },
  {
    id: 'bahria-town-rawalpindi',
    developer: 'Bahria Town',
    name: 'Bahria Town Rawalpindi',
    slug: 'bahria-town-rawalpindi',
    type: 'Residential',
    short_desc: 'Pakistan\'s largest private development with international standards and complete facilities',
    meta_desc: 'Bahria Town Rawalpindi - Premium residential community with golf course, shopping mall, international school and world-class amenities.',
    long_desc: `Bahria Town Rawalpindi is Pakistan's largest privately developed residential community, offering international living standards with comprehensive facilities. This mega project spans thousands of acres and provides residents with a complete lifestyle solution including residential plots, villas, commercial areas, and recreational facilities.

The development features a championship golf course, international school, shopping mall, hospital complex, and numerous parks. With its gated community concept and 24/7 security, Bahria Town ensures a safe and comfortable living environment for families.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&crop=building',
        source: 'bahria-town',
        alt: 'Bahria Town Rawalpindi main entrance'
      }
    ],
    status: 'developed',
    plot_sizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal', '4 Kanal'],
    features: [
      'Golf Course',
      'Shopping Mall',
      'International School',
      'Hospital Complex',
      '24/7 Security',
      'Gated Community',
      'Parks & Recreation',
      'Mosque & Community Center'
    ],
    cta_links: {
      details: '/projects/bahria-town-rawalpindi',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.5205,
      lng: 73.1363
    },
    source_urls: [
      'https://bahriatown.com'
    ],
    location: 'Bahria Town, Rawalpindi',
    city: 'Rawalpindi'
  },
  {
    id: 'dha-islamabad',
    developer: 'Defense Housing Authority',
    name: 'DHA Islamabad',
    slug: 'dha-islamabad',
    type: 'Residential',
    short_desc: 'Defense Housing Authority\'s premium development with military-standard security and infrastructure',
    meta_desc: 'DHA Islamabad - Premium residential plots with military-standard security, modern infrastructure and prime location in Islamabad.',
    long_desc: `DHA Islamabad offers premium residential living with military-standard security and world-class infrastructure. Developed by the Defense Housing Authority, this project ensures the highest quality of construction and amenities for residents.

Located in prime areas of Islamabad, DHA provides excellent connectivity to major business districts, educational institutions, and commercial centers. The development features wide roads, modern utilities, parks, commercial areas, and community facilities designed to meet international standards.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&h=400&fit=crop&crop=building',
        source: 'dha-islamabad',
        alt: 'DHA Islamabad residential area'
      }
    ],
    status: 'developed',
    plot_sizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
    features: [
      'Military-Standard Security',
      'Prime Location',
      'Modern Infrastructure',
      'Wide Roads',
      'Underground Utilities',
      'Commercial Areas',
      'Parks & Playgrounds',
      'Community Mosque'
    ],
    cta_links: {
      details: '/projects/dha-islamabad',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.6073,
      lng: 73.0515
    },
    source_urls: [
      'https://dha.gov.pk'
    ],
    location: 'DHA, Islamabad',
    city: 'Islamabad'
  },
  {
    id: 'rudn-enclave',
    developer: 'RUDN Group',
    name: 'RUDN Enclave',
    slug: 'rudn-enclave',
    type: 'Residential',
    short_desc: 'Modern residential community with international standards and excellent amenities',
    meta_desc: 'RUDN Enclave - A modern residential development offering quality plots with excellent amenities and strategic location near Islamabad.',
    long_desc: `RUDN Enclave represents a modern approach to residential development, combining contemporary design with practical amenities. Located strategically near Islamabad, this development offers residents the perfect balance of urban convenience and peaceful suburban living.

The project features well-planned residential blocks with modern infrastructure, including wide roads, proper drainage, electricity, gas, and water supply. RUDN Enclave is designed to cater to modern families' needs with parks, commercial areas, and community facilities.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop&crop=building',
        source: 'rudn-enclave',
        alt: 'RUDN Enclave development'
      }
    ],
    status: 'development',
    plot_sizes: ['5 Marla', '7 Marla', '10 Marla', '1 Kanal'],
    features: [
      'Modern Infrastructure',
      'Prime Location',
      'Quality Construction',
      'Community Parks',
      'Commercial Area',
      'Security System',
      'Utilities Available',
      'Investment Potential'
    ],
    cta_links: {
      details: '/projects/rudn-enclave',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.5651,
      lng: 73.1946
    },
    source_urls: [
      'https://rudn.pk'
    ],
    location: 'Ring Road, Rawalpindi',
    city: 'Rawalpindi'
  },
  {
    id: 'new-city-paradise',
    developer: 'New City Developers',
    name: 'New City Paradise',
    slug: 'new-city-paradise',
    type: 'Residential',
    short_desc: 'Contemporary residential project offering modern living with family-friendly environment',
    meta_desc: 'New City Paradise - Modern residential plots with contemporary design and family-friendly amenities in Islamabad.',
    long_desc: `New City Paradise offers contemporary residential living with modern design and family-friendly amenities. This development focuses on creating a peaceful community environment while providing easy access to urban facilities.

The project features well-planned residential blocks, green spaces, community parks, and modern infrastructure. With its strategic location and affordable pricing, New City Paradise represents an excellent investment opportunity for families and investors alike.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=building',
        source: 'new-city-paradise',
        alt: 'New City Paradise residential area'
      }
    ],
    status: 'development',
    plot_sizes: ['3 Marla', '5 Marla', '7 Marla', '10 Marla'],
    features: [
      'Modern Design',
      'Family Community',
      'Green Spaces',
      'Easy Access',
      'Affordable Pricing',
      'Planned Infrastructure',
      'Community Center',
      'Playgrounds'
    ],
    cta_links: {
      details: '/projects/new-city-paradise',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.6293,
      lng: 73.0112
    },
    source_urls: [
      'https://newcityparadise.pk'
    ],
    location: 'Islamabad Highway, Islamabad',
    city: 'Islamabad'
  },
  {
    id: 'faisal-town',
    developer: 'Faisal Town Developers',
    name: 'Faisal Town',
    slug: 'faisal-town',
    type: 'Residential',
    short_desc: 'Established residential community with excellent connectivity and modern amenities',
    meta_desc: 'Faisal Town - Well-established residential development with excellent connectivity and comprehensive amenities in Islamabad.',
    long_desc: `Faisal Town is a well-established residential community known for its excellent connectivity and comprehensive amenities. Located in a prime area of Islamabad, this development offers residents easy access to major commercial centers, educational institutions, and healthcare facilities.

The community features wide roads, proper utilities, parks, mosques, and commercial areas. With its mature infrastructure and strategic location, Faisal Town continues to be a preferred choice for families seeking quality residential options.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=building',
        source: 'faisal-town',
        alt: 'Faisal Town community'
      }
    ],
    status: 'developed',
    plot_sizes: ['5 Marla', '10 Marla', '1 Kanal'],
    features: [
      'Excellent Connectivity',
      'Mature Infrastructure',
      'Commercial Centers',
      'Educational Facilities',
      'Healthcare Access',
      'Parks & Recreation',
      'Public Transport',
      'Security Services'
    ],
    cta_links: {
      details: '/projects/faisal-town',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.6512,
      lng: 73.1544
    },
    source_urls: [
      'https://faisaltown.pk'
    ],
    location: 'Faisal Town, Islamabad',
    city: 'Islamabad'
  },
  {
    id: 'blue-area-commercial',
    developer: 'Various Developers',
    name: 'Blue Area Commercial',
    slug: 'blue-area-commercial',
    type: 'Commercial',
    short_desc: 'Prime commercial district with office buildings, shopping centers and business facilities',
    meta_desc: 'Blue Area Commercial - Premier commercial district in Islamabad offering office spaces, retail outlets and business facilities.',
    long_desc: `Blue Area is Islamabad's premier commercial district, housing the city's major business centers, corporate offices, shopping plazas, and commercial facilities. This central business district offers excellent investment opportunities in office spaces, retail outlets, and commercial properties.

Located in the heart of Islamabad, Blue Area provides easy access to government offices, embassies, and major institutions. The area features modern office buildings, shopping centers, restaurants, and hotels, making it the ideal location for businesses and commercial investments.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=building',
        source: 'blue-area',
        alt: 'Blue Area commercial district'
      }
    ],
    status: 'developed',
    plot_sizes: ['Commercial Plots', 'Office Spaces', 'Retail Outlets'],
    features: [
      'Central Business District',
      'Government Proximity',
      'Embassy Area',
      'Shopping Centers',
      'Office Buildings',
      'Hotels & Restaurants',
      'Banking Facilities',
      'Public Transport Hub'
    ],
    cta_links: {
      details: '/projects/blue-area-commercial',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.7294,
      lng: 73.0936
    },
    source_urls: [
      'https://islamabad.gov.pk'
    ],
    location: 'Blue Area, Islamabad',
    city: 'Islamabad'
  },
  {
    id: 'commercial-market-rawalpindi',
    developer: 'Multiple Developers',
    name: 'Commercial Market Rawalpindi',
    slug: 'commercial-market-rawalpindi',
    type: 'Commercial',
    short_desc: 'Established commercial markets and business centers in prime locations of Rawalpindi',
    meta_desc: 'Commercial Market Rawalpindi - Prime commercial properties including markets, shops and business centers in established locations.',
    long_desc: `Rawalpindi's commercial markets offer excellent business opportunities in established commercial areas. These markets include shopping plazas, retail shops, office spaces, and business centers located in prime commercial districts of the city.

With excellent connectivity to major roads, residential areas, and transportation hubs, these commercial properties provide ideal locations for various business ventures. The areas feature mature infrastructure, banking facilities, and established customer bases.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=building',
        source: 'commercial-rawalpindi',
        alt: 'Commercial Market Rawalpindi'
      }
    ],
    status: 'developed',
    plot_sizes: ['Shops', 'Plazas', 'Office Spaces', 'Warehouses'],
    features: [
      'Established Markets',
      'Prime Locations',
      'High Footfall',
      'Transportation Access',
      'Banking Facilities',
      'Parking Available',
      'Security Services',
      'Utility Connections'
    ],
    cta_links: {
      details: '/projects/commercial-market-rawalpindi',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.5969,
      lng: 73.0668
    },
    source_urls: [
      'https://rawalpindi.gov.pk'
    ],
    location: 'Various Commercial Areas, Rawalpindi',
    city: 'Rawalpindi'
  }
];

export const companyProfileData: CompanyProfile = {
  id: 'excel-marketing-pvt-ltd',
  company_name: 'Excel Marketing Pvt Ltd',
  tagline: 'WE DON\'T JUST SELL — WE CONNECT, CREATE, AND CONVERT POTENTIAL INTO PERFORMANCE.',
  ceo: {
    name: 'Waheed ur Rehman Farooqui',
    title: 'Chief Executive Officer',
    bio: 'Waheed ur Rehman Farooqui, CEO of Excel Marketing Pvt Ltd, leads a specialized team in property management, sales, marketing, and leasing. The company is dedicated to exceptional results, seamless transactions, and building long-term relationships with property owners, tenants, and buyers in Islamabad and Rawalpindi.',
    image: '/src/assets/team/ceo-placeholder.jpg'
  },
  contact: {
    phone: '03348737244',
    email: 'excelmarketingpk@gmail.com' // Updated email
  },
  team: [
    {
      name: 'Qaiser ul Haq',
      role: 'Director Sales',
      description: 'Leads our sales operations with over 15 years of experience.\nSpecializes in property transactions and client relationship management.',
      image: '/src/assets/team/director-sales-placeholder.jpg'
    },
    {
      name: 'Farooq Sultan',
      role: 'Director Marketing',
      description: 'Oversees marketing strategies and digital presence.\nExpert in real estate promotion and brand development.',
      image: '/src/assets/team/director-marketing-placeholder.jpg'
    },
    {
      name: 'Ashraf Nazir',
      role: 'Director Legal',
      description: 'Handles all legal aspects of property transactions.\nEnsures compliance and provides legal consultation services.',
      image: '/src/assets/team/director-legal-placeholder.jpg'
    },
    {
      name: 'Abdullah Farooqui',
      role: 'Director Technical',
      description: 'Manages technical operations and development projects.\nOversees construction and infrastructure planning.',
      image: '/src/assets/team/director-technical-placeholder.jpg'
    }
  ],
  services: [
    'Buying and selling of property in Islamabad & Rawalpindi',
    'Legal consultancy and verification services',
    'Possession, cases, and rental agreements',
    'Guidance for overseas Pakistanis regarding property transactions',
    'Construction and development services with complete delivery',
    'Pre-sale and post-sale comprehensive support services'
  ],
  specialFeatures: [
    'Legal verification of property ownership',
    '3 days and daily updates on transactions',
    'Pre-sale and post-sale services',
    'Complete ownership and transfer guarantee',
    'Construction and development services with complete delivery',
    'Reliable and authentic societies in Islamabad & Rawalpindi only',
    'Comprehensive guidance about investment opportunities'
  ]
};
