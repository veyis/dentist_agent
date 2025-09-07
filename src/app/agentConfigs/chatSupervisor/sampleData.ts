export const exampleAccountInfo = {
  patientId: "SD-123456",
  name: "Alex Johnson",
  phone: "+1-206-135-1246",
  email: "alex.johnson@email.com",
  insurancePlan: "Delta Dental Premier",
  balanceDue: "$245.00",
  lastVisitDate: "2024-11-15",
  nextAppointmentDate: "2024-12-20",
  nextAppointmentTime: "2:30 PM",
  nextAppointmentType: "Routine Cleaning",
  status: "Active Patient",
  address: {
    street: "1234 Pine St",
    city: "Seattle",
    state: "WA",
    zip: "98101"
  },
  lastVisitDetails: {
    procedure: "Composite Filling",
    tooth: "#14",
    totalCost: "$325.00",
    insuranceCovered: "$195.00",
    patientResponsibility: "$130.00",
    notes: "Patient experienced minor sensitivity, prescribed sensitive toothpaste."
  },
  upcomingTreatmentPlan: [
    { procedure: "Crown", tooth: "#3", estimatedCost: "$1400", insuranceEstimate: "$700" },
    { procedure: "Deep Cleaning", quadrants: "All", estimatedCost: "$1100", insuranceEstimate: "$880" }
  ]
};

export const examplePolicyDocs = [
  {
    id: "POL-010",
    name: "Insurance Coverage Policy",
    topic: "insurance benefits coverage",
    content:
      "We accept most major dental insurance plans including Delta Dental, Cigna, MetLife, and Aetna. Preventive care (cleanings, exams, x-rays) is typically covered at 100%. Basic procedures (fillings, extractions) are covered at 80%. Major procedures (crowns, bridges, implants) are covered at 50%. Coverage varies by plan. We'll verify your benefits before treatment.",
  },
  {
    id: "POL-020",
    name: "New Patient Special Offers",
    topic: "new patient promotions discounts",
    content:
      "New patients receive a comprehensive exam, full set of X-rays, and cleaning for $89 (regularly $320). Teeth whitening special: $399 for in-office treatment or $199 for take-home kit with new patient exam. Family discount: 10% off for 3+ family members. Referral program: Both you and your referral receive $50 credit toward any treatment.",
  },
  {
    id: "POL-030",
    name: "Emergency Dental Care Policy",
    topic: "emergency appointments pain",
    content:
      "Same-day emergency appointments available for severe pain, trauma, or infection. Emergency exam fee is $150. After-hours emergency line available at 1-800-SMILE-911. Common emergencies include severe toothache, broken tooth, lost filling, dental abscess, or injury to teeth or gums.",
  },
  {
    id: "POL-040",
    name: "Payment Plans and Financing",
    topic: "payment plans financing options",
    content:
      "We offer flexible payment options including CareCredit with 0% interest for 6-24 months on treatments over $500. In-house payment plans available with 25% down payment. We accept all major credit cards, HSA/FSA cards, and offer a 5% discount for payment in full at time of service. Senior citizens receive 10% discount on all services.",
  },
  {
    id: "POL-050",
    name: "Pediatric Dental Care",
    topic: "children kids pediatric",
    content:
      "First visit recommended by age 1. We offer a child-friendly environment with TVs in treatment rooms. Preventive care includes fluoride treatments and sealants. Behavior management techniques used to ensure comfort. Parents welcome in treatment rooms. Special needs accommodations available.",
  }
];

