export interface Course {
  name: string;
  details: string;
  url: string;
}

export interface University {
  id: string; // Unique ID for routing
  name: string;
  qsRank: number | string;
  theRank: number | string;
  website: string;
  country: string;
  courses?: Course[];
  genericCourses?: string[]; // Fallback for general search
  fees?: number; // Annual fees in USD
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  universities: University[];
}

export interface Bank {
    id: string;
    name: string;
    type: 'Government Bank' | 'Private Bank' | 'NBFC' | 'International Lender';
    maxAmount: string;
    interestRate: string;
    collateralRequired: string;
    processingTime: string;
    website: string;
    description: string;
}

export const banks: Bank[] = [
  { id: "sbi", name: "State Bank of India (SBI)", type: "Government Bank", maxAmount: "₹1.5 Crore", interestRate: "9.5% - 11.5%", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "15-20 days", website: "https://sbi.co.in", description: "India's largest public sector bank with comprehensive loan solutions." },
  { id: "bob", name: "Bank of Baroda", type: "Government Bank", maxAmount: "₹1.25 Crore", interestRate: "8.55% onwards", collateralRequired: "Case-specific", processingTime: "10-15 days", website: "https://www.bankofbaroda.in", description: "Offers 'Baroda Scholar' scheme for students going abroad." },
  { id: "pnb", name: "Punjab National Bank (PNB)", type: "Government Bank", maxAmount: "Need-based", interestRate: "9.25% onwards", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "2-3 weeks", website: "https://www.pnbindia.in", description: "Provides the 'PNB Udaan' education loan scheme." },
  { id: "canara", name: "Canara Bank", type: "Government Bank", maxAmount: "Need-based", interestRate: "10.25% onwards", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "15-20 days", website: "https://www.canarabank.com", description: "Offers a range of education loan products with competitive rates." },
  { id: "hdfc", name: "HDFC Bank", type: "Private Bank", maxAmount: "₹1.5 Crore", interestRate: "9.55% onwards", collateralRequired: "Case-specific", processingTime: "5-7 days", website: "https://www.hdfcbank.com", description: "Quick and seamless education loan processing for premier institutes." },
  { id: "icici", name: "ICICI Bank", type: "Private Bank", maxAmount: "₹1 Crore", interestRate: "10.25% - 11.75%", collateralRequired: "Above ₹7.5 Lakhs", processingTime: "10-12 days", website: "https://icicibank.com", description: "Offers comprehensive education loan solutions with flexible repayment options." },
  { id: "axis", name: "Axis Bank", type: "Private Bank", maxAmount: "₹75 Lakhs", interestRate: "10.75% - 12%", collateralRequired: "Above ₹4 Lakhs", processingTime: "10-15 days", website: "https://axisbank.com", description: "Provides student-friendly education loans with quick processing." },
  { id: "kotak", name: "Kotak Mahindra Bank", type: "Private Bank", maxAmount: "₹1.5 Crore", interestRate: "Up to 16%", collateralRequired: "Case-specific", processingTime: "7-10 days", website: "https://www.kotak.com", description: "Customized education loans for studies in India and abroad." },
  { id: "avanse", name: "Avanse Financial Services", type: "NBFC", maxAmount: "Need-based", interestRate: "10.5% - 15%", collateralRequired: "Flexible", processingTime: "5-7 days", website: "https://avanse.com", description: "Specializes in education loans with a focus on study abroad programs." },
  { id: "hdfc-credila", name: "HDFC Credila", type: "NBFC", maxAmount: "₹75 Lakhs", interestRate: "9.75% - 13.25%", collateralRequired: "Flexible", processingTime: "7-10 days", website: "https://credila.com", description: "India's first dedicated education loan company." },
  { id: "incred", name: "InCred", type: "NBFC", maxAmount: "Up to ₹1.5 Crore", interestRate: "11% onwards", collateralRequired: "Both collateral and non-collateral options", processingTime: "3-5 days", website: "https://www.incred.com", description: "New-age financial services platform with customized loan solutions." },
  { id: "prodigy", name: "Prodigy Finance", type: "International Lender", maxAmount: "Up to 100% funding", interestRate: "11% - 15% (varies by program)", collateralRequired: "No collateral required", processingTime: "2-3 weeks", website: "https://prodigyfinance.com", description: "Collateral-free loans for students at top international universities." },
  { id: "mpower", name: "MPOWER Financing", type: "International Lender", maxAmount: "$100,000 USD", interestRate: "12% - 14%", collateralRequired: "No collateral or co-signer required", processingTime: "1-2 weeks", website: "https://www.mpowerfinancing.com", description: "Loans for international students in the US and Canada without a co-signer." }
];

