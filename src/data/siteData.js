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
  name: "Saviour Dagadu",
  tagline: "Embedded Systems Engineer • Firmware Developer • Robotics Mentor",
  intro:
    "I design reliable embedded hardware and firmware that works in real environments — from concept and PCB design to deployed IoT systems and robotics education.",
  email: "Senamdagadusaviour@gmail.com",
  phone: "+233 24 891 9044",
  phoneHref: "tel:+233248919044",
  location: "Accra, Ghana",
  locationLink: "https://maps.google.com/?q=Accra,+Ghana",
  github: "https://github.com/SaviourMadeit",
  linkedin: "https://www.linkedin.com/in/saviour-dagadu",
  brand: "Saviour Dagadu",
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

export const services = [
  {
    id: "embedded-system-design",
    title: "Embedded Systems Design",
    description:
      "Custom microcontroller hardware and firmware architecture for dependable products from concept to production.",
    highlights: ["STM32", "ESP32", "AVR", "System architecture"],
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "firmware-development",
    title: "Firmware Development",
    description:
      "Low-level and real-time firmware development in C/C++ with robust drivers, power optimization, and protocol integration.",
    highlights: ["C/C++", "FreeRTOS", "UART / I2C / SPI / CAN", "Testing"],
    icon: Terminal,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "pcb-hardware-design",
    title: "PCB & Hardware Design",
    description:
      "Schematic capture, PCB layout, sensor integration, and mixed-signal systems designed for manufacturability and performance.",
    highlights: ["KiCad", "Altium", "Power design", "Signal integrity"],
    icon: Layers,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "iot-solutions",
    title: "IoT Solutions",
    description:
      "Connected device platforms for monitoring, automation, analytics, and remote operations across industrial and community use cases.",
    highlights: ["LoRa", "WiFi", "MQTT", "Cloud integration"],
    icon: Wifi,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "robotics-mentorship",
    title: "Robotics & STEM Training",
    description:
      "Hands-on robotics workshops and technical coaching for schools, clubs, startups, and emerging technology teams.",
    highlights: ["Workshops", "STEM coaching", "Hands-on labs", "Youth empowerment"],
    icon: GraduationCap,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "product-consulting",
    title: "Product Consulting",
    description:
      "Technical guidance for founders and teams to clarify requirements, validate architecture, and reduce development risk.",
    highlights: ["Architecture reviews", "Roadmaps", "Debugging", "Launch support"],
    icon: Rocket,
    color: "from-sky-500 to-indigo-500",
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
    name: "Mr. Kwame Mensah",
    title: "Project Manager",
    company: "The Makersplace",
    testimonial:
      "Working with Saviour on the Farm King project was incredible. His ability to translate complex requirements into working hardware solutions is remarkable.",
  },
  {
    id: 2,
    name: "Dr. Kofi Appiah",
    title: "Robotics Instructor & Mentor",
    company: "Ghana Code Club",
    testimonial:
      "Saviour's passion for teaching and mentoring is contagious. His workshops are engaging, practical, and leave learners inspired to build real systems.",
  },
  {
    id: 3,
    name: "Nana Owusu",
    title: "Junior Embedded Engineer",
    company: "Tech Startup",
    testimonial:
      "Saviour's mentorship transformed my understanding of IoT systems. His practical guidance made difficult concepts feel accessible and actionable.",
  },
];

export const skills = [
  {
    category: "Embedded Systems",
    items: ["STM32", "ESP32", "Raspberry Pi", "AVR", "FreeRTOS", "SPI/I2C/UART/CAN"],
    icon: Cpu,
  },
  {
    category: "Programming",
    items: ["C/C++", "Python", "Assembly (ARM/AVR)", "Git"],
    icon: Code,
  },
  {
    category: "Hardware Design",
    items: ["KiCad", "Altium Designer", "PCB Design", "Sensor Integration", "Mixed-Signal Systems"],
    icon: Layers,
  },
  {
    category: "IoT & Connectivity",
    items: ["LoRa", "WiFi", "Bluetooth", "MQTT", "WebSocket", "REST APIs"],
    icon: Wifi,
  },
  {
    category: "Leadership & Education",
    items: ["Workshops", "Mentorship", "STEM training", "Technical coaching"],
    icon: Users,
  },
];

export const aboutHighlights = [
  {
    title: "Embedded by training",
    description: "I work across hardware, firmware, and systems thinking to deliver practical, production-ready engineering outcomes.",
    icon: Sparkles,
  },
  {
    title: "Mentor and educator",
    description: "I help students and teams turn ideas into working technical prototypes while building confidence and capability.",
    icon: BookOpen,
  },
  {
    title: "Problem-first mindset",
    description: "Every product decision is tied back to reliability, manufacturability, and the real constraints of the operating environment.",
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
    title: "CCTV & Access Systems",
    description: "Security installations and maintenance for homes, offices, and event environments.",
    icon: ShieldCheck,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Electrical Installations",
    description: "Reliable electrical work designed for homes, offices, and small commercial spaces.",
    icon: Building2,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "System Diagnostics",
    description: "On-site troubleshooting, safety checks, and operational support for electrical and electronic systems.",
    icon: Gauge,
    color: "from-emerald-500 to-cyan-500",
  },
];
