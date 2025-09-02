export interface StateData {
  id: string;
  name: string;
  surveys: number;
  workerTypes: { type: string; count: number; percentage: number }[];
  demographics: { 
    ageGroups: { group: string; percentage: number }[];
    genderSplit: { gender: string; percentage: number }[];
    incomeRanges: { range: string; percentage: number }[];
  };
  insights: string[];
  topChallenges: string[];
  coordinates: { x: number; y: number };
  color: string;
}

export const statesData: StateData[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    surveys: 2847,
    workerTypes: [
      { type: "Street Vendors", count: 1139, percentage: 40 },
      { type: "Construction Workers", count: 854, percentage: 30 },
      { type: "Domestic Helpers", count: 569, percentage: 20 },
      { type: "Auto Drivers", count: 285, percentage: 10 }
    ],
    demographics: {
      ageGroups: [
        { group: "18-25", percentage: 25 },
        { group: "26-35", percentage: 35 },
        { group: "36-45", percentage: 28 },
        { group: "46+", percentage: 12 }
      ],
      genderSplit: [
        { gender: "Male", percentage: 65 },
        { gender: "Female", percentage: 35 }
      ],
      incomeRanges: [
        { range: "₹5,000-10,000", percentage: 45 },
        { range: "₹10,000-15,000", percentage: 35 },
        { range: "₹15,000+", percentage: 20 }
      ]
    },
    insights: [
      "Highest concentration of street vendors in desert regions",
      "Construction work peaks during winter months",
      "Women workers predominantly in textile and handicrafts"
    ],
    topChallenges: [
      "Extreme weather conditions",
      "Limited access to credit",
      "Seasonal unemployment",
      "Lack of social security"
    ],
    coordinates: { x: 300, y: 250 },
    color: "#1e40af"
  },
  {
    id: "punjab",
    name: "Punjab",
    surveys: 1956,
    workerTypes: [
      { type: "Agricultural Workers", count: 978, percentage: 50 },
      { type: "Small Traders", count: 392, percentage: 20 },
      { type: "Transport Workers", count: 391, percentage: 20 },
      { type: "Service Workers", count: 195, percentage: 10 }
    ],
    demographics: {
      ageGroups: [
        { group: "18-25", percentage: 20 },
        { group: "26-35", percentage: 40 },
        { group: "36-45", percentage: 30 },
        { group: "46+", percentage: 10 }
      ],
      genderSplit: [
        { gender: "Male", percentage: 70 },
        { gender: "Female", percentage: 30 }
      ],
      incomeRanges: [
        { range: "₹8,000-12,000", percentage: 40 },
        { range: "₹12,000-18,000", percentage: 35 },
        { range: "₹18,000+", percentage: 25 }
      ]
    },
    insights: [
      "Heavy reliance on seasonal agricultural work",
      "Growing trend in small-scale entrepreneurship",
      "High migration to urban areas for work"
    ],
    topChallenges: [
      "Seasonal income fluctuation",
      "Debt burden from farming",
      "Limited non-agricultural opportunities",
      "Youth migration"
    ],
    coordinates: { x: 280, y: 150 },
    color: "#2563eb"
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    surveys: 3542,
    workerTypes: [
      { type: "Manufacturing Workers", count: 1417, percentage: 40 },
      { type: "Street Vendors", count: 1063, percentage: 30 },
      { type: "Service Workers", count: 708, percentage: 20 },
      { type: "Construction Workers", count: 354, percentage: 10 }
    ],
    demographics: {
      ageGroups: [
        { group: "18-25", percentage: 30 },
        { group: "26-35", percentage: 38 },
        { group: "36-45", percentage: 25 },
        { group: "46+", percentage: 7 }
      ],
      genderSplit: [
        { gender: "Male", percentage: 60 },
        { gender: "Female", percentage: 40 }
      ],
      incomeRanges: [
        { range: "₹10,000-15,000", percentage: 35 },
        { range: "₹15,000-20,000", percentage: 40 },
        { range: "₹20,000+", percentage: 25 }
      ]
    },
    insights: [
      "Largest informal manufacturing sector",
      "High female participation in garment industry",
      "Strong entrepreneurial ecosystem in Mumbai"
    ],
    topChallenges: [
      "High cost of living",
      "Housing shortage",
      "Long working hours",
      "Limited job security"
    ],
    coordinates: { x: 320, y: 350 },
    color: "#3b82f6"
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    surveys: 4235,
    workerTypes: [
      { type: "Agricultural Workers", count: 2118, percentage: 50 },
      { type: "Small Traders", count: 847, percentage: 20 },
      { type: "Artisans & Craftsmen", count: 635, percentage: 15 },
      { type: "Transport Workers", count: 635, percentage: 15 }
    ],
    demographics: {
      ageGroups: [
        { group: "18-25", percentage: 35 },
        { group: "26-35", percentage: 35 },
        { group: "36-45", percentage: 22 },
        { group: "46+", percentage: 8 }
      ],
      genderSplit: [
        { gender: "Male", percentage: 75 },
        { gender: "Female", percentage: 25 }
      ],
      incomeRanges: [
        { range: "₹4,000-8,000", percentage: 50 },
        { range: "₹8,000-12,000", percentage: 35 },
        { range: "₹12,000+", percentage: 15 }
      ]
    },
    insights: [
      "Largest informal workforce in India",
      "Traditional crafts still prevalent",
      "High rural-urban migration patterns"
    ],
    topChallenges: [
      "Very low wages",
      "Lack of skill development",
      "Poor working conditions",
      "Minimal social protection"
    ],
    coordinates: { x: 380, y: 220 },
    color: "#60a5fa"
  },
  {
    id: "haryana",
    name: "Haryana",
    surveys: 1654,
    workerTypes: [
      { type: "Agricultural Workers", count: 661, percentage: 40 },
      { type: "Construction Workers", count: 496, percentage: 30 },
      { type: "Manufacturing Workers", count: 331, percentage: 20 },
      { type: "Service Workers", count: 166, percentage: 10 }
    ],
    demographics: {
      ageGroups: [
        { group: "18-25", percentage: 28 },
        { group: "26-35", percentage: 42 },
        { group: "36-45", percentage: 22 },
        { group: "46+", percentage: 8 }
      ],
      genderSplit: [
        { gender: "Male", percentage: 80 },
        { gender: "Female", percentage: 20 }
      ],
      incomeRanges: [
        { range: "₹8,000-12,000", percentage: 40 },
        { range: "₹12,000-16,000", percentage: 35 },
        { range: "₹16,000+", percentage: 25 }
      ]
    },
    insights: [
      "Proximity to Delhi drives construction demand",
      "Agricultural modernization creating job shifts",
      "Low female workforce participation"
    ],
    topChallenges: [
      "Gender employment gap",
      "Skill mismatch in manufacturing",
      "Competition from migrant workers",
      "Seasonal employment patterns"
    ],
    coordinates: { x: 310, y: 180 },
    color: "#93c5fd"
  },
  {
    id: "mp",
    name: "Madhya Pradesh",
    surveys: 2341,
    workerTypes: [
      { type: "Agricultural Workers", count: 1170, percentage: 50 },
      { type: "Forest Workers", count: 468, percentage: 20 },
      { type: "Small Traders", count: 351, percentage: 15 },
      { type: "Artisans", count: 352, percentage: 15 }
    ],
    demographics: {
      ageGroups: [
        { group: "18-25", percentage: 32 },
        { group: "26-35", percentage: 38 },
        { group: "36-45", percentage: 22 },
        { group: "46+", percentage: 8 }
      ],
      genderSplit: [
        { gender: "Male", percentage: 65 },
        { gender: "Female", percentage: 35 }
      ],
      incomeRanges: [
        { range: "₹4,000-8,000", percentage: 45 },
        { range: "₹8,000-12,000", percentage: 35 },
        { range: "₹12,000+", percentage: 20 }
      ]
    },
    insights: [
      "Rich tribal and forest-based economy",
      "Traditional handicrafts sector thriving",
      "Women active in forest produce collection"
    ],
    topChallenges: [
      "Remote location challenges",
      "Limited market access",
      "Exploitation by middlemen",
      "Lack of processing facilities"
    ],
    coordinates: { x: 350, y: 280 },
    color: "#bfdbfe"
  },
  {
    id: "delhi",
    name: "Delhi",
    surveys: 1897,
    workerTypes: [
      { type: "Street Vendors", count: 758, percentage: 40 },
      { type: "Service Workers", count: 569, percentage: 30 },
      { type: "Construction Workers", count: 379, percentage: 20 },
      { type: "Transport Workers", count: 191, percentage: 10 }
    ],
    demographics: {
      ageGroups: [
        { group: "18-25", percentage: 35 },
        { group: "26-35", percentage: 40 },
        { group: "36-45", percentage: 20 },
        { group: "46+", percentage: 5 }
      ],
      genderSplit: [
        { gender: "Male", percentage: 70 },
        { gender: "Female", percentage: 30 }
      ],
      incomeRanges: [
        { range: "₹12,000-18,000", percentage: 35 },
        { range: "₹18,000-25,000", percentage: 40 },
        { range: "₹25,000+", percentage: 25 }
      ]
    },
    insights: [
      "Highest income levels among informal workers",
      "Diverse service sector opportunities",
      "High concentration of migrant workers"
    ],
    topChallenges: [
      "Extremely high cost of living",
      "Housing crisis",
      "Air pollution health impacts",
      "Fierce competition"
    ],
    coordinates: { x: 330, y: 160 },
    color: "#dbeafe"
  }
];

export const getStateColor = (surveys: number): string => {
  if (surveys >= 4000) return "#1e3a8a"; // Darkest blue
  if (surveys >= 3000) return "#1e40af";
  if (surveys >= 2500) return "#2563eb";
  if (surveys >= 2000) return "#3b82f6";
  if (surveys >= 1500) return "#60a5fa";
  return "#93c5fd"; // Lightest blue
};