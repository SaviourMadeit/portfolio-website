import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Menu as MenuIcon, X, Code, Cpu, Zap, BookOpen, ChevronRight, ChevronLeft, Terminal, Layers, ChevronDown, Award, Briefcase, Play, Video, Maximize2, Sun, Moon, Users, Target, Heart, Globe, FileText, Sparkles, Shield, Smartphone, Database, Cloud, Server, Mic, Camera, Wifi, Bluetooth, Radio, Settings, Power, Image, Quote, LucideSmartphone } from 'lucide-react';
const Chip = Cpu;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [theme, setTheme] = useState('auto');
  const [isDark, setIsDark] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedGallery, setExpandedGallery] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [focusedElement, setFocusedElement] = useState(null);

  // Lazy Loading Image Component
  const LazyImage = ({ src, alt, className }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [imageRef, setImageRef] = useState(null);

    useEffect(() => {
      if (!imageRef) return;

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(imageRef);
      return () => observer.disconnect();
    }, [imageRef, src]);

    return (
      <img
        ref={setImageRef}
        src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3C/svg%3E'}
        alt={alt}
        className={className}
      />
    );
  };

  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setExpandedProject(null);
        setSelectedMedia(null);
        setExpandedGallery(null);
      }
      // Tab through sections with Alt+Number
      if (e.altKey) {
        const sections = ['home', 'projects', 'certifications', 'tech-blog', 'impact', 'skills', 'about-me'];
        const num = parseInt(e.key);
        if (!isNaN(num) && num > 0 && num <= sections.length) {
          scrollToSection(sections[num - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      
      // Update active section based on scroll
      const sections = ['home', 'projects', 'certifications', 'tech-blog', 'impact', 'skills', 'about-me'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Theme detection
    const detectTheme = () => {
      if (theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefersDark);
      } else {
        setIsDark(theme === 'night');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    detectTheme();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', detectTheme);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', detectTheme);
    };
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (newTheme !== 'auto') {
      setIsDark(newTheme === 'night');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      // Send email via mailto
      const mailtoLink = `mailto:Senamdagadusaviour@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      // Reset form and show success message
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Farm King",
      category: "IoT & AI",
      description: "Farm King is a complete farm management tool with crop planning, IoT, and analytics. Its open platform fosters community collaboration and customization for your needs.",
      fullDescription: `Farm King revolutionizes agricultural management through a comprehensive IoT ecosystem combined with AI-powered analytics. This platform enables farmers to monitor crop health in real-time, predict yield outcomes, and automate irrigation systems.

Key Features:
• Real-time crop monitoring through sensor networks
• Predictive analytics for disease detection
• Automated irrigation and climate control
• Mobile dashboard for remote management
• Community-driven knowledge sharing platform

The system integrates multiple IoT devices including soil moisture sensors, weather stations, and automated control systems, all feeding data into a centralized AI engine for actionable insights.`,
      tech: ["AI & Machine Learning", "IoT Sensors & Device Management", "Web & Mobile Dashboard", "Predictive Analytics", "Edge Computing", "Cloud Architecture", "Real-time Monitoring"],
      links: {
        website: "https://www.farmking.tech/solutions/crop-analysis",
        github: "https://github.com/kondasMajid/TheFarmKing"
      },
      featured: true,
      gradient: "from-green-400 to-emerald-600",
      icon: Layers,
      image: "/images/farm king.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      gallery: [
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
        "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80",
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80"
      ]
    },
    {
      id: 2,
      title: "ProSense AG-X Precision Controller",
      category: "AIoT, Smart Agriculture, Edge Computing",
      description: "The core hardware platform for FarmKing's smart ecosystem. This industrial-grade edge controller enables real-time monitoring of crop health, automated environmental control, and on-device AI for predictive analytics and early disease detection, feeding data to the FarmKing dashboard.",
      fullDescription: `The ProSense AG-X is a rugged, industrial-grade edge computing platform designed for precision agriculture applications. This controller serves as the nerve center for FarmKing's IoT ecosystem, processing data locally to reduce latency and ensure operation even in poor connectivity areas.

Technical Specifications:
• ESP32-S3 dual-core processor with AI acceleration
• Supports LoRa, GSM, WiFi, and Bluetooth connectivity
• On-device ML for immediate disease detection
• Environmental sensor integration (temperature, humidity, soil pH)
• Weather-resistant industrial enclosure
• Real-time data synchronization with FarmKing Cloud

The system processes sensor data locally using TensorFlow Lite models, providing instant alerts for crop anomalies while maintaining full cloud synchronization for historical analysis.`,
      tech: ["ESP32-S3", "Edge ML", "IoT Sensor Fusion", "LoRa/GSM/Wi-Fi", "FarmKing Cloud API", "TensorFlow Lite", "Real-time Processing"],
      links: {
        github: "https://github.com/Farm-King/Prosense-AG-X"
      },
      featured: false,
      gradient: "from-blue-400 to-cyan-600",
      icon: Cpu,
      image: "/images/Farm_King.jpeg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      gallery: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
      ]
    },
    {
      id: 3,
      title: "STM32F4 Breakout Board",
      category: "Hardware Design",
      description: "Professional-grade custom PCB design for STM32F4 development, featuring optimized power delivery, USB connectivity, and comprehensive GPIO access. Demonstrates advanced PCB layout and hardware design capabilities.",
      fullDescription: `A custom-designed breakout board for STM32F4 series microcontrollers, optimized for development and prototyping. This board provides all necessary peripherals in a compact form factor while maintaining signal integrity and power efficiency.

Design Features:
• 4-layer PCB with proper power and ground planes
• USB-C connectivity with power delivery
• Comprehensive GPIO breakout with protection circuitry
• On-board debugger (ST-Link V3)
• Multiple power domains with LDO regulation
• Mechanical mounting points for industrial use

The board supports all STM32F4 peripherals including ADC, DAC, timers, and communication interfaces, making it ideal for rapid prototyping and educational purposes.`,
      tech: ["KiCad", "STM32F4", "PCB Design", "Power Management", "Signal Integrity", "USB-C PD", "Hardware Debugging"],
      links: {
        github: "https://github.com/SaviourMadeit/STM32F4_Breakout_Board"
      },
      featured: false,
      gradient: "from-purple-400 to-pink-600",
      icon: Cpu,
      image: "/images/STM32F4_Breakout.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      gallery: [
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80",
        "https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=600&q=80"
      ]
    },
    {
      id: 4,
      title: "Gas Pipeline Sand Detector",
      category: "Embedded Systems",
      description: "Industrial IoT sensor system utilizing Arduino Uno R4 WiFi for acoustic detection and analysis in harsh environments. Features real-time signal processing and cloud connectivity.",
      fullDescription: `An industrial-grade acoustic monitoring system designed for sand detection in Oil/Liquid pipelines. This embedded solution uses advanced signal processing algorithms to detect particulate matter through acoustic analysis, providing early warning for equipment protection.

System Architecture:
• Arduino Uno R4 WiFi for edge processing
• MEMS microphone array for directional detection
• Custom DSP algorithms for noise filtering
• Real-time FFT analysis on edge
• Cloud synchronization for trend analysis
• Industrial temperature range operation

The system implements adaptive filtering to distinguish between normal pipeline noise and sand particles, sending alerts when thresholds are exceeded to prevent equipment damage.`,
      tech: ["Arduino Uno R4", "C++", "Acoustic Sensors", "DSP", "FFT Analysis", "Industrial IoT", "Real-time Processing"],
      links: {
        github: "https://github.com/SaviourMadeit/Uno-R4-acoustic-sand-Dectector"
      },
      featured: false,
      gradient: "from-orange-400 to-red-600",
      icon: Terminal,
      image: "/images/SensorFusion.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      gallery: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
      ]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with FreeRTOS on STM32",
      date: "Dec 15, 2024",
      category: "RTOS",
      readTime: "8 min read",
      excerpt: "A comprehensive guide to implementing FreeRTOS on STM32 microcontrollers, covering task management, queues, semaphores, and real-world application patterns.",
      content: "Full article content about FreeRTOS implementation...",
      gradient: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80"
    },
    {
      id: 2,
      title: "PCB Design Best Practices for Embedded Systems",
      date: "Dec 10, 2024",
      category: "Hardware",
      readTime: "12 min read",
      excerpt: "Essential tips and techniques for designing reliable PCBs for embedded applications, from schematic capture to manufacturing considerations and EMI mitigation.",
      content: "Full article content about PCB design...",
      gradient: "from-green-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
    },
    {
      id: 3,
      title: "ESP32 Deep Sleep: Maximizing Battery Life",
      date: "Dec 5, 2024",
      category: "IoT",
      readTime: "6 min read",
      excerpt: "Learn how to implement deep sleep modes on ESP32 to achieve months of battery life in your IoT projects through power optimization strategies.",
      content: "Full article content about ESP32 power optimization...",
      gradient: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
    }
  ];

  const impactActivities = [
    {
      category: "Community Activities",
      icon: Users,
      items: [
        "Organized IoT workshops for local tech communities",
        "Mentored 50+ students in embedded systems",
        "Volunteer at Ghana Code Club",
        "Tech speaker at regional conferences"
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
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      ]
    },
    {
      category: "Mentorship",
      icon: Target,
      items: [
        "One-on-one mentoring for aspiring embedded engineers",
        "University project guidance",
        "Career counseling for tech students",
        "Open office hours for Q&A sessions"
      ],
      color: "from-green-400 to-emerald-400",
      gallery: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      ]
    },
    {
      category: "Volunteering",
      icon: Heart,
      items: [
        "Teaching programming to underprivileged youth",
        "Open-source hardware initiatives",
        "Environmental IoT projects for communities",
        "STEM education outreach programs"
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
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      ]
    },
    {
      category: "Achievements",
      icon: Award,
      items: [
        "Hackathon winner - IoT Innovation Challenge 2023",
        "Published research on edge computing",
        "Recognized as top contributor to open-source hardware",
        "Featured in local tech publications"
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
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Advanced Embedded Systems on Arm",
      issuer: "Edx",
      date: "May 2023",
      credentialId: "6229a86a2590471f87619db23addc1c3",
      credentialUrl: "https://courses.edx.org/certificates/6229a86a2590471f87619db23addc1c3",
      category: "IoT, Embedded Systems",
      icon: LucideSmartphone,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 2,
      title: "Machine Learning at the Edge on Arm",
      issuer: "edX",
      date: " June 2023",
      credentialId: "32ff043d08b9445caf20412403d37ccd",
      credentialUrl: "https://courses.edx.org/certificates/32ff043d08b9445caf20412403d37ccd",
      category: "Machine Learning on Edge",
      icon: Cpu,
      color: "from-purple-400 to-pink-400"
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
      color: "from-orange-400 to-red-400"
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
      color: "from-green-400 to-emerald-400"
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
      color: "from-cyan-400 to-blue-400"
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
      color: "from-pink-400 to-rose-400"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Prof. Kwame Mensah",
      title: "Department Head, Electronics Engineering",
      company: "Accra Technical University",
      testimonial: "Saviour is an exceptional student with deep expertise in embedded systems. His contributions to our capstone projects have been outstanding, and his mentoring of junior students is truly inspiring.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Ama Boateng",
      title: "Project Manager",
      company: "The Makersplace",
      testimonial: "Working with Saviour on the Farm King project was incredible. His ability to translate complex requirements into working hardware solutions is remarkable. A true innovator!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Kofi Appiah",
      title: "Robotics Instructor & Mentor",
      company: "Ghana Code Club",
      testimonial: "Saviour's passion for teaching and mentoring is contagious. The workshops he conducts are engaging, practical, and leave students inspired to pursue careers in embedded systems.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      rating: 5
    },
    {
      id: 4,
      name: "Nana Owusu",
      title: "Junior Embedded Engineer (Mentee)",
      company: "Tech Startup",
      testimonial: "Saviour's mentorship transformed my understanding of IoT systems. His patience, expertise, and willingness to share knowledge have been invaluable to my career growth.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      rating: 5
    }
  ];

  const skills = [
    {
      category: "Embedded Systems",
      icon: Chip,
      items: ["STM32", "ESP32", "Raspberry Pi", "Arduino", "FreeRTOS", "SPI/I2C/UART/CAN"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      category: "Programming",
      icon: Code,
      items: ["C/C++", "Python", "Assembly (ARM/AVR)", "Gitbash"],
      color: "from-purple-400 to-pink-400"
    },
    {
      category: "Hardware Design",
      icon: Layers,
      items: ["KiCad", "Eagle", "PCB Design", "Sensor Integration", "Mixed-Signal Systems"],
      color: "from-green-400 to-emerald-400"
    },
    {
      category: "IoT & Connectivity",
      icon: Wifi,
      items: ["LoRa", "WiFi", "Bluetooth", "MQTT", "WebSocket", "REST APIs"],
      color: "from-orange-400 to-red-400"
    },
    {
      category: "Software Tools",
      icon: Terminal,
      items: ["Git", "Docker", "VSCode", "PlatformIO", "Jira", "Figma"],
      color: "from-indigo-400 to-purple-400"
    },
    {
      category: "Currently Learning",
      icon: Zap,
      items: ["IC Layout Design", "Cadence Tools", "Verilog/VHDL", "ASIC Design"],
      color: "from-yellow-400 to-orange-400"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Projects Completed", value: "15+", icon: Briefcase },
    { label: "Technologies", value: "20+", icon: Code },
    { label: "Lines of Code", value: "50K+", icon: Terminal },
    { label: "Workshops Conducted", value: "10+", icon: Users },
    { label: "Open Source Repos", value: "8+", icon: Github }
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  // Accessibility helper for focus states
  const focusClasses = `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${isDark ? 'focus:ring-offset-slate-900' : 'focus:ring-offset-white'}`;
  const accessibleButtonClasses = `transition-all hover:scale-105 ${focusClasses}`;

  const renderDescriptionWithBullets = (text) => {
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, pIdx) => {
      // Check if paragraph contains bullet points
      const lines = paragraph.split('\n');
      
      // Check if this is a section with bullets (starts with a title and has bullet lines)
      const hasBullets = lines.some(line => line.trim().startsWith('•'));
      
      if (hasBullets) {
        // Find the title (first line that doesn't start with •)
        const titleLine = lines.find(line => !line.trim().startsWith('•'));
        const bulletLines = lines.filter(line => line.trim().startsWith('•'));
        
        return (
          <div key={pIdx}>
            {titleLine && <p className="font-semibold text-gray-200 mb-3">{titleLine}</p>}
            {bulletLines.length > 0 && (
              <ul className="space-y-2 ml-4 mb-3">
                {bulletLines.map((line, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-300">
                    <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{line.replace('•', '').trim()}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }
      
      // Regular paragraph without bullets
      return (
        <p key={pIdx} className="leading-relaxed text-gray-300">
          {paragraph}
        </p>
      );
    });
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in" onClick={onClose}>
        <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                    <span className="text-sm text-gray-400 bg-slate-800/50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Media Section */}
              <div className="space-y-4">
                {/* Main Image/Video */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700">
                  {project.video ? (
                    <div className="relative pb-[56.25%]">
                      <iframe
                        src={project.video}
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                        title={`${project.title} demo`}
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                </div>

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-300">Gallery</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {project.gallery.map((img, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden border border-slate-700 cursor-pointer hover:border-blue-400 transition-colors"
                          onClick={() => setSelectedMedia({ type: 'image', src: img })}
                        >
                          <img
                            src={img}
                            alt={`${project.title} gallery ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="space-y-6">
                {/* Full Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-300">Project Overview</h4>
                  <div className="space-y-3">
                    {renderDescriptionWithBullets(project.fullDescription)}
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-300">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-blue-400/10 text-blue-400 rounded-lg text-sm border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Site
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-semibold text-white text-center hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MediaModal = ({ media, onClose }) => {
    if (!media) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in" onClick={onClose}>
        <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          {media.type === 'image' ? (
            <img src={media.src} alt="Project" className="w-full h-auto rounded-lg shadow-2xl" />
          ) : (
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={media.src}
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                allowFullScreen
                title="Project video"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const GalleryModal = ({ gallery, onClose, title }) => {
    if (!gallery || gallery.length === 0) return null;

    const currentImage = gallery[galleryIndex];

    const nextImage = () => {
      setGalleryIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
      setGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in"
        onClick={onClose}
      >
        <div 
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Title */}
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-white">{title} Gallery</h3>
            <p className="text-gray-300 text-sm mt-1">
              {galleryIndex + 1} of {gallery.length}
            </p>
          </div>

          {/* Image Container */}
          <div className="relative flex-1 flex items-center justify-center rounded-xl overflow-hidden mb-4">
            <img
              src={currentImage}
              alt={`${title} ${galleryIndex + 1}`}
              className="max-w-full max-h-[70vh] object-contain"
            />

            {/* Navigation Buttons */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {gallery.length > 1 && (
            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === galleryIndex
                      ? 'border-blue-400 scale-110'
                      : 'border-white/20 hover:border-white/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const ThemeToggle = () => (
    <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700">
      <button
        onClick={() => handleThemeChange('auto')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${theme === 'auto' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
      >
        Auto
      </button>
      <button
        onClick={() => handleThemeChange('day')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${theme === 'day' ? 'bg-yellow-500 text-white' : 'text-gray-400 hover:text-white'}`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleThemeChange('night')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${theme === 'night' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'} overflow-hidden`}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />

      {/* Modals */}
      {expandedProject && <ProjectModal project={expandedProject} onClose={() => setExpandedProject(null)} />}
      {selectedMedia && <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />}
      {expandedGallery && <GalleryModal gallery={expandedGallery.gallery} title={expandedGallery.title} onClose={() => setExpandedGallery(null)} />}

      {/* Skip to Content Link for Accessibility */}
      <a
        href="#projects"
        className="absolute top-0 left-0 -translate-y-full focus:translate-y-0 bg-blue-500 text-white px-4 py-2 z-[60] transition-transform"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-500 ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'
          }`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-500 ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'
        }`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-500 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
        }`} style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? (isDark ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg' : 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg') : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <Cpu className={`w-10 h-10 transition-colors ${isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-500 group-hover:text-blue-600'} transition-all group-hover:rotate-180 duration-500`} />
                <div className={`absolute inset-0 rounded-full blur-xl transition-colors ${isDark ? 'bg-blue-400/20 group-hover:bg-blue-300/30' : 'bg-blue-500/20 group-hover:bg-blue-600/30'}`} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Saviour Dagadu
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {['home', 'projects', 'tech-blog', 'impact', 'skills', 'about-me'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-6 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item 
                      ? (isDark 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                        )
                      : (isDark 
                          ? 'text-gray-300 hover:text-white hover:bg-slate-800/50' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        )
                  }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                className={`transition-colors p-2 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden backdrop-blur-lg border-t transition-colors ${isDark ? 'bg-slate-900/98 border-slate-700/50' : 'bg-white/98 border-gray-200/50'}`}>
            <div className="px-4 py-6 space-y-2">
              {['home', 'projects', 'tech-blog', 'impact', 'skills', 'about-me'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-3 px-4 rounded-lg transition-all ${
                    isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-slate-800/50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* LinkedIn-style Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="relative">
            {/* Cover/Banner Image (like LinkedIn background) */}
            <div className={`relative h-64 rounded-2xl overflow-hidden mb-4 animate-in slide-in-from-bottom duration-700 bg-cover bg-center ${
  isDark ? 'bg-gradient-to-r from-slate-800 to-slate-900' : 'bg-gradient-to-r from-blue-50 to-gray-100'
}`} style={{ backgroundImage: 'url(/images/Workshop.jpg)' }}>
              {/* You can add a pattern or keep it gradient */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iJHtpc0RhcmsgPyAncmdiYSgyNTUsMjU1LDI1NSwwLjAzKScgOiAncmdiYSgyMzAsMjQwLDI1MCwwLjAzKSd9IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              
              {/* Optional: Add a technical pattern */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-24 h-24 opacity-10" />
                </div>
              </div>
            </div>

            {/* Profile Card Container */}
            <div className={`relative rounded-2xl border backdrop-blur-sm animate-in slide-in-from-bottom duration-700 shadow-lg ${
              isDark 
                ? 'bg-slate-900/80 border-slate-700 shadow-slate-900/50' 
                : 'bg-white/95 border-gray-200 shadow-blue-100/50'
            }`} style={{ animationDelay: '100ms' }}>
              {/* Profile Photo and Info */}
              <div className="relative px-8 pb-8 pt-20">
                {/* Profile Photo - Positioned over the banner */}
                <div className="absolute -top-20 left-8 z-20">
                  <div className="relative group">
                    {/* Outer ring */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                    
                    {/* Profile image */}
                    <div className={`relative w-40 h-40 rounded-full overflow-hidden border-4 shadow-2xl backdrop-blur-sm ${
                      isDark ? 'border-slate-900' : 'border-white'
                    }`}>
                      <img 
                        src="/images/Profile_1.jpg"
                        alt="Saviour Dagadu"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ objectPosition: 'center 25%' }}
                      />
                    </div> 

                    {/* Online indicator
                    <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div> */}
                  </div> 
                </div>

                {/* Name and Title */}
                <div className="mb-6">
                  <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Saviour Dagadu
                  </h1>
                  <div className="space-y-2">
                    <p className={`text-xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Embedded Hardware Designer | Robotics Instructor | Firmware Developer
                    </p>
                    <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Inspiring the Next Generation of Innovators
                    </p>
                  </div>
                </div>

                {/* Location and Contact Info */}
                <div className={`flex flex-wrap items-center gap-4 mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Abeka, Greater Accra Region, Ghana</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <span>The Makersplace</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Accra Technical University</span>
                  </div>
                </div>

                {/* Connections and Stats */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                  {/* <div className="flex items-center space-x-4">
                    <div className={`flex items-center space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Github className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">GitHub</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">316 connections</span>
                    </div>
                  </div> */}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all hover:scale-105 flex items-center space-x-2"
                  >
                    <span>View Portfolio</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <a 
                    href="https://github.com/SaviourMadeit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2 ${
                      isDark 
                        ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 text-gray-100' 
                        : 'bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-white hover:shadow-lg text-gray-900'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub Profile</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/saviour-dagadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2 ${
                      isDark 
                        ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 text-gray-100' 
                        : 'bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-white hover:shadow-lg text-gray-900'
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <a
                    href="/Saviour_Dagadu_CV.pdf"
                    download="Saviour_Dagadu_CV.pdf"
                    className="group px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold text-white shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/70 transition-all hover:scale-105 flex items-center space-x-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>

                  <a
                    href="mailto:Senamdagadusaviour@gmail.com"
                    className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2 ${
                      isDark 
                        ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 text-gray-100' 
                        : 'bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-white hover:shadow-lg text-gray-900'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact info</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Section (Below Profile) */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-12 animate-in slide-in-from-bottom duration-700" style={{ animationDelay: '200ms' }}>
              {stats.map((stat, idx) => (
                <div key={idx} className="group relative">
                  <div className={`backdrop-blur-sm rounded-xl p-6 transition-all hover:scale-105 text-center ${
                    isDark 
                      ? 'bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 hover:border-blue-400/50' 
                      : 'bg-white/50 border border-gray-300 hover:bg-gray-100/50 hover:border-blue-500/50'
                  }`}>
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 transition-colors ${
                      isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-500 group-hover:text-blue-600'
                    }`} />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className={`w-8 h-8 ${isDark ? 'text-blue-400/50' : 'text-blue-500/50'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Code className="w-10 h-10 text-blue-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Explored Project
              </h2>
            </div>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Innovative solutions in embedded systems, IoT, and hardware design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className={`group relative rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-700 hover:border-blue-400/50' 
                      : 'bg-white/50 border-gray-300 hover:border-blue-500/50'
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      isDark ? 'from-black/60 to-transparent' : 'from-black/40 to-transparent'
                    }`} />
                    {project.featured && (
                      <div className="absolute top-4 left-4 flex items-center space-x-1 text-yellow-400 animate-pulse">
                        <Zap className="w-5 h-5 fill-current" />
                        <span className="text-sm font-semibold">Featured</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {project.title}
                        </h3>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          isDark 
                            ? 'text-gray-400 bg-slate-800/80' 
                            : 'text-gray-600 bg-gray-100'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-3 py-1 rounded-lg border ${
                            isDark 
                              ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' 
                              : 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`text-xs px-3 py-1 rounded-lg ${
                          isDark 
                            ? 'bg-slate-800 text-gray-400' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setExpandedProject(project)}
                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-2"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <div className="flex space-x-3">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-all hover:scale-110 ${
                              isDark 
                                ? 'bg-slate-800 text-gray-400 hover:text-blue-400' 
                                : 'bg-gray-100 text-gray-600 hover:text-blue-600'
                            }`}
                            title="View Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.links.website && (
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-all hover:scale-110 ${
                              isDark 
                                ? 'bg-slate-800 text-gray-400 hover:text-blue-400' 
                                : 'bg-gray-100 text-gray-600 hover:text-blue-600'
                            }`}
                            title="Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Currently Building Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Sparkles className="w-10 h-10 text-amber-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Currently Building
              </h2>
            </div>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Pushing boundaries in IC design and silicon engineering
            </p>
          </div>

          <div className={`relative rounded-2xl border backdrop-blur-sm overflow-hidden ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700' 
              : 'bg-white/50 border-gray-300'
          }`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Project Details */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 animate-pulse"></div>
                      <span className={`text-sm font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                        In Development
                      </span>
                    </div>
                    <h3 className={`text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Custom ASIC Design
                    </h3>
                    <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Designing a specialized Application-Specific Integrated Circuit (ASIC) optimized for IoT sensor data processing and edge AI inference in agricultural systems.
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Verilog/VHDL",
                        "Cadence Tools",
                        "RTL Design",
                        "ASIC Methodology",
                        "Low-Power Design",
                        "IC Layout"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-lg border ${
                            isDark
                              ? 'bg-amber-400/10 text-amber-400 border-amber-400/30'
                              : 'bg-amber-500/10 text-amber-700 border-amber-500/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                      Project Highlights
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Ultra-low power consumption for battery-operated devices",
                        "High-performance sensor fusion processing",
                        "On-chip AI acceleration for neural networks",
                        "Optimized for 5µm process technology"
                      ].map((item, idx) => (
                        <li key={idx} className={`flex items-start space-x-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side - Status & Timeline */}
                <div className="space-y-8">
                  {/* Progress */}
                  <div className={`rounded-xl p-6 ${
                    isDark 
                      ? 'bg-slate-700/50 border border-slate-600' 
                      : 'bg-white/50 border border-gray-200'
                  }`}>
                    <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Development Progress
                    </h4>
                    <div className="space-y-4">
                      {[
                        { stage: "RTL Design", progress: 65 },
                        { stage: "Simulation & Verification", progress: 50 },
                        { stage: "Layout & DFM", progress: 30 },
                        { stage: "Tapeout Preparation", progress: 15 }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center mb-2">
                            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.stage}
                            </span>
                            <span className={`text-xs font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                              {item.progress}%
                            </span>
                          </div>
                          <div className={`w-full h-2 rounded-full overflow-hidden ${
                            isDark ? 'bg-slate-600' : 'bg-gray-200'
                          }`}>
                            <div
                              className="h-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className={`rounded-xl p-6 ${
                    isDark 
                      ? 'bg-slate-700/50 border border-slate-600' 
                      : 'bg-white/50 border border-gray-200'
                  }`}>
                    <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Expected Milestones
                    </h4>
                    <div className="space-y-3">
                      {[
                        { month: "Q1 2025", milestone: "Complete RTL Design" },
                        { month: "Q2 2025", milestone: "Finish Verification" },
                        { month: "Q3 2025", milestone: "Layout & Routing" },
                        { month: "Q4 2025", milestone: "Tapeout" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${idx <= 1 ? 'bg-green-500' : 'bg-amber-400'}`}></div>
                          <div>
                            <p className={`text-sm font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                              {item.month}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {item.milestone}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Award className="w-10 h-10 text-purple-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </h2>
            </div>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Professional credentials and continuous learning achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className={`group relative rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-700 hover:border-purple-400/50' 
                      : 'bg-white/50 border-gray-300 hover:border-purple-500/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Certificate Title */}
                    <h3 className={`text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.title}
                    </h3>

                    {/* Issuer and Category */}
                    <div className={`flex items-center justify-between mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="font-semibold">{cert.issuer}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark
                          ? 'bg-purple-400/10 text-purple-400'
                          : 'bg-purple-500/10 text-purple-600'
                      }`}>
                        {cert.category}
                      </span>
                    </div>

                    {/* Date */}
                    <p className={`mb-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                      Issued: <span className="font-semibold">{cert.date}</span>
                    </p>

                    {/* Credential ID */}
                    <div className={`rounded-lg p-3 mb-6 ${isDark ? 'bg-slate-700/30' : 'bg-gray-100/50'}`}>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Credential ID</p>
                      <p className={`text-sm font-mono font-semibold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                        {cert.credentialId}
                      </p>
                    </div>

                    {/* Verify Button */}
                    <a
                      href={cert.credentialUrl}
                      className={`w-full py-2 px-4 rounded-lg text-center font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
                        isDark
                          ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30'
                          : 'bg-purple-500/20 text-purple-600 hover:bg-purple-500/30 border border-purple-500/30'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Credential</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Blog Section */}
      <section id="tech-blog" className={`relative py-32 px-4 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <BookOpen className="w-10 h-10 text-blue-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tech Blog
              </h2>
            </div>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Insights, tutorials, and deep dives into embedded systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom ${
                  isDark 
                    ? 'bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-400/50' 
                    : 'bg-white/50 backdrop-blur-sm border-gray-300 hover:border-blue-500/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="text-xs font-semibold text-white">{post.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{post.date}</span>
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{post.readTime}</span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>

                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`relative py-32 px-4 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Quote className="w-10 h-10 text-yellow-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                What Others Say
              </h2>
            </div>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Testimonials from mentors, colleagues, and those I've helped
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-yellow-400/50' 
                    : 'bg-white/50 border-gray-300 hover:border-yellow-500/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  {/* Quote Icon */}
                  <Quote className={`w-8 h-8 mb-4 opacity-30 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{testimonial.testimonial}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-gray-400/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {testimonial.name}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {testimonial.title}
                      </p>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Target className="w-10 h-10 text-blue-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Community Impact
              </h2>
            </div>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Giving back through mentorship, volunteering, and community engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-700 hover:border-blue-400/50' 
                      : 'bg-white/50 border-gray-300 hover:border-blue-500/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-6 group-hover:text-blue-400 transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {activity.category}
                    </h3>
                    
                    <ul className="space-y-3 mb-6">
                      {activity.items.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start space-x-3 transition-colors ${
                            isDark 
                              ? 'text-gray-300 hover:text-blue-400' 
                              : 'text-gray-700 hover:text-blue-600'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${activity.color} mt-2 group-hover:scale-150 transition-transform`} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Gallery Thumbnails */}
                    {activity.gallery && activity.gallery.length > 0 && (
                      <div className="space-y-3 pt-4 border-t border-gray-400/20">
                        <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Photo Gallery
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {activity.gallery.slice(0, 2).map((img, idx) => (
                            <div
                              key={idx}
                              className="aspect-square rounded-lg overflow-hidden border border-gray-400/20 cursor-pointer hover:border-blue-400/50 transition-all hover:scale-105"
                              onClick={() => {
                                setGalleryIndex(idx);
                                setExpandedGallery({ gallery: activity.gallery, title: activity.category });
                              }}
                            >
                              <img
                                src={img}
                                alt={`${activity.category} ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            setGalleryIndex(0);
                            setExpandedGallery({ gallery: activity.gallery, title: activity.category });
                          }}
                          className={`w-full mt-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
                            isDark
                              ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
                              : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 border border-blue-500/30'
                          }`}
                        >
                          <Image className="w-4 h-4" />
                          <span>View Gallery ({activity.gallery.length})</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`relative py-32 px-4 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Comprehensive skills across the embedded systems stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-700 hover:border-blue-400/50' 
                      : 'bg-white/50 border-gray-300 hover:border-blue-500/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-6 group-hover:text-blue-400 transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.category}
                    </h3>
                    
                    <ul className="space-y-3">
                      {skill.items.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-center space-x-3 transition-colors ${
                            isDark 
                              ? 'text-gray-300 hover:text-blue-400' 
                              : 'text-gray-700 hover:text-blue-600'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover:scale-150 transition-transform`} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Me & Contact Section */}
      <section id="about-me" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form Section */}
          <div className={`relative backdrop-blur-xl rounded-3xl border p-12 overflow-hidden animate-in slide-in-from-bottom duration-700 mb-16 ${
            isDark 
              ? 'bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 border-green-400/20' 
              : 'bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 border-green-400/30'
          }`}>
            <div className="relative text-center space-y-8 mb-12">
              <div className="inline-block">
                <Mail className="w-16 h-16 mx-auto text-green-400 animate-bounce-slow" />
              </div>
              
              <div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                  Get In Touch
                </h2>
                <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Have questions or want to collaborate? Fill out the form below and I'll get back to you soon.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${
                      isDark
                        ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-500'
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${
                      isDark
                        ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-500'
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="What is this about?"
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${
                    isDark
                      ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-500'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your message..."
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-400 resize-none ${
                    isDark
                      ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-500'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-bold text-white text-lg shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              {/* Success Message */}
              {formSubmitted && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center font-semibold animate-in fade-in">
                  ✓ Thank you! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Original About Me Section */}
          <div className={`relative backdrop-blur-xl rounded-3xl border p-12 overflow-hidden animate-in slide-in-from-bottom duration-700 ${
            isDark 
              ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-400/20' 
              : 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-blue-400/30'
          }`}>
            <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iJHtpc0RhcmsgPyAncmdiYSgyNTUsMjU1LDI1NSwwLjAzKScgOiAncmdiYSgwLDAsMCwwLjAzKSd9IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30`} />
            
            <div className="relative text-center space-y-8">
              <div className="inline-block">
                <Mail className="w-20 h-20 mx-auto text-blue-400 mb-6 animate-bounce-slow" />
              </div>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              
              <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Have a project in mind? Looking for collaboration opportunities? 
                I'm always excited to work on innovative embedded systems projects.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                <a
                  href="mailto:Senamdagadusaviour@gmail.com"
                  className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all hover:scale-105 flex items-center justify-center space-x-3 text-white"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>Send Email</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/saviour-dagadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-3 ${
                    isDark 
                      ? 'bg-slate-700/50 backdrop-blur-sm border-2 border-slate-600 hover:bg-slate-600/50 hover:border-blue-400/50' 
                      : 'bg-white/50 backdrop-blur-sm border-2 border-gray-300 hover:bg-gray-100/50 hover:border-blue-500/50'
                  }`}
                >
                  <Linkedin className="w-6 h-6" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              <div className="pt-8 border-t border-slate-700/50">
                <div className="flex justify-center space-x-6">
                  {[
                    { icon: Github, url: "https://github.com/SaviourMadeit", label: "GitHub" },
                    { icon: Twitter, url: "https://twitter.com/pshyco_Blaq", label: "Twitter" },
                    { icon: Mail, url: "mailto:Senamdagadusaviour@gmail.com", label: "Email" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center space-y-2"
                      title={social.label}
                    >
                      <div className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all group-hover:scale-110 ${
                        isDark 
                          ? 'bg-slate-800/50 border border-slate-700 text-gray-400 group-hover:text-blue-400 group-hover:border-blue-400/50 group-hover:bg-slate-700/50' 
                          : 'bg-white/50 border border-gray-300 text-gray-600 group-hover:text-blue-500 group-hover:border-blue-500/50 group-hover:bg-gray-100/50'
                      }`}>
                        <social.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs transition-colors ${
                        isDark 
                          ? 'text-gray-500 group-hover:text-blue-400' 
                          : 'text-gray-600 group-hover:text-blue-500'
                      }`}>
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative border-t py-12 px-4 transition-colors ${
        isDark 
          ? 'bg-slate-900/50 border-slate-700/50' 
          : 'bg-white/50 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Cpu className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Saviour Dagadu
              </span>
            </div>
            
            <div className="text-center">
              <p className={`italic mb-2 text-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                "Building the bridge between software and silicon"
              </p>
              <p className={`text-sm ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                © {new Date().getFullYear()} Saviour Dagadu. All rights reserved.
              </p>
            </div>
            
            <div className={`flex items-center space-x-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Accra, Ghana</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles & Accessibility */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in {
          animation: fade-in 0.3s ease-out;
        }

        /* Accessibility: Better focus states */
        *:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 2px;
        }

        /* Accessibility: Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Accessibility: High contrast mode support */
        @media (prefers-contrast: more) {
          body {
            font-weight: 500;
          }
        }

        /* Print styles */
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
export default Portfolio;