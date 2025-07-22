// University Rankings API Service
// This service fetches real-time university rankings and data

export interface UniversityRanking {
  id: string;
  name: string;
  country: string;
  qsRank: number | string;
  theRank: number | string;
  website: string;
  courses?: string[];
  fees?: number;
  description?: string;
  image?: string;
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  universities: UniversityRanking[];
  trendingCourses: string[];
  pros: string[];
  cons: string[];
  packingEssentials: string[];
}

// Mock data for now - in production, this would fetch from a real API
const mockUniversityData: CountryData[] = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    trendingCourses: [
      'Computer Science & AI',
      'Data Science & Analytics', 
      'Cybersecurity',
      'Business Administration (MBA)',
      'Biomedical Engineering',
      'Environmental Science',
      'Digital Marketing',
      'Renewable Energy'
    ],
    pros: [
      'World-renowned universities and research facilities',
      'Extensive alumni networks and career opportunities',
      'Optional Practical Training (OPT) for international students',
      'Diverse cultural environment and campus life',
      'Access to cutting-edge technology and innovation',
      'Flexible academic programs with elective choices'
    ],
    cons: [
      'High tuition fees and living costs',
      'Complex visa and immigration procedures',
      'Limited post-graduation work opportunities',
      'Healthcare costs can be expensive',
      'Competitive admission process',
      'Cultural adjustment challenges'
    ],
    packingEssentials: [
      'Winter clothing (varies by state)',
      'Formal business attire for interviews',
      'Electronics with US plug adapters',
      'Prescription medications with prescriptions',
      'Academic transcripts and certificates',
      'Laptop and study materials',
      'Comfortable walking shoes',
      'Light jacket for air conditioning'
    ],
    universities: [
      {
        id: 'mit',
        name: 'Massachusetts Institute of Technology (MIT)',
        country: 'USA',
        qsRank: 1,
        theRank: 2,
        website: 'https://www.mit.edu/',
        fees: 60000,
        courses: ['Computer Science', 'Engineering', 'Business', 'AI & Machine Learning'],
        description: 'World leader in science, technology, and innovation',
        image: 'photo-1487058792275-0ad4aaf24ca7'
      },
      {
        id: 'stanford',
        name: 'Stanford University',
        country: 'USA', 
        qsRank: 5,
        theRank: 2,
        website: 'https://www.stanford.edu/',
        fees: 58000,
        courses: ['Computer Science', 'Business', 'Engineering', 'Medicine'],
        description: 'Premier research university in Silicon Valley',
        image: 'photo-1519389950473-47ba0277781c'
      },
      {
        id: 'harvard',
        name: 'Harvard University',
        country: 'USA',
        qsRank: 4,
        theRank: 3,
        website: 'https://www.harvard.edu/',
        fees: 55000,
        courses: ['Business', 'Law', 'Medicine', 'Liberal Arts'],
        description: 'Oldest institution of higher education in the US',
        image: 'photo-1469474968028-56623f02e42b'
      },
      {
        id: 'cmu',
        name: 'Carnegie Mellon University',
        country: 'USA',
        qsRank: 52,
        theRank: 24,
        website: 'https://www.cmu.edu/',
        fees: 62000,
        courses: ['Computer Science', 'Engineering', 'Fine Arts', 'Robotics'],
        description: 'Global leader in computer science and robotics',
        image: 'photo-1487058792275-0ad4aaf24ca7'
      },
      {
        id: 'caltech',
        name: 'California Institute of Technology',
        country: 'USA',
        qsRank: 6,
        theRank: 7,
        website: 'https://www.caltech.edu/',
        fees: 58000,
        courses: ['Engineering', 'Physical Sciences', 'Biology', 'Astronomy'],
        description: 'Small but prestigious science and engineering institute',
        image: 'photo-1470813740244-df37b8c1edcb'
      }
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    trendingCourses: [
      'Artificial Intelligence & Machine Learning',
      'Financial Technology (FinTech)',
      'Sustainable Development',
      'International Business',
      'Digital Media & Communications',
      'Healthcare Management',
      'Creative Arts & Design',
      'Renewable Energy Engineering'
    ],
    pros: [
      'Shorter degree duration (1-year masters)',
      'Rich academic heritage and tradition',
      'Graduate Route visa for 2 years post-study',
      'Cultural diversity and historical significance',
      'Strong research opportunities',
      'English-speaking environment'
    ],
    cons: [
      'High living costs, especially in London',
      'Weather can be challenging',
      'Brexit impact on EU student benefits',
      'Competitive job market',
      'Limited part-time work during studies',
      'Expensive accommodation'
    ],
    packingEssentials: [
      'Warm, waterproof clothing',
      'Umbrella and rain gear',
      'Formal wear for university events',
      'UK plug adapters',
      'Comfortable waterproof shoes',
      'Light layers for unpredictable weather',
      'Academic documents and certificates',
      'Laptop and study materials'
    ],
    universities: [
      {
        id: 'oxford',
        name: 'University of Oxford',
        country: 'UK',
        qsRank: 3,
        theRank: 1,
        website: 'https://www.ox.ac.uk/',
        fees: 30000,
        courses: ['Arts & Humanities', 'Law', 'Medicine', 'Sciences'],
        description: 'Oldest university in the English-speaking world',
        image: 'photo-1493397212122-2b85dda8106b'
      },
      {
        id: 'cambridge',
        name: 'University of Cambridge',
        country: 'UK',
        qsRank: 2,
        theRank: 5,
        website: 'https://www.cam.ac.uk/',
        fees: 32000,
        courses: ['Natural Sciences', 'Engineering', 'Mathematics', 'Computer Science'],
        description: 'Collegiate research university with exceptional academic reputation',
        image: 'photo-1493397212122-2b85dda8106b'
      },
      {
        id: 'imperial',
        name: 'Imperial College London',
        country: 'UK',
        qsRank: 7,
        theRank: 8,
        website: 'https://www.imperial.ac.uk/',
        fees: 35000,
        courses: ['Engineering', 'Medicine', 'Business', 'Natural Sciences'],
        description: 'Science, engineering, medicine and business university',
        image: 'photo-1493397212122-2b85dda8106b'
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    trendingCourses: [
      'Software Engineering & Development',
      'Business Analytics',
      'Environmental Studies',
      'Healthcare Administration',
      'Digital Marketing',
      'Supply Chain Management',
      'Game Development',
      'Clean Technology'
    ],
    pros: [
      'Pathway to permanent residency',
      'Affordable tuition compared to US/UK',
      'High quality of life and safety',
      'Multicultural and welcoming society',
      'Post-graduation work permits',
      'Universal healthcare system'
    ],
    cons: [
      'Harsh winters in many regions',
      'Higher taxes',
      'Limited job opportunities in some fields',
      'Long immigration processing times',
      'Higher cost of living in major cities',
      'Distance from home for international students'
    ],
    packingEssentials: [
      'Heavy winter clothing and boots',
      'Thermal underwear and layers',
      'Formal business attire',
      'Canadian plug adapters',
      'Warm gloves and winter accessories',
      'Academic transcripts and documents',
      'Laptop and study materials',
      'Comfortable walking shoes'
    ],
    universities: [
      {
        id: 'toronto',
        name: 'University of Toronto',
        country: 'Canada',
        qsRank: 21,
        theRank: 21,
        website: 'https://www.utoronto.ca/',
        fees: 45000,
        courses: ['Medicine', 'Engineering', 'Business', 'Computer Science'],
        description: 'Canada\'s leading research-intensive university',
        image: 'photo-1500375592092-40eb2168fd21'
      },
      {
        id: 'ubc',
        name: 'University of British Columbia',
        country: 'Canada',
        qsRank: 34,
        theRank: 41,
        website: 'https://www.ubc.ca/',
        fees: 40000,
        courses: ['Engineering', 'Business', 'Arts', 'Sciences'],
        description: 'Global centre for research and teaching',
        image: 'photo-1500375592092-40eb2168fd21'
      }
    ]
  }
];

// API Functions
export const fetchUniversitiesByCountry = async (countryId: string): Promise<CountryData | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockUniversityData.find(country => country.id === countryId) || null;
};

export const fetchAllCountries = async (): Promise<CountryData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return mockUniversityData;
};

export const searchUniversities = async (query: string, country?: string): Promise<UniversityRanking[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  let allUniversities: UniversityRanking[] = [];
  mockUniversityData.forEach(country => {
    allUniversities = [...allUniversities, ...country.universities];
  });

  // Filter by country if specified
  if (country && country !== 'all') {
    allUniversities = allUniversities.filter(uni => uni.country.toLowerCase() === country.toLowerCase());
  }

  // Filter by search query
  if (query) {
    const searchLower = query.toLowerCase();
    allUniversities = allUniversities.filter(uni => 
      uni.name.toLowerCase().includes(searchLower) ||
      uni.courses?.some(course => course.toLowerCase().includes(searchLower)) ||
      uni.description?.toLowerCase().includes(searchLower)
    );
  }

  // Sort by QS ranking
  return allUniversities.sort((a, b) => {
    const rankA = typeof a.qsRank === 'number' ? a.qsRank : 1000;
    const rankB = typeof b.qsRank === 'number' ? b.qsRank : 1000;
    return rankA - rankB;
  });
};