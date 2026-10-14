import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CircuitBoard,
  Code,
  Cpu,
  Gauge,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

export const siteProfile = {
  name: "Bixyl Lab IT & Engineering Consult",
  tagline: "Reliable Technology. Practical Solutions.",
  intro:
    "Bixyl Lab IT & Engineering Consult delivers practical technology and engineering services, including IT infrastructure, embedded systems, CCTV and security systems, electrical installations, event lighting, stage equipment, and technical maintenance for homes, businesses, venues, and live productions.",
  email: "Senamdagadusaviour@gmail.com",
  phone: "+233 24 891 9044",
  phoneHref: "tel:+233248919044",
  location: "Accra, Ghana",
  locationLink: "https://maps.app.goo.gl/9JG7LTSKgdDkaihM9",
  github: "https://github.com/SaviourMadeit",
  linkedin: "https://www.linkedin.com/in/saviour-dagadu",
  brand: "Bixyl Lab IT & Engineering Consult",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const stats = [
  { label: "Years experience", value: "3+", icon: Award },
  { label: "Projects delivered", value: "15+", icon: Briefcase },
  { label: "Technologies", value: "20+", icon: Code },
  { label: "Workshops led", value: "10+", icon: Users },
  { label: "Open source repos", value: "8+", icon: Github },
  { label: "Client satisfaction", value: "96%", icon: ShieldCheck },
];

export const professionalRoles = [
  "Embedded Systems Engineer",
  "Firmware Developer",
  "Hardware Designer",
  "Robotics Mentor",
  "Product and Systems Consultant",
];

export const educationBackground = [
  "Practical technical education and hands-on engineering training",
  "Electronics and embedded systems learning through project-based work",
  "Continuous professional development in IT, automation, and systems support",
  "Mentorship and STEM education for emerging technology learners",
];

export const businessVision =
  "To become a trusted technology partner that delivers practical, reliable, and innovative solutions for homes, businesses, schools, venues, and event environments.";

export const businessMission =
  "To provide dependable IT support, security, electrical, and event technology services that improve performance, safety, and client confidence through honest expertise and quality execution.";

export const businessPurpose =
  "To help people and organizations solve real technical problems using smart, safe, and sustainable systems that support growth, productivity, and memorable experiences.";

export const services = [
  {
    id: "it-support",
    title: "IT Support & Infrastructure",
    description:
      "Reliable IT support for homes, businesses, and event venues, including device setup, system troubleshooting, networking, and infrastructure maintenance.",
    highlights: ["Computer support", "Network setup", "System troubleshooting", "IT maintenance"],
    details: [
      "Computer, printer, and business device setup and troubleshooting",
      "Wi-Fi, router, and small-office network setup",
      "IT maintenance and practical technology advice",
    ],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern office workspace ready for reliable IT infrastructure",
    icon: Cpu,
    color: "from-sky-500 to-cyan-500",
  },
  {
    id: "cctv-access-security",
    title: "CCTV, Access & Security Systems",
    description:
      "Installation and support for CCTV, access control, and security monitoring solutions that strengthen safety and protect people and assets.",
    highlights: ["CCTV installation", "Access control", "Security upgrades", "System maintenance"],
    details: [
      "CCTV camera planning and installation for homes and business premises",
      "Access control and security system setup",
      "System checks, maintenance, and troubleshooting",
    ],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Security camera monitoring a property",
    icon: ShieldCheck,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "electrical-power-solutions",
    title: "Electrical & Power Solutions",
    description:
      "Safe and practical electrical support for homes, offices, commercial sites, and live event spaces with a focus on reliability and protection.",
    highlights: ["Electrical works", "Power systems", "Safety checks", "Load planning"],
    details: [
      "Electrical installation and maintenance support",
      "Power and load planning for equipment and event spaces",
      "Fault identification and practical safety checks",
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Electrical power infrastructure at dusk",
    icon: Building2,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "lighting-effects-events",
    title: "Stage Lighting, Fog, Haze, Laser Effects & Event Technology",
    description:
      "Complete stage and event technology support for concerts, churches, gatherings, and venue productions, from lighting to control systems and effects.",
    highlights: ["Stage lights", "Fog & haze", "Laser effects", "Event control systems"],
    details: [
      "Stage lighting, fixture, and lighting console setup",
      "Fog, haze, and laser effect equipment support",
      "Event system setup, programming, and show-day technical assistance",
    ],
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Colorful stage lighting at a live event",
    icon: Terminal,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "repair-support",
    title: "Maintenance, Repair & Technical Support",
    description:
      "Fast fault diagnosis, preventive maintenance, and repair support for lighting systems, electrical equipment, and technical installations.",
    highlights: ["Fault diagnosis", "On-site support", "Preventive care", "Equipment repair"],
    details: [
      "Fault finding and repair coordination for technical equipment",
      "Preventive inspection and maintenance planning",
      "On-site technical support for venues, businesses, and events",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Technician inspecting and maintaining equipment",
    icon: Rocket,
    color: "from-pink-500 to-rose-500",
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Farm King",
    category: "IoT & AI Agriculture",
    summary:
      "A smart farm intelligence platform connecting sensing, analytics, and automation for better field decisions.",
    description:
      "Farm King combines crop monitoring, predictive insights, and automation workflows to help agricultural teams optimize irrigation, detect issues earlier, and manage operations with cleaner data flows.",
    tech: ["AI analytics", "IoT sensors", "Cloud dashboards", "Automation"],
    featured: true,
    image: "/images/projects/farm king.jpg",
    links: {
      website: "https://www.farmking.tech/solutions/crop-analysis",
      github: "https://github.com/kondasMajid/TheFarmKing",
    },
    gradient: "from-green-500 to-emerald-600",
    icon: Network,
  },
  {
    id: 2,
    title: "Robotics Educational Kit",
    category: "STEM Learning & Robotics",
    summary:
      "A flexible robotics learning kit designed to teach practical electronics, coding, automation, and problem solving in an editable format.",
    description:
      "This program is built for educational environments where learners can explore sensors, robotics behavior, motion control, and prototyping while gaining hands-on technical confidence.",
    tech: ["Robotics", "STEM curriculum", "Sensors", "Editable kit design"],
    featured: true,
    image: "/images/projects/robotics-kit.jpg",
    links: {
      github: "https://github.com/SaviourMadeit",
    },
    gradient: "from-cyan-500 to-blue-600",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "ProSense AG-X",
    category: "Edge Controller",
    summary:
      "An industrial-edge controller built for precision agriculture and on-device sensing intelligence.",
    description:
      "The ProSense AG-X brings local analytics closer to the field with a rugged controller architecture designed for sensor fusion, environmental monitoring, and responsive automation.",
    tech: ["ESP32-S3", "Edge AI", "LoRa", "Sensor fusion"],
    featured: true,
    image: "/images/projects/Farm_King.jpeg",
    links: {
      github: "https://github.com/Farm-King/Prosense-AG-X",
    },
    gradient: "from-blue-500 to-cyan-600",
    icon: Gauge,
  },
  {
    id: 3,
    title: "STM32F4 Breakout Board",
    category: "Embedded Hardware",
    summary:
      "A practical development board built for fast prototyping and embedded experimentation.",
    description:
      "This custom PCB is designed to support reusable hardware prototyping with clean power delivery, USB integration, and accessible GPIO routing for electronics development.",
    tech: ["KiCad", "STM32F4", "PCB design", "USB-C"],
    featured: false,
    image: "/images/projects/STM32F4_Breakout.jpg",
    links: {
      github: "https://github.com/SaviourMadeit/STM32F4_Breakout_Board",
    },
    gradient: "from-purple-500 to-pink-600",
    icon: CircuitBoard,
  },
  {
    id: 4,
    title: "Gas Pipeline Sand Detector",
    category: "Industrial IoT",
    summary:
      "An acoustic edge-monitoring system for harsh pipeline environments and equipment protection.",
    description:
      "This embedded solution detects abnormal particulate movement in pipelines using sensor data and real-time signal processing to support early warning and operational safety.",
    tech: ["Arduino Uno R4", "DSP", "FFT", "Industrial monitoring"],
    featured: false,
    image: "/images/projects/SensorFusion.jpg",
    links: {
      github: "https://github.com/SaviourMadeit/Uno-R4-acoustic-sand-Dectector",
    },
    gradient: "from-orange-500 to-red-600",
    icon: Zap,
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description: "Clarify the problem, constraints, and business or technical objectives.",
  },
  {
    title: "Architecture",
    description: "Design hardware, firmware, and communication choices around reliability and scale.",
  },
  {
    title: "Build",
    description: "Develop prototypes, test subsystems, and validate with real-world conditions.",
  },
  {
    title: "Support",
    description: "Iterate after launch with debugging, optimization, and technical mentorship.",
  },
];

export const certifications = [
  {
    title: "Advanced Embedded Systems on Arm",
    issuer: "edX",
    date: "May 2023",
    credentialId: "6229a86a2590471f87619db23addc1c3",
    credentialUrl: "https://courses.edx.org/certificates/6229a86a2590471f87619db23addc1c3",
    category: "Embedded Systems",
  },
  {
    title: "Machine Learning at the Edge on Arm",
    issuer: "edX",
    date: "June 2023",
    credentialId: "32ff043d08b9445caf20412403d37ccd",
    credentialUrl: "https://courses.edx.org/certificates/32ff043d08b9445caf20412403d37ccd",
    category: "Edge AI",
  },
  {
    title: "FreeRTOS Real-Time OS",
    issuer: "Udemy",
    date: "November 2023",
    credentialId: "UC-XXXXXXXX",
    credentialUrl: "#",
    category: "RTOS",
  },
  {
    title: "Advanced PCB Design",
    issuer: "Altium Academy",
    date: "September 2023",
    credentialId: "AAL-XXXXXXXX",
    credentialUrl: "#",
    category: "Hardware Design",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Mr. Kofi Boateng",
    title: "Event Coordinator",
    company: "Accra Events Hub",
    testimonial:
      "Bixyl Lab IT & Engineering Consult brought professionalism and reliability to our stage lighting setup. The team understood the event flow and solved issues quickly on site.",
  },
  {
    id: 2,
    name: "Mrs. Afia Mensah",
    title: "Facility Manager",
    company: "Apex Community Centre",
    testimonial:
      "Their security and electrical support helped us improve safety and confidence across our venue. The work was clean, efficient, and well organized.",
  },
  {
    id: 3,
    name: "Mr. Daniel Owusu",
    title: "Business Owner",
    company: "Crestview Studio",
    testimonial:
      "We needed dependable technical support and fast troubleshooting. Bixyl Lab handled everything with practical expertise and excellent communication.",
  },
];

export const skills = [
  {
    category: "IT & Network Support",
    items: ["Computer setup", "Network installation", "System troubleshooting", "Device support", "Business IT maintenance"],
    icon: Cpu,
  },
  {
    category: "Security Systems",
    items: ["CCTV installation", "Access control", "Surveillance setup", "Security upgrades", "System checks"],
    icon: ShieldCheck,
  },
  {
    category: "Electrical & Power",
    items: ["Electrical installation", "Power troubleshooting", "Safety checks", "Load planning", "System diagnostics"],
    icon: Layers,
  },
  {
    category: "Event & AV Technology",
    items: ["Stage lighting", "Fog & haze", "Laser effects", "Console support", "Live event setup"],
    icon: Wifi,
  },
  {
    category: "Maintenance & Support",
    items: ["On-site repairs", "Preventive maintenance", "Technical support", "Client consultation", "Operational reliability"],
    icon: Users,
  },
];

export const aboutHighlights = [
  {
    title: "One trusted technical brand",
    description: "Bixyl Lab IT & Engineering Consult brings together IT, engineering, security, electrical, and event technology under a practical, client-first service model.",
    icon: Sparkles,
  },
  {
    title: "Service-first execution",
    description: "We focus on reliable solutions, responsive support, and professional delivery for homes, businesses, churches, and live event environments.",
    icon: BookOpen,
  },
  {
    title: "Problem-solving mindset",
    description: "Every project is approached with a clear understanding of safety, performance, and the real needs of the client or event.",
    icon: Target,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with FreeRTOS on STM32",
    date: "Dec 15, 2024",
    category: "RTOS",
    readTime: "8 min read",
    excerpt:
      "A practical guide to structuring tasks, queues, and synchronization for reliable firmware workflows.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
  {
    id: 2,
    title: "PCB Design Best Practices for Embedded Systems",
    date: "Dec 10, 2024",
    category: "Hardware",
    readTime: "12 min read",
    excerpt:
      "Essential advice for grounding, signal integrity, and design-for-manufacturing decisions in real products.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: 3,
    title: "ESP32 Deep Sleep: Maximizing Battery Life",
    date: "Dec 5, 2024",
    category: "IoT",
    readTime: "7 min read",
    excerpt:
      "How to reduce power draw, structure wake cycles, and design lower-maintenance battery-powered systems.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },
];

export const socialLinks = [
  { label: "GitHub", href: siteProfile.github, icon: Github },
  { label: "LinkedIn", href: siteProfile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${siteProfile.email}`, icon: Mail },
  { label: "Location", href: siteProfile.locationLink, icon: MapPin },
];

export const contactDetails = [
  { label: "Email", value: siteProfile.email, href: `mailto:${siteProfile.email}`, icon: Mail },
  { label: "Phone", value: siteProfile.phone, href: siteProfile.phoneHref, icon: MessageSquareText },
  { label: "Location", value: siteProfile.location, href: siteProfile.locationLink, icon: MapPin },
];

export const engineeringServices = services;
export const projects = portfolioProjects;
export const impactActivities = [
  {
    category: "Community impact",
    items: [
      "Mentoring young engineers and robotics students",
      "Facilitating practical STEM workshops",
      "Supporting open-source hardware education",
    ],
    color: "from-pink-500 to-rose-500",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    ],
  },
  {
    category: "Research & innovation",
    items: [
      "Exploring edge AI and sensor-driven systems",
      "Designing embedded products for real-world deployment",
      "Bridging research ideas into practical prototypes",
    ],
    color: "from-blue-500 to-cyan-500",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    ],
  },
];

export const securityElectricalServices = [
  {
    title: "Smart Security Solutions",
    description: "CCTV, access control, and monitoring systems designed for safer homes, offices, venues, and commercial operations.",
    icon: ShieldCheck,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Electrical & Power Support",
    description: "Electrical installation, maintenance, and troubleshooting for reliable power delivery in homes, businesses, and event spaces.",
    icon: Building2,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Technical Diagnostics",
    description: "On-site fault finding, preventive checks, and repair planning to keep critical systems running without disruptions.",
    icon: Gauge,
    color: "from-emerald-500 to-cyan-500",
  },
];
