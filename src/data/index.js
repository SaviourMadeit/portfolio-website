// Data extracted from App.jsx
import {
	Award,
	Briefcase,
	Camera,
	CircuitBoard,
	Code,
	Cpu,
	Github,
	Heart,
	Layers,
	LucideSmartphone,
	Music,
	Network,
	Plug,
	ShieldAlert,
	ShieldCheck,
	Target,
	Terminal,
	Users,
	Wifi,
	Zap,
} from "lucide-react";

const Chip = Cpu;

export const projects = [
	{
		id: 1,
		title: "Farm King",
		category: "IoT & AI",
		description:
			"Farm King is a complete farm management tool with crop planning, IoT, and analytics. Its open platform fosters community collaboration and customization for your needs.",
		fullDescription: `Farm King revolutionizes agricultural management through a comprehensive IoT ecosystem combined with AI-powered analytics. This platform enables farmers to monitor crop health in real-time, predict yield outcomes, and automate irrigation systems.

Key Features:
• Real-time crop monitoring through sensor networks
• Predictive analytics for disease detection
• Automated irrigation and climate control
• Mobile dashboard for remote management
• Community-driven knowledge sharing platform

The system integrates multiple IoT devices including soil moisture sensors, weather stations, and automated control systems, all feeding data into a centralized AI engine for actionable insights.`,
		tech: [
			"AI & Machine Learning",
			"IoT Sensors & Device Management",
			"Web & Mobile Dashboard",
			"Predictive Analytics",
			"Edge Computing",
			"Cloud Architecture",
			"Real-time Monitoring",
		],
		links: {
			website: "https://www.farmking.tech/solutions/crop-analysis",
			github: "https://github.com/kondasMajid/TheFarmKing",
		},
		featured: true,
		gradient: "from-green-400 to-emerald-600",
		icon: Layers,
		image: "/images/farm king.jpg",
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		gallery: [
			"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
			"https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80",
			"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
		],
	},
	{
		id: 2,
		title: "ProSense AG-X Precision Controller",
		category: "AIoT, Smart Agriculture, Edge Computing",
		description:
			"The core hardware platform for FarmKing's smart ecosystem. This industrial-grade edge controller enables real-time monitoring of crop health, automated environmental control, and on-device AI for predictive analytics and early disease detection, feeding data to the FarmKing dashboard.",
		fullDescription: `The ProSense AG-X is a rugged, industrial-grade edge computing platform designed for precision agriculture applications. This controller serves as the nerve center for FarmKing's IoT ecosystem, processing data locally to reduce latency and ensure operation even in poor connectivity areas.

Technical Specifications:
• ESP32-S3 dual-core processor with AI acceleration
• Supports LoRa, GSM, WiFi, and Bluetooth connectivity
• On-device ML for immediate disease detection
• Environmental sensor integration (temperature, humidity, soil pH)
• Weather-resistant industrial enclosure
• Real-time data synchronization with FarmKing Cloud

The system processes sensor data locally using TensorFlow Lite models, providing instant alerts for crop anomalies while maintaining full cloud synchronization for historical analysis.`,
		tech: [
			"ESP32-S3",
			"Edge ML",
			"IoT Sensor Fusion",
			"LoRa/GSM/Wi-Fi",
			"FarmKing Cloud API",
			"TensorFlow Lite",
			"Real-time Processing",
		],
		links: {
			github: "https://github.com/Farm-King/Prosense-AG-X",
		},
		featured: false,
		gradient: "from-blue-400 to-cyan-600",
		icon: Cpu,
		image: "/images/Farm_King.jpeg",
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		gallery: [
			"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
		],
	},
	{
		id: 3,
		title: "STM32F4 Breakout Board",
		category: "Hardware Design",
		description:
			"Professional-grade custom PCB design for STM32F4 development, featuring optimized power delivery, USB connectivity, and comprehensive GPIO access. Demonstrates advanced PCB layout and hardware design capabilities.",
		fullDescription: `A custom-designed breakout board for STM32F4 series microcontrollers, optimized for development and prototyping. This board provides all necessary peripherals in a compact form factor while maintaining signal integrity and power efficiency.

Design Features:
• 4-layer PCB with proper power and ground planes
• USB-C connectivity with power delivery
• Comprehensive GPIO breakout with protection circuitry
• On-board debugger (ST-Link V3)
• Multiple power domains with LDO regulation
• Mechanical mounting points for industrial use

The board supports all STM32F4 peripherals including ADC, DAC, timers, and communication interfaces, making it ideal for rapid prototyping and educational purposes.`,
		tech: [
			"KiCad",
			"STM32F4",
			"PCB Design",
			"Power Management",
			"Signal Integrity",
			"USB-C PD",
			"Hardware Debugging",
		],
		links: {
			github: "https://github.com/SaviourMadeit/STM32F4_Breakout_Board",
		},
		featured: false,
		gradient: "from-purple-400 to-pink-600",
		icon: Cpu,
		image: "/images/STM32F4_Breakout.jpg",
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		gallery: [
			"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80",
			"https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=600&q=80",
		],
	},
	{
		id: 4,
		title: "Gas Pipeline Sand Detector",
		category: "Embedded Systems",
		description:
			"Industrial IoT sensor system utilizing Arduino Uno R4 WiFi for acoustic detection and analysis in harsh environments. Features real-time signal processing and cloud connectivity.",
		fullDescription: `An industrial-grade acoustic monitoring system designed for sand detection in Oil/Liquid pipelines. This embedded solution uses advanced signal processing algorithms to detect particulate matter through acoustic analysis, providing early warning for equipment protection.

System Architecture:
• Arduino Uno R4 WiFi for edge processing
• MEMS microphone array for directional detection
• Custom DSP algorithms for noise filtering
• Real-time FFT analysis on edge
• Cloud synchronization for trend analysis
• Industrial temperature range operation

The system implements adaptive filtering to distinguish between normal pipeline noise and sand particles, sending alerts when thresholds are exceeded to prevent equipment damage.`,
		tech: [
			"Arduino Uno R4",
			"C++",
			"Acoustic Sensors",
			"DSP",
			"FFT Analysis",
			"Industrial IoT",
			"Real-time Processing",
		],
		links: {
			github: "https://github.com/SaviourMadeit/Uno-R4-acoustic-sand-Dectector",
		},
		featured: false,
		gradient: "from-orange-400 to-red-600",
		icon: Terminal,
		image: "/images/SensorFusion.jpg",
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		gallery: [
			"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
		],
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
			"A comprehensive guide to implementing FreeRTOS on STM32 microcontrollers, covering task management, queues, semaphores, and real-world application patterns.",
		content: "Full article content about FreeRTOS implementation...",
		gradient: "from-blue-500 to-purple-600",
		image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
	},
	{
		id: 2,
		title: "PCB Design Best Practices for Embedded Systems",
		date: "Dec 10, 2024",
		category: "Hardware",
		readTime: "12 min read",
		excerpt:
			"Essential tips and techniques for designing reliable PCBs for embedded applications, from schematic capture to manufacturing considerations and EMI mitigation.",
		content: "Full article content about PCB design...",
		gradient: "from-green-500 to-teal-600",
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
	},
	{
		id: 3,
		title: "ESP32 Deep Sleep: Maximizing Battery Life",
		date: "Dec 5, 2024",
		category: "IoT",
		readTime: "6 min read",
		excerpt:
			"Learn how to implement deep sleep modes on ESP32 to achieve months of battery life in your IoT projects through power optimization strategies.",
		content: "Full article content about ESP32 power optimization...",
		gradient: "from-orange-500 to-red-600",
		image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
	},
];

