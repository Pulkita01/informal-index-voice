export interface LocationData {
  id: string;
  name: string;
  city: string;
  state: string;
  surveyed: number;
  reached: number;
  workerTypes: string[];
  keyInsights: string[];
  coordinates: { lat: number; lng: number };
  pinColor: string;
}

export const locationsData: LocationData[] = [
  {
    id: "gwalior",
    name: "Gwalior",
    city: "Gwalior",
    state: "Madhya Pradesh",
    surveyed: 50,
    reached: 100,
    workerTypes: ["Street Vendors", "Construction Workers", "Domestic Helpers"],
    keyInsights: [
      "Strong community support for worker welfare initiatives",
      "High participation in skill development programs",
      "Growing demand for financial literacy"
    ],
    coordinates: { lat: 26.2183, lng: 78.1828 },
    pinColor: "#FF0000"
  },
  {
    id: "bhopal",
    name: "Bhopal",
    city: "Bhopal", 
    state: "Madhya Pradesh",
    surveyed: 200,
    reached: 250,
    workerTypes: ["Manufacturing Workers", "Street Vendors", "Transport Workers"],
    keyInsights: [
      "Largest survey coverage in central India",
      "Diverse informal economy ecosystem",
      "Strong women's participation in workforce"
    ],
    coordinates: { lat: 23.2599, lng: 77.4126 },
    pinColor: "#FF0000"
  },
  {
    id: "faridabad",
    name: "Faridabad",
    city: "Faridabad",
    state: "Haryana", 
    surveyed: 30,
    reached: 50,
    workerTypes: ["Construction Workers", "Manufacturing Workers", "Service Workers"],
    keyInsights: [
      "Industrial belt with high migration patterns",
      "Focus on construction and manufacturing sectors",
      "Proximity to Delhi creates unique opportunities"
    ],
    coordinates: { lat: 28.4089, lng: 77.3178 },
    pinColor: "#FF0000"
  },
  {
    id: "mumbai",
    name: "Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    surveyed: 40,
    reached: 100,
    workerTypes: ["Domestic Helpers", "Street Vendors", "Service Workers"],
    keyInsights: [
      "Focus on women workers in domestic sector",
      "High cost of living challenges",
      "Strong informal economy networks"
    ],
    coordinates: { lat: 19.0760, lng: 72.8777 },
    pinColor: "#FF0000"
  },
  {
    id: "ludhiana",
    name: "Ludhiana", 
    city: "Ludhiana",
    state: "Punjab",
    surveyed: 40,
    reached: 40,
    workerTypes: ["Construction Workers", "Agricultural Workers", "Small Traders"],
    keyInsights: [
      "Focus on construction worker welfare",
      "Industrial city with growing informal sector",
      "Seasonal employment patterns"
    ],
    coordinates: { lat: 30.9010, lng: 75.8573 },
    pinColor: "#FF0000"
  },
  {
    id: "sodala",
    name: "Sodala",
    city: "Jaipur",
    state: "Rajasthan",
    surveyed: 60,
    reached: 70,
    workerTypes: ["Street Vendors", "Artisans", "Domestic Helpers"],
    keyInsights: [
      "Traditional crafts and street vending focus",
      "Food and essential supplies distribution",
      "Community-driven support systems"
    ],
    coordinates: { lat: 26.9389, lng: 75.8081 },
    pinColor: "#FF0000"
  },
  {
    id: "vidyadhar_nagar",
    name: "Vidyadhar Nagar",
    city: "Jaipur", 
    state: "Rajasthan",
    surveyed: 100,
    reached: 150,
    workerTypes: ["Construction Workers", "Street Vendors", "Small Traders"],
    keyInsights: [
      "Large-scale community engagement program",
      "Comprehensive toy, food, and book distribution",
      "Strong educational support initiatives"
    ],
    coordinates: { lat: 26.9718, lng: 75.7910 },
    pinColor: "#FF0000"
  },
  {
    id: "jawahar_nagar",
    name: "Jawahar Nagar",
    city: "Jaipur",
    state: "Rajasthan", 
    surveyed: 100,
    reached: 150,
    workerTypes: ["Artisans", "Street Vendors", "Domestic Helpers"],
    keyInsights: [
      "High participation in educational programs",
      "Successful toy and food distribution model",
      "Strong community leadership"
    ],
    coordinates: { lat: 26.9540, lng: 75.7849 },
    pinColor: "#FF0000"
  },
  {
    id: "pani_pech_basti",
    name: "Pani Pech Basti",
    city: "Jaipur",
    state: "Rajasthan",
    surveyed: 120,
    reached: 150,
    workerTypes: ["Construction Workers", "Manufacturing Workers", "Street Vendors"],
    keyInsights: [
      "Highest single-location survey coverage",
      "Focus on worker rights and safety",
      "Comprehensive support item distribution"
    ],
    coordinates: { lat: 26.9200, lng: 75.8100 },
    pinColor: "#FF0000"
  },
  {
    id: "chaupal_basti",
    name: "Chaupal Basti", 
    city: "Jaipur",
    state: "Rajasthan",
    surveyed: 100,
    reached: 150,
    workerTypes: ["Construction Workers", "Street Vendors", "Transport Workers"],
    keyInsights: [
      "Strong worker community organization",
      "Successful footwear distribution program", 
      "High engagement in welfare programs"
    ],
    coordinates: { lat: 26.9000, lng: 75.8200 },
    pinColor: "#FF0000"
  }
];

export const getTotalSurveyed = (): number => {
  return locationsData.reduce((acc, location) => acc + location.surveyed, 0);
};

export const getTotalReached = (): number => {
  return locationsData.reduce((acc, location) => acc + location.reached, 0);
};

export const getStateWiseData = () => {
  const stateWise = locationsData.reduce((acc, location) => {
    const state = location.state;
    if (!acc[state]) {
      acc[state] = { surveyed: 0, reached: 0, locations: 0 };
    }
    acc[state].surveyed += location.surveyed;
    acc[state].reached += location.reached;
    acc[state].locations += 1;
    return acc;
  }, {} as Record<string, { surveyed: number; reached: number; locations: number }>);
  
  return stateWise;
};