export const exampleStoreLocations = [
  // California Locations
  {
    name: "Smile Dentist San Francisco Downtown",
    address: "450 Sutter St, Suite 2100, San Francisco, CA",
    zip_code: "94108",
    phone: "(415) 555-SMILE",
    hours: "Mon-Fri 8am-6pm, Sat 9am-2pm, Sun Closed",
    doctors: ["Dr. Emily Chen, DDS", "Dr. Michael Wong, DMD"],
    specialties: ["Cosmetic Dentistry", "Invisalign", "Implants"]
  },
  {
    name: "Smile Dentist San Jose Valley",
    address: "2855 Stevens Creek Blvd, Suite 200, Santa Clara, CA",
    zip_code: "95050",
    phone: "(408) 555-2002",
    hours: "Mon-Fri 7am-5pm, Sat 8am-1pm, Sun Closed",
    doctors: ["Dr. Jennifer Park, DDS", "Dr. Robert Martinez, DMD"],
    specialties: ["Family Dentistry", "Orthodontics", "Pediatric"]
  },
  {
    name: "Smile Dentist Sacramento Midtown",
    address: "1801 L St, Suite 100, Sacramento, CA",
    zip_code: "95811",
    phone: "(916) 555-3003",
    hours: "Mon-Fri 8am-5pm, Sat 9am-2pm, Sun Closed",
    doctors: ["Dr. David Thompson, DDS"],
    specialties: ["General Dentistry", "Root Canals", "Oral Surgery"]
  },
  // Southern California
  {
    name: "Smile Dentist Beverly Hills",
    address: "9400 Brighton Way, Suite 410, Beverly Hills, CA",
    zip_code: "90210",
    phone: "(310) 555-4004",
    hours: "Mon-Fri 9am-7pm, Sat 10am-4pm, Sun Closed",
    doctors: ["Dr. Victoria Sterling, DDS", "Dr. Alexander Stone, DMD"],
    specialties: ["Cosmetic Dentistry", "Veneers", "Smile Makeovers"]
  },
  {
    name: "Smile Dentist San Diego Downtown",
    address: "555 5th Ave, Suite 300, San Diego, CA",
    zip_code: "92101",
    phone: "(619) 555-5005",
    hours: "Mon-Fri 8am-6pm, Sat 9am-3pm, Sun Closed",
    doctors: ["Dr. Maria Rodriguez, DDS", "Dr. James Liu, DMD"],
    specialties: ["General Dentistry", "Periodontics", "Implants"]
  },
  {
    name: "Smile Dentist Irvine Spectrum",
    address: "670 Spectrum Center Dr, Suite 150, Irvine, CA",
    zip_code: "92618",
    phone: "(949) 555-6006",
    hours: "Mon-Fri 8am-5pm, Sat 9am-2pm, Sun Closed",
    doctors: ["Dr. Sarah Kim, DDS", "Dr. Andrew Patel, DMD"],
    specialties: ["Family Dentistry", "Invisalign", "Pediatric"]
  },
  // East Coast
  {
    name: "Smile Dentist Manhattan Midtown",
    address: "350 5th Ave, Floor 68, New York, NY",
    zip_code: "10118",
    phone: "(212) 555-7007",
    hours: "Mon-Fri 7am-7pm, Sat 8am-4pm, Sun 10am-2pm",
    doctors: ["Dr. Richard Goldman, DDS", "Dr. Lisa Chang, DMD", "Dr. Marcus Johnson, DDS"],
    specialties: ["Cosmetic Dentistry", "Full Mouth Reconstruction", "TMJ Treatment"]
  },
  {
    name: "Smile Dentist Boston Back Bay",
    address: "800 Boylston St, Suite 1500, Boston, MA",
    zip_code: "02199",
    phone: "(617) 555-8008",
    hours: "Mon-Fri 8am-6pm, Sat 9am-3pm, Sun Closed",
    doctors: ["Dr. Katherine O'Brien, DDS", "Dr. Thomas Murphy, DMD"],
    specialties: ["General Dentistry", "Endodontics", "Oral Surgery"]
  },
  {
    name: "Smile Dentist Washington DC Georgetown",
    address: "1234 Wisconsin Ave NW, Suite 400, Washington, DC",
    zip_code: "20007",
    phone: "(202) 555-9009",
    hours: "Mon-Fri 8am-5pm, Sat 9am-2pm, Sun Closed",
    doctors: ["Dr. Amanda Foster, DDS", "Dr. William Chen, DMD"],
    specialties: ["Family Dentistry", "Cosmetic", "Sedation Dentistry"]
  },
  {
    name: "Smile Dentist Miami Beach",
    address: "1601 Collins Ave, Suite 200, Miami Beach, FL",
    zip_code: "33139",
    phone: "(305) 555-1010",
    hours: "Mon-Fri 8am-6pm, Sat 9am-3pm, Sun Closed",
    doctors: ["Dr. Carlos Mendez, DDS", "Dr. Isabella Santos, DMD"],
    specialties: ["Cosmetic Dentistry", "Implants", "Full Smile Restoration"]
  }
];

export const dentalPrices = {
  preventive: {
    "Routine Cleaning": "$125",
    "Deep Cleaning (per quadrant)": "$275",
    "Fluoride Treatment": "$35",
    "Sealant (per tooth)": "$60",
    "X-rays (full set)": "$150",
    "X-ray (single)": "$35",
    "Comprehensive Exam": "$95",
    "Emergency Exam": "$150"
  },
  restorative: {
    "Composite Filling (1 surface)": "$195",
    "Composite Filling (2 surfaces)": "$245",
    "Composite Filling (3+ surfaces)": "$325",
    "Crown (porcelain)": "$1400",
    "Crown (metal)": "$1200",
    "Bridge (3-unit)": "$3600",
    "Root Canal (anterior)": "$950",
    "Root Canal (premolar)": "$1100",
    "Root Canal (molar)": "$1400"
  },
  cosmetic: {
    "Teeth Whitening (in-office)": "$550",
    "Teeth Whitening (take-home kit)": "$300",
    "Veneers (per tooth)": "$1500",
    "Bonding (per tooth)": "$350",
    "Invisalign (full treatment)": "$5500",
    "Traditional Braces": "$4500",
    "Smile Makeover Consultation": "$250"
  },
  surgical: {
    "Simple Extraction": "$225",
    "Surgical Extraction": "$425", 
    "Wisdom Tooth Extraction": "$525",
    "Dental Implant (single)": "$3500",
    "Bone Graft": "$850",
    "Gum Surgery": "$1200",
    "Sinus Lift": "$2500"
  }
};