export const impactActivities = [
	{
		category: "Community Activities",
		icon: Users,
		items: [
			"Organized IoT workshops for local tech communities",
			"Mentored 250+ students in Robotics and Phyical Computing",
			"Tech speaker at regional conferences",
		],
		color: "from-blue-400 to-cyan-400",
		gallery: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
		],
	},
	{
		category: "Mentorship",
		icon: Target,
		items: [
			"Provided internship opportunities for University students",
			"University project guidance",
			"Career counseling for tech students",
			"Trained 30+ ICT Teachers in IoT and embedded systems"
		],
		color: "from-green-400 to-emerald-400",
		gallery: [
			"/images/mentorship/SSCS_2024.jpg",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
		],
	},
	{
		category: "Volunteering",
		icon: Heart,
		items: [
			"Teaching programming to underprivileged youth",
			"Open-source hardware initiatives",
			"Environmental IoT projects for communities",
			"STEM education outreach programs",
		],
		color: "from-pink-400 to-rose-400",
		gallery: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
		],
	},
	{
		category: "Achievements",
		icon: Award,
		items: [
			"Hackathon winner - IoT Innovation Challenge 2023",
			"Published research on edge computing",
			"Recognized as top contributor to open-source hardware",
			"Featured in local tech publications",
		],
		color: "from-yellow-400 to-orange-400",
		gallery: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
		],
	},
];

