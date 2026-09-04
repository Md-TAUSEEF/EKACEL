import {
  BatteryCharging,
  Factory,
  Gauge,
  Leaf,
  Network,
  ShieldCheck,
  Sun,
  Truck,
  Zap,
} from "lucide-react";

export const industryContent = {
  automotive: {
    label: "Automotive Energy",

    introTitle: "Reliable Battery Power for Every Journey.",

    intro:
      "Battery solutions designed for automotive applications ranging from two-wheelers and passenger vehicles to commercial and heavy-duty fleets.",

    highlights: [
      "Starting Power",
      "Fleet Applications",
      "Durable Design",
      "Application Focus",
    ],

    imageLabel: "AUTOMOTIVE ENERGY",
    imageTitle: "Reliable power for every journey.",

    benefits: [
      {
        icon: Truck,
        title: "Automotive Applications",
        text:
          "Battery solutions designed around the requirements of different vehicle categories and operating conditions.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: Zap,
        title: "Reliable Starting Power",
        text:
          "Designed to provide dependable power for vehicle starting and electrical requirements.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: ShieldCheck,
        title: "Durable Performance",
        text:
          "Built around practical automotive requirements and regular operating conditions.",
        bg: "bg-violet-50",
        color: "text-violet-600",
        border: "border-violet-100",
      },
      {
        icon: BatteryCharging,
        title: "Fleet Ready",
        text:
          "Solutions suitable for applications ranging from individual vehicles to commercial fleets.",
        bg: "bg-amber-50",
        color: "text-amber-600",
        border: "border-amber-100",
      },
    ],

    applications: [
      "Two-wheelers",
      "Passenger vehicles",
      "Commercial vehicles",
      "Heavy-duty fleets",
    ],

    process: [
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "The battery stores electrical energy required by the vehicle system.",
      },
      {
        icon: Zap,
        title: "Vehicle Start",
        text:
          "Stored energy is supplied when the vehicle requires starting power.",
      },
      {
        icon: Gauge,
        title: "Electrical Support",
        text:
          "The battery supports electrical loads according to vehicle requirements.",
      },
      {
        icon: ShieldCheck,
        title: "Reliable Operation",
        text:
          "Designed around dependable performance across everyday automotive use.",
      },
    ],

    principles: [
      "Automotive-focused design",
      "Reliable starting power",
      "Vehicle-specific applications",
      "Fleet-oriented solutions",
      "Durable battery construction",
      "Practical operating performance",
    ],
  },

  telecom: {
    label: "Telecom & Infrastructure",

    introTitle: "Always-On Power for Connected Infrastructure.",

    intro:
      "Backup battery solutions designed to support telecom towers, network equipment and infrastructure where dependable power availability is essential.",

    highlights: [
      "Always-On Backup",
      "Network Continuity",
      "Remote Applications",
      "Reliable Power",
    ],

    imageLabel: "TELECOM & INFRASTRUCTURE",
    imageTitle: "Power that keeps critical networks connected.",

    benefits: [
      {
        icon: Network,
        title: "Network Continuity",
        text:
          "Provide backup energy to critical telecom and communication equipment.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: ShieldCheck,
        title: "Backup Reliability",
        text:
          "Designed to support essential infrastructure during interruptions in primary power.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: BatteryCharging,
        title: "Remote Deployment",
        text:
          "Suitable for distributed infrastructure and remote network locations.",
        bg: "bg-violet-50",
        color: "text-violet-600",
        border: "border-violet-100",
      },
      {
        icon: Zap,
        title: "Critical Power",
        text:
          "Energy storage focused on maintaining availability for essential network loads.",
        bg: "bg-amber-50",
        color: "text-amber-600",
        border: "border-amber-100",
      },
    ],

    applications: [
      "Telecom towers",
      "Network sites",
      "Communication infrastructure",
      "Remote infrastructure",
    ],

    process: [
      {
        icon: Network,
        title: "Primary Power",
        text:
          "The telecom site receives energy from its available primary power source.",
      },
      {
        icon: BatteryCharging,
        title: "Battery Backup",
        text:
          "The battery stores energy and remains available for backup operation.",
      },
      {
        icon: ShieldCheck,
        title: "Power Interruption",
        text:
          "Stored energy becomes available when the primary power source is interrupted.",
      },
      {
        icon: Network,
        title: "Network Continuity",
        text:
          "Backup power supports essential telecom equipment and infrastructure.",
      },
    ],

    principles: [
      "Telecom-focused backup",
      "Network continuity",
      "Remote-site suitability",
      "Reliable energy storage",
      "Critical load support",
      "Infrastructure-focused design",
    ],
  },

  "commercial-industrial": {
    label: "Commercial & Industrial",

    introTitle: "Power Continuity for Demanding Facilities.",

    intro:
      "Energy storage and backup solutions designed for commercial buildings, industrial facilities and operational environments where reliable power supports productivity.",

    highlights: [
      "Power Continuity",
      "Critical Load Support",
      "Scalable Systems",
      "Operational Reliability",
    ],

    imageLabel: "COMMERCIAL & INDUSTRIAL",
    imageTitle: "Reliable energy for demanding operations.",

    benefits: [
      {
        icon: Factory,
        title: "Industrial Applications",
        text:
          "Designed around the demanding energy requirements of industrial operations and facilities.",
        bg: "bg-orange-50",
        color: "text-orange-600",
        border: "border-orange-100",
      },
      {
        icon: ShieldCheck,
        title: "Power Continuity",
        text:
          "Support essential loads when primary power availability is interrupted.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Network,
        title: "Scalable Storage",
        text:
          "Storage configurations can be planned around facility requirements and load profiles.",
        bg: "bg-violet-50",
        color: "text-violet-600",
        border: "border-violet-100",
      },
      {
        icon: Gauge,
        title: "Load Management",
        text:
          "Stored energy can support selected loads according to operational requirements.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
    ],

    applications: [
      "Commercial buildings",
      "Manufacturing facilities",
      "Warehouses",
      "Processing facilities",
    ],

    process: [
      {
        icon: Network,
        title: "Power Input",
        text:
          "Energy enters the system from the available power source.",
      },
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "Energy is stored and kept available according to site requirements.",
      },
      {
        icon: Gauge,
        title: "Load Support",
        text:
          "Stored energy supports selected commercial or industrial loads.",
      },
      {
        icon: ShieldCheck,
        title: "Continuity",
        text:
          "Backup operation helps maintain essential facility operations.",
      },
    ],

    principles: [
      "Commercial applications",
      "Industrial-duty support",
      "Critical load management",
      "Scalable energy storage",
      "Operational continuity",
      "Application-specific configuration",
    ],
  },

  solar: {
    label: "Renewable & Solar",

    introTitle: "Make Solar Energy Work Beyond Daylight.",

    intro:
      "Battery storage solutions designed to improve the practical use of solar generation by storing available energy for use when sunlight is limited.",

    highlights: [
      "Solar Integration",
      "Energy Storage",
      "Day-to-Night Use",
      "Backup Support",
    ],

    imageLabel: "RENEWABLE & SOLAR",
    imageTitle: "Store the sun. Use the energy when needed.",

    benefits: [
      {
        icon: Sun,
        title: "Solar Integration",
        text:
          "Designed to work alongside compatible solar generation systems.",
        bg: "bg-amber-50",
        color: "text-amber-600",
        border: "border-amber-100",
      },
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "Store available solar energy for use when generation is lower.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: Zap,
        title: "Day-to-Night Use",
        text:
          "Stored energy can extend the practical availability of solar-generated power.",
        bg: "bg-violet-50",
        color: "text-violet-600",
        border: "border-violet-100",
      },
      {
        icon: Leaf,
        title: "Cleaner Energy Use",
        text:
          "Storage can help improve utilisation of available renewable generation.",
        bg: "bg-green-50",
        color: "text-green-600",
        border: "border-green-100",
      },
    ],

    applications: [
      "Residential solar systems",
      "Commercial solar installations",
      "Industrial solar applications",
      "Distributed energy systems",
    ],

    process: [
      {
        icon: Sun,
        title: "Solar Generation",
        text:
          "Solar panels generate electricity during available sunlight.",
      },
      {
        icon: BatteryCharging,
        title: "Store Energy",
        text:
          "Available excess energy is stored in the battery system.",
      },
      {
        icon: Zap,
        title: "Energy Usage",
        text:
          "Stored energy becomes available when solar generation decreases.",
      },
      {
        icon: ShieldCheck,
        title: "Backup Support",
        text:
          "Stored energy can support selected loads when required.",
      },
    ],

    principles: [
      "Renewable energy integration",
      "Solar energy storage",
      "Day-to-night availability",
      "Backup support",
      "Improved solar utilisation",
      "Flexible storage configuration",
    ],
  },

  storage: {
    label: "Energy Storage",

    introTitle: "Flexible Storage for Changing Energy Demand.",

    intro:
      "Energy storage solutions designed to support demand management, backup requirements and flexible energy usage across different applications.",

    highlights: [
      "Scalable Storage",
      "Demand Support",
      "Backup Capability",
      "Flexible Deployment",
    ],

    imageLabel: "ENERGY STORAGE",
    imageTitle: "Store energy today. Use it when it matters.",

    benefits: [
      {
        icon: BatteryCharging,
        title: "Scalable Storage",
        text:
          "Storage capacity can be configured around application requirements.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Gauge,
        title: "Demand Support",
        text:
          "Stored energy can support selected loads when demand increases.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: ShieldCheck,
        title: "Backup Capability",
        text:
          "Energy remains available to support critical loads during interruptions.",
        bg: "bg-violet-50",
        color: "text-violet-600",
        border: "border-violet-100",
      },
      {
        icon: Network,
        title: "Flexible Deployment",
        text:
          "Suitable for different energy infrastructure and storage applications.",
        bg: "bg-amber-50",
        color: "text-amber-600",
        border: "border-amber-100",
      },
    ],

    applications: [
      "Commercial facilities",
      "Industrial sites",
      "Behind-the-meter systems",
      "Grid-support applications",
    ],

    process: [
      {
        icon: Network,
        title: "Energy Input",
        text:
          "Energy is supplied from available generation or grid sources.",
      },
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "Available energy is stored for future use.",
      },
      {
        icon: Gauge,
        title: "Energy Dispatch",
        text:
          "Stored energy is supplied according to application requirements.",
      },
      {
        icon: ShieldCheck,
        title: "Load Support",
        text:
          "The system supports selected loads and backup requirements.",
      },
    ],

    principles: [
      "Scalable storage",
      "Demand-focused energy management",
      "Backup capability",
      "Flexible deployment",
      "Load support",
      "Future-ready infrastructure",
    ],
  },

  mobility: {
    label: "Electric Mobility",

    introTitle: "Energy Storage for the Next Generation of Mobility.",

    intro:
      "Battery solutions designed for electric mobility applications, supporting traction requirements and the evolving needs of electric vehicle systems.",

    highlights: [
      "Electric Mobility",
      "Traction Applications",
      "Energy Density Focus",
      "Application-Specific Design",
    ],

    imageLabel: "ELECTRIC MOBILITY",
    imageTitle: "Battery power built for electric movement.",

    benefits: [
      {
        icon: Zap,
        title: "Traction Power",
        text:
          "Battery systems designed to provide stored electrical energy for electric mobility applications.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "Store electrical energy for use by electric vehicle power systems.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: Gauge,
        title: "Application Focus",
        text:
          "Battery configurations can be developed around vehicle and operating requirements.",
        bg: "bg-violet-50",
        color: "text-violet-600",
        border: "border-violet-100",
      },
      {
        icon: ShieldCheck,
        title: "Reliable Operation",
        text:
          "Designed around dependable energy delivery for electric mobility applications.",
        bg: "bg-amber-50",
        color: "text-amber-600",
        border: "border-amber-100",
      },
    ],

    applications: [
      "Electric two-wheelers",
      "Electric three-wheelers",
      "Electric mobility platforms",
      "Commercial electric vehicles",
    ],

    process: [
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "Electrical energy is stored inside the vehicle battery system.",
      },
      {
        icon: Zap,
        title: "Power Delivery",
        text:
          "Stored energy is delivered to the vehicle's electric power system.",
      },
      {
        icon: Gauge,
        title: "Traction",
        text:
          "Electrical power supports vehicle movement and operating requirements.",
      },
      {
        icon: ShieldCheck,
        title: "Mobility",
        text:
          "The battery system supports dependable electric mobility operation.",
      },
    ],

    principles: [
      "Electric mobility applications",
      "Traction-focused energy storage",
      "Application-specific configuration",
      "Reliable power delivery",
      "Flexible battery architecture",
      "Future-focused mobility",
    ],
  },

  "ev-infrastructure": {
    label: "EV Infrastructure",

    introTitle: "Reliable Energy Behind the EV Charging Network.",

    intro:
      "Energy storage and backup solutions designed to support EV charging infrastructure where dependable power availability and flexible energy management are important.",

    highlights: [
      "Charging Support",
      "Energy Storage",
      "Backup Power",
      "Flexible Infrastructure",
    ],

    imageLabel: "EV INFRASTRUCTURE",
    imageTitle: "Supporting the infrastructure behind electric mobility.",

    benefits: [
      {
        icon: Zap,
        title: "Charging Support",
        text:
          "Energy systems designed to support the power requirements of EV charging infrastructure.",
        bg: "bg-blue-50",
        color: "text-blue-600",
        border: "border-blue-100",
      },
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "Stored energy can provide additional flexibility for charging applications.",
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        border: "border-emerald-100",
      },
      {
        icon: ShieldCheck,
        title: "Backup Power",
        text:
          "Energy storage can support selected infrastructure loads during power interruptions.",
        bg: "bg-violet-50",
        color: "text-violet-600",
        border: "border-violet-100",
      },
      {
        icon: Network,
        title: "Infrastructure Flexibility",
        text:
          "Solutions can be configured around charging-site requirements and available power sources.",
        bg: "bg-amber-50",
        color: "text-amber-600",
        border: "border-amber-100",
      },
    ],

    applications: [
      "EV charging stations",
      "Fleet charging facilities",
      "Commercial charging sites",
      "EV infrastructure projects",
    ],

    process: [
      {
        icon: Network,
        title: "Power Supply",
        text:
          "The charging infrastructure receives energy from available power sources.",
      },
      {
        icon: BatteryCharging,
        title: "Energy Storage",
        text:
          "Battery storage keeps energy available for flexible site operation.",
      },
      {
        icon: Zap,
        title: "Charging Support",
        text:
          "Stored or available energy can support charging infrastructure requirements.",
      },
      {
        icon: ShieldCheck,
        title: "Backup",
        text:
          "Energy storage can provide backup support for selected infrastructure loads.",
      },
    ],

    principles: [
      "EV charging support",
      "Energy storage integration",
      "Backup capability",
      "Flexible infrastructure",
      "Load management",
      "Electric mobility readiness",
    ],
  },
};