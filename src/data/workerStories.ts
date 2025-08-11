export interface WorkerStory {
  name: string;
  role: string;
  qrCodeId: string;
  story: string;
  videoUrl?: string;
}

export const workerStories: WorkerStory[] = [
  {
    name: "Ravi",
    role: "Street Vendor",
    qrCodeId: "ravi-vendor-001",
    story:
      "Ravi sells fruits on the bustling streets of Mumbai. Through our financial literacy program, he learned to save systematically and now has an emergency fund that helped his family during the monsoon season when sales were low.",
    videoUrl: "#",
  },
  {
    name: "Priya",
    role: "Domestic Helper",
    qrCodeId: "priya-helper-002",
    story:
      "Priya works in multiple households across Delhi. Our scheme awareness workshop helped her register for health insurance, giving her family access to affordable healthcare for the first time.",
    videoUrl: "#",
  },
  {
    name: "Suresh",
    role: "Auto Rickshaw Driver",
    qrCodeId: "suresh-driver-003",
    story:
      "Suresh drives an auto rickshaw in Bangalore. Through our digital literacy training, he learned to use payment apps and government portals, increasing his daily earnings by 30%.",
    videoUrl: "#",
  },
  {
    name: "Kamala",
    role: "Flower Seller",
    qrCodeId: "kamala-seller-004",
    story:
      "Kamala sells flowers at a temple in Chennai. Our community savings program helped her join a women's self-help group, where she's building credit and planning to expand her business.",
    videoUrl: "#",
  },
  {
    name: "Raj",
    role: "Construction Worker",
    qrCodeId: "raj-worker-005",
    story:
      "Raj works on construction sites across Pune. Our emergency relief drive provided his family with essential supplies during COVID-19, and our job placement support helped him find steady work.",
    videoUrl: "#",
  },
  {
    name: "Meera",
    role: "Vegetable Vendor",
    qrCodeId: "meera-vendor-006",
    story:
      "Meera runs a small vegetable stall in Kolkata's markets. Through our index survey, we documented her challenges with income volatility and helped connect her with a microcredit program.",
    videoUrl: "#",
  },
];