export const certifications = [
	{
		id: 1,
		title: "Advanced Embedded Systems on Arm",
		issuer: "Edx",
		date: "May 2023",
		credentialId: "6229a86a2590471f87619db23addc1c3",
		credentialUrl:
			"https://courses.edx.org/certificates/6229a86a2590471f87619db23addc1c3",
		category: "IoT, Embedded Systems",
		icon: LucideSmartphone,
		color: "from-blue-400 to-cyan-400",
	},
	{
		id: 2,
		title: "Machine Learning at the Edge on Arm",
		issuer: "edX",
		date: " June 2023",
		credentialId: "32ff043d08b9445caf20412403d37ccd",
		credentialUrl:
			"https://courses.edx.org/certificates/32ff043d08b9445caf20412403d37ccd",
		category: "Machine Learning on Edge",
		icon: Cpu,
		color: "from-purple-400 to-pink-400",
	},
	{
		id: 3,
		title: "FreeRTOS Real-Time OS",
		issuer: "Udemy",
		date: "November 2023",
		credentialId: "UC-XXXXXXXX",
		credentialUrl: "#",
		category: "RTOS",
		icon: Zap,
		color: "from-orange-400 to-red-400",
	},
	{
		id: 4,
		title: "Advanced PCB Design",
		issuer: "Altium Academy",
		date: "September 2023",
		credentialId: "AAL-XXXXXXXX",
		credentialUrl: "#",
		category: "Hardware Design",
		icon: Layers,
		color: "from-green-400 to-emerald-400",
	},
	{
		id: 5,
		title: "Wireless Sensor Networks",
		issuer: "Coursera",
		date: "July 2023",
		credentialId: "UC-XXXXXXXX",
		credentialUrl: "#",
		category: "Networking",
		icon: Wifi,
		color: "from-cyan-400 to-blue-400",
	},
	{
		id: 6,
		title: "Microcontroller Programming Mastery",
		issuer: "FastBit",
		date: "May 2023",
		credentialId: "FB-XXXXXXXX",
		credentialUrl: "#",
		category: "Programming",
		icon: Code,
		color: "from-pink-400 to-rose-400",
	},
];

export const testimonials = [
	{
		id: 1,
		name: "Prof. Kwame Mensah",
		title: "Department Head, Electronics Engineering",
		company: "Accra Technical University",
		testimonial:
			"Saviour is an exceptional student with deep expertise in embedded systems. His contributions to our capstone projects have been outstanding, and his mentoring of junior students is truly inspiring.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
		rating: 5,
	},
	{
		id: 2,
		name: "Ama Boateng",
		title: "Project Manager",
		company: "The Makersplace",
		testimonial:
			"Working with Saviour on the Farm King project was incredible. His ability to translate complex requirements into working hardware solutions is remarkable. A true innovator!",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
		rating: 5,
	},
	{
		id: 3,
		name: "Dr. Kofi Appiah",
		title: "Robotics Instructor & Mentor",
		company: "Ghana Code Club",
		testimonial:
			"Saviour's passion for teaching and mentoring is contagious. The workshops he conducts are engaging, practical, and leave students inspired to pursue careers in embedded systems.",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
		rating: 5,
	},
	{
		id: 4,
		name: "Nana Owusu",
		title: "Junior Embedded Engineer (Mentee)",
		company: "Tech Startup",
		testimonial:
			"Saviour's mentorship transformed my understanding of IoT systems. His patience, expertise, and willingness to share knowledge have been invaluable to my career growth.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
		rating: 5,
	},
];

export const skills = [
	{
		category: "Embedded Systems",
		icon: Chip,
		items: [
			"STM32",
			"ESP32",
			"Raspberry Pi",
			"Arduino",
			"FreeRTOS",
			"SPI/I2C/UART/CAN",
		],
		color: "from-blue-400 to-cyan-400",
	},
	{
		category: "Programming",
		icon: Code,
		items: ["C/C++", "Python", "Assembly (ARM/AVR)", "Gitbash"],
		color: "from-purple-400 to-pink-400",
	},
	{
		category: "Hardware Design",
		icon: Layers,
		items: [
			"KiCad",
			"Eagle",
			"PCB Design",
			"Sensor Integration",
			"Mixed-Signal Systems",
		],
		color: "from-green-400 to-emerald-400",
	},
	{
		category: "IoT & Connectivity",
		icon: Wifi,
		items: ["LoRa", "WiFi", "Bluetooth", "MQTT", "WebSocket", "REST APIs"],
		color: "from-orange-400 to-red-400",
	},
	{
		category: "Software Tools",
		icon: Terminal,
		items: ["Git", "Docker", "VSCode", "PlatformIO", "Jira", "Figma"],
		color: "from-indigo-400 to-purple-400",
	},
	{
		category: "Currently Learning",
		icon: Zap,
		items: [
			"IC Layout Design",
			"Cadence Tools",
			"Verilog/VHDL",
			"ASIC Design",
		],
		color: "from-yellow-400 to-orange-400",
	},
];

export const stats = [
	{ label: "Years Experience", value: "3+", icon: Award },
	{ label: "Projects Completed", value: "15+", icon: Briefcase },
	{ label: "Technologies", value: "20+", icon: Code },
	{ label: "Lines of Code", value: "50K+", icon: Terminal },
	{ label: "Workshops Conducted", value: "10+", icon: Users },
	{ label: "Open Source Repos", value: "8+", icon: Github },
];

