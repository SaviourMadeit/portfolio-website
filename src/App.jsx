import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Menu, X, Code, Cpu, Zap, BookOpen, ChevronRight, Terminal, Layers, ChevronDown, Award, Briefcase, Play, Video, Maximize2, Sun, Moon, Users, Target, Heart, Globe, FileText, Sparkles, Menu as MenuIcon, Shield, Cpu as Chip, Smartphone, Database, Cloud, Server, Mic, Camera, Wifi, Bluetooth, Radio, Settings, Power } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [theme, setTheme] = useState('auto');
  const [isDark, setIsDark] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll
      const sections = ['home', 'projects', 'tech-blog', 'impact', 'skills', 'about-me'];
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
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      gallery: [
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80",
        "https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=600&q=80"
      ]
    },
    {
      id: 4,
      title: "Acoustic Sand Detector",
      category: "Embedded Systems",
      description: "Industrial IoT sensor system utilizing Arduino Uno R4 WiFi for acoustic detection and analysis in harsh environments. Features real-time signal processing and cloud connectivity.",
      fullDescription: `An industrial-grade acoustic monitoring system designed for sand detection in oil pipelines. This embedded solution uses advanced signal processing algorithms to detect particulate matter through acoustic analysis, providing early warning for equipment protection.

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
      image: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
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
      color: "from-blue-400 to-cyan-400"
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
      color: "from-green-400 to-emerald-400"
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
      color: "from-pink-400 to-rose-400"
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
      color: "from-yellow-400 to-orange-400"
    }
  ];

  const skills = [
    {
      category: "Embedded Systems",
      icon: Chip,
      items: ["STM32", "ESP32", "RP2040", "Raspberry Pi", "Arduino", "FreeRTOS", "SPI/I2C/UART/CAN"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      category: "Programming",
      icon: Code,
      items: ["C/C++", "Python", "Assembly (ARM/AVR)", "Arduino Framework", "ESP-IDF"],
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
                  <div className="text-gray-300 space-y-3">
                    {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">{paragraph}</p>
                    ))}
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
      {/* Modals */}
      {expandedProject && <ProjectModal project={expandedProject} onClose={() => setExpandedProject(null)} />}
      {selectedMedia && <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />}

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
            <div className={`relative rounded-2xl border backdrop-blur-sm animate-in slide-in-from-bottom duration-700 ${
              isDark 
                ? 'bg-slate-900/80 border-slate-700' 
                : 'bg-white/90 border-gray-200'
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
                        ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50' 
                        : 'bg-white/50 backdrop-blur-sm border border-gray-300 hover:bg-gray-100'
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
                        ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50' 
                        : 'bg-white/50 backdrop-blur-sm border border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <a
                    href="mailto:Senamdagadusaviour@gmail.com"
                    className={`px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2 ${
                      isDark 
                        ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50' 
                        : 'bg-white/50 backdrop-blur-sm border border-gray-300 hover:bg-gray-100'
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

            {/* Quick Navigation */}
            <div className={`mt-12 rounded-xl border backdrop-blur-sm animate-in slide-in-from-bottom duration-700 ${
              isDark 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-white/50 border-gray-200'
            }`} style={{ animationDelay: '300ms' }}>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Quick Navigation
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {['projects', 'tech-blog', 'impact', 'skills', 'about-me'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`py-3 rounded-lg transition-all duration-300 text-center ${
                        activeSection === item 
                          ? (isDark 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                            )
                          : (isDark 
                              ? 'text-gray-300 hover:text-white hover:bg-slate-700/50' 
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            )
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-1">
                        {item === 'projects' && <Code className="w-5 h-5" />}
                        {item === 'tech-blog' && <BookOpen className="w-5 h-5" />}
                        {item === 'impact' && <Target className="w-5 h-5" />}
                        {item === 'skills' && <Cpu className="w-5 h-5" />}
                        {item === 'about-me' && <Mail className="w-5 h-5" />}
                        <span className="text-sm font-medium capitalize">{item.replace('-', ' ')}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
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
                Featured Projects
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
                    
                    <ul className="space-y-3">
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

      {/* Custom Styles */}
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
      `}</style>
    </div>
  );
};
export default Portfolio;