export const countries: Country[] = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    universities: [
      { id: 'mit', name: 'Massachusetts Institute of Technology (MIT)', qsRank: 1, theRank: 2, website: 'https://www.mit.edu/', country: 'USA', fees: 60000,
        courses: [
          { name: 'MS in Computer Science and Engineering', details: 'A research-focused Master\'s program.', url: 'https://www.eecs.mit.edu/academics/graduate-programs/master-of-science-program/'},
          { name: 'Master of Engineering in Cybersecurity', details: 'Focuses on technology, policy, and management of cybersecurity.', url: 'https://cybersecurity.mit.edu/master-of-engineering-in-cybersecurity/'},
        ],
        genericCourses: ['Engineering', 'Computer Science', 'Physical Sciences', 'Cyber Security'],
      },
      { id: 'stanford', name: 'Stanford University', qsRank: 5, theRank: 2, website: 'https://www.stanford.edu/', country: 'USA', fees: 58000,
        courses: [
          { name: 'MS in Computer Science', details: 'Specializations in AI, Systems, and Theory.', url: 'https://cs.stanford.edu/academics/graduate/masters'},
        ],
        genericCourses: ['Business', 'Engineering', 'Computer Science', 'Cyber Security'],
      },
      { id: 'cmu', name: 'Carnegie Mellon University', qsRank: 52, theRank: 24, website: 'https://www.cmu.edu/', country: 'USA', fees: 62000,
        courses: [
          { name: 'MS in Information Security (MSIS)', details: 'A leading program in cybersecurity from the Information Networking Institute.', url: 'https://www.ini.cmu.edu/programs/msis/'},
        ],
        genericCourses: ['Computer Science', 'Engineering', 'Fine Arts', 'Cyber Security'],
      },
      { id: 'purdue', name: 'Purdue University', qsRank: 99, theRank: '101-125', website: 'https://www.purdue.edu/', country: 'USA', fees: 32000,
        courses: [
           { name: 'MS in Cyber Criminology', details: 'Focuses on the intersection of crime and cybersecurity.', url: 'https://www.purdue.edu/gradschool/programs/interdisciplinary/cyber-criminology.html'},
        ],
        genericCourses: ['Engineering', 'Agriculture', 'Cyber Security'],
      },
      { id: 'asu', name: 'Arizona State University', qsRank: 179, theRank: '201-250', website: 'https://www.asu.edu/', country: 'USA', fees: 35000,
        genericCourses: ['Business', 'Innovation', 'Engineering', 'Cyber Security'],
      },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    universities: [
        { id: 'oxford', name: 'University of Oxford', qsRank: 3, theRank: 1, website: 'https://www.ox.ac.uk/', country: 'UK', fees: 30000,
            courses: [
              { name: 'MSc in Software and Systems Security', details: 'Covers the principles of software and systems security.', url: 'https://www.cs.ox.ac.uk/softwaresystemssecurity/'},
            ],
            genericCourses: ['Arts & Humanities', 'Law', 'Medicine', 'Computer Science', 'Cyber Security'],
        },
        { id: 'cambridge', name: 'University of Cambridge', qsRank: 5, theRank: 5, website: 'https://www.cam.ac.uk/', country: 'UK', fees: 32000,
            genericCourses: ['Natural Sciences', 'Engineering', 'Arts & Humanities', 'Computer Science'],
        },
        { id: 'southampton', name: 'University of Southampton', qsRank: 81, theRank: 97, website: 'https://www.southampton.ac.uk/', country: 'UK', fees: 25000,
            courses: [
              { name: 'MSc Cyber Security', details: 'Accredited by GCHQ, this course is a leader in the field.', url: 'https://www.southampton.ac.uk/courses/cyber-security-masters-msc'},
            ],
            genericCourses: ['Electrical Engineering', 'Computer Science', 'Cyber Security'],
        },
        { id: 'coventry', name: 'Coventry University', qsRank: 571, theRank: '601-800', website: 'https://www.coventry.ac.uk/', country: 'UK', fees: 18000,
            genericCourses: ['Automotive Engineering', 'Business', 'Cyber Security'],
        },
    ],
  },
  {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      universities: [
        { id: 'toronto', name: 'University of Toronto', qsRank: 21, theRank: 21, website: 'https://www.utoronto.ca/', country: 'Canada', fees: 45000,
          genericCourses: ['Medicine', 'Education', 'Computer Science', 'Cyber Security'],
        },
        { id: 'ubc', name: 'University of British Columbia', qsRank: 34, theRank: 41, website: 'https://www.ubc.ca/', country: 'Canada', fees: 40000,
          genericCourses: ['Geography', 'Education', 'Engineering', 'Computer Science', 'Cyber Security'],
        },
        { id: 'waterloo', name: 'University of Waterloo', qsRank: 112, theRank: '151-175', website: 'https://uwaterloo.ca/', country: 'Canada', fees: 42000,
          genericCourses: ['Computer Science', 'Engineering', 'Cyber Security'],
        },
        { id: 'concordia', name: 'Concordia University', qsRank: 387, theRank: '501-600', website: 'https://www.concordia.ca/', country: 'Canada', fees: 20000,
          genericCourses: ['Fine Arts', 'Engineering', 'Cyber Security'],
        },
      ],
  },
];