// Category 1: Embedded systems / firmware / IoT engineering services
export const engineeringServices = [
	{
		title: "Embedded Systems Design",
		icon: Cpu,
		description:
			"Custom firmware and hardware architecture for microcontroller-based products, from concept through production, built on STM32, ESP32, and AVR platforms.",
		color: "from-blue-400 to-cyan-400",
	},
	{
		title: "Firmware Development",
		icon: Code,
		description:
			"Low-level and real-time firmware in C/C++ with FreeRTOS, covering drivers, communication protocols (SPI/I2C/UART/CAN), and power-optimized designs.",
		color: "from-purple-400 to-pink-400",
	},
	{
		title: "PCB & Hardware Design",
		icon: Layers,
		description:
			"Schematic capture and PCB layout in KiCad/Eagle, sensor integration, and mixed-signal system design ready for fabrication.",
		color: "from-green-400 to-emerald-400",
	},
	{
		title: "IoT Solutions",
		icon: Wifi,
		description:
			"End-to-end connected device systems: sensor networks, edge computing, cloud sync, and dashboards for real-time monitoring and control.",
		color: "from-orange-400 to-red-400",
	},
	{
		title: "Robotics Mentorship & Workshops",
		icon: Users,
		description:
			"Hands-on training and mentorship for individuals and teams looking to build robotics and embedded systems skills, from fundamentals to advanced projects.",
		color: "from-indigo-400 to-blue-400",
	},
	{
		title: "Technical Consulting",
		icon: Briefcase,
		description:
			"Design reviews, feasibility studies, and technical guidance to help you make the right hardware and firmware decisions before you build.",
		color: "from-yellow-400 to-orange-400",
	},
];

// Category 2: Security & electrical installation services (BIXYL LAB IT Consult)
export const securityElectricalServices = [
	{
		title: "Access Control Systems",
		icon: ShieldCheck,
		description:
			"Card, biometric, and keypad access control installation for homes, offices, and gated facilities.",
		color: "from-sky-400 to-blue-500",
	},
	{
		title: "CCTV Surveillance Systems",
		icon: Camera,
		description:
			"Full CCTV design, installation, and setup — analog and IP camera systems with remote monitoring.",
		color: "from-blue-400 to-indigo-500",
	},
	{
		title: "DJ Par Light Repair & Maintenance",
		icon: Music,
		description:
			"Diagnosis, repair, and upkeep of DJ and stage par lighting equipment for events and venues.",
		color: "from-cyan-400 to-sky-500",
	},
	{
		title: "PCB Custom Board Design",
		icon: CircuitBoard,
		description:
			"Custom PCB design for one-off or small-batch electronic projects, from schematic to fabrication-ready layout.",
		color: "from-blue-400 to-cyan-400",
	},
	{
		title: "Networking",
		icon: Network,
		description:
			"Structured cabling, LAN/WAN setup, and network configuration for homes, offices, and small businesses.",
		color: "from-indigo-400 to-blue-500",
	},
	{
		title: "Electrical Wiring (Commercial & Domestic)",
		icon: Plug,
		description:
			"Safe, code-compliant electrical wiring installation and repair for commercial and residential properties.",
		color: "from-sky-500 to-blue-600",
	},
	{
		title: "Electric Fence & Security Alarm Systems",
		icon: ShieldAlert,
		description:
			"Electric perimeter fencing and alarm system installation to secure homes, offices, and compounds.",
		color: "from-blue-500 to-indigo-600",
	},
];

// BIXYL LAB IT Consult — company & contact info
export const bixylLab = {
	name: "BIXYL LAB IT Consult",
	tagline:
		"Professional electrical engineering services designed to deliver safety, precision, and long-lasting reliability.",
	phone: "024-891-9044",
	phoneHref: "tel:+233248919044",
	email: "bixyllabitconsult@gmail.com",
	address: "Accra, East Legon",
	mapLink:
		"https://www.google.com/maps/place/Bixyl+Lab+IT+Consult/@5.6213717,-0.2646752,17.76z/data=!4m14!1m7!3m6!1s0xfdf9917a0af4771:0xa1ff6e35645cd185!2sBixyl+Lab+IT+Consult!8m2!3d5.6208906!4d-0.2651723!16s%2Fg%2F11zh3785r3!3m5!1s0xfdf9917a0af4771:0xa1ff6e35645cd185!8m2!3d5.6208906!4d-0.2651723!16s%2Fg%2F11zh3785r3",
	mapEmbedSrc: "https://www.google.com/maps?q=5.6208906,-0.2651723&z=17&output=embed",
};

