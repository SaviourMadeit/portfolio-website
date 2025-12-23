import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Menu, X, Code, Cpu, Zap, BookOpen, ChevronRight, Terminal, Layers, Waves, ChevronDown, Award, Briefcase, Play, Video, Maximize2 } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Farm King",
      category: "IoT & AI",
      description: "AI-Driven Intelligent Greenhouse Automation System with multi-sensor environmental monitoring, soil health tracking with NPK analysis, and early-stage crop disease identification using machine learning.",
      tech: ["ESP32", "C/C++", "IoT Sensors", "Machine Learning", "Web Dashboard"],
      links: {
        website: "https://farmking.tech/",
        github: "https://github.com/kondasMajid/TheFarmKing"
      },
      featured: true,
      gradient: "from-green-400 to-emerald-600",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video
      gallery: [
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
        "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80",
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80"
      ]
    },
    {
      title: "SensorFusion Smart Farm",
      category: "IoT & Automation",
      description: "Advanced greenhouse automation platform featuring multi-sensor environmental monitoring, real-time soil health tracking, and AI-powered disease detection capabilities integrated with Arduino Cloud.",
      tech: ["ESP32", "Arduino Cloud", "Python", "Sensor Arrays"],
      links: {
        github: "https://github.com/SaviourMadeit/SensorFusion-Smart-Farm"
      },
      featured: true,
      gradient: "from-blue-400 to-cyan-600",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1473445361085-b2c2a3ee8a50?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
      ]
    },
    {
      title: "STM32F4 Breakout Board",
      category: "Hardware Design",
      description: "Professional-grade custom PCB design for STM32F4 development, featuring optimized power delivery, USB connectivity, and comprehensive GPIO access. Demonstrates advanced PCB layout and hardware design capabilities.",
      tech: ["KiCad", "STM32F4", "PCB Design", "Power Management"],
      links: {
        github: "https://github.com/SaviourMadeit/STM32F4_Breakout_Board"
      },
      featured: false,
      gradient: "from-purple-400 to-pink-600",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80",
        "https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=600&q=80"
      ]
    },
    {
      title: "Acoustic Sand Detector",
      category: "Embedded Systems",
      description: "Industrial IoT sensor system utilizing Arduino Uno R4 WiFi for acoustic detection and analysis in harsh environments. Features real-time signal processing and cloud connectivity.",
      tech: ["Arduino Uno R4", "C++", "Acoustic Sensors", "DSP"],
      links: {
        github: "https://github.com/SaviourMadeit/Uno-R4-acoustic-sand-Dectector"
      },
      featured: false,
      gradient: "from-orange-400 to-red-600",
      icon: Terminal,
      image: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Getting Started with FreeRTOS on STM32",
      date: "Dec 15, 2024",
      category: "RTOS",
      readTime: "8 min read",
      excerpt: "A comprehensive guide to implementing FreeRTOS on STM32 microcontrollers, covering task management, queues, semaphores, and real-world application patterns.",
      gradient: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80"
    },
    {
      title: "PCB Design Best Practices for Embedded Systems",
      date: "Dec 10, 2024",
      category: "Hardware",
      readTime: "12 min read",
      excerpt: "Essential tips and techniques for designing reliable PCBs for embedded applications, from schematic capture to manufacturing considerations and EMI mitigation.",
      gradient: "from-green-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
    },
    {
      title: "ESP32 Deep Sleep: Maximizing Battery Life",
      date: "Dec 5, 2024",
      category: "IoT",
      readTime: "6 min read",
      excerpt: "Learn how to implement deep sleep modes on ESP32 to achieve months of battery life in your IoT projects through power optimization strategies.",
      gradient: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
    }
  ];

  const skills = [
    {
      category: "Embedded Systems",
      icon: Cpu,
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
      category: "Currently Learning",
      icon: Zap,
      items: ["IC Layout Design", "Cadence Tools", "Verilog/VHDL"],
      color: "from-yellow-400 to-orange-400"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Projects Completed", value: "15+", icon: Briefcase },
    { label: "Technologies", value: "20+", icon: Code },
    { label: "Lines of Code", value: "50K+", icon: Terminal }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 overflow-hidden">
      {/* Media Modal */}
      {selectedMedia && <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />}

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Cpu className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-all group-hover:rotate-180 duration-500" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-all" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Saviour Dagadu
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['home', 'projects', 'blog', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-6 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-2">
              {['home', 'projects', 'blog', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-white hover:bg-slate-800/50 py-3 px-4 rounded-lg transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Saviour Dagadu
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Embedded Systems Engineer transitioning into IC Design. I build the bridge between <span className="text-blue-400 font-semibold">software and silicon</span>.
              </p>
              
              <p className="text-lg text-gray-300">
                Passionate about low-level programming, hardware-software integration, and creating innovative solutions in robotics and IoT.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all hover:scale-105 flex items-center space-x-2"
                >
                  <span>View My Work</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                  href="mailto:Senamdagadusaviour@gmail.com"
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg font-semibold hover:bg-slate-700/50 transition-all hover:scale-105 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Accra, Ghana</span>
                </div>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, url: "https://github.com/SaviourMadeit" },
                    { icon: Linkedin, url: "https://www.linkedin.com/in/saviour-dagadu" },
                    { icon: Twitter, url: "https://twitter.com/pshyco_Blaq" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-slate-700/50 transition-all hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image with Animation */}
            <div className="relative hidden lg:block animate-in slide-in-from-right duration-700">
              <div className="relative w-full h-[500px]">
                {/* Replace this with your actual profile image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-blue-400/20 shadow-2xl shadow-blue-500/20">
                  <img 
                    src="/images/profile_photo.jpg" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 right-8 bg-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-lg animate-bounce-slow">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-5 h-5" />
                      <span className="font-semibold">Embedded Systems</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 bg-purple-500/90 backdrop-blur-sm px-4 py-2 rounded-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5" />
                      <span className="font-semibold">IoT Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-in slide-in-from-bottom duration-700">
            {stats.map((stat, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-blue-400/50 transition-all hover:scale-105 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-400/50" />
          </div>
        </div>
      </section>

      {/* Projects Section with Images and Videos */}
      <section className="relative py-32 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Code className="w-10 h-10 text-blue-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative solutions in embedded systems, IoT, and hardware design
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Project Images/Video */}
                    <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      {/* Main Image */}
                      <div 
                        className="relative rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-400/50 transition-all cursor-pointer group/img"
                        onClick={() => setSelectedMedia({ type: 'image', src: project.image })}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-80 object-cover group-hover/img:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <Maximize2 className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Video Thumbnail (if exists) */}
                      {project.video && (
                        <div 
                          className="relative rounded-xl overflow-hidden border border-slate-700 hover:border-blue-400/50 transition-all cursor-pointer group/video"
                          onClick={() => setSelectedMedia({ type: 'video', src: project.video })}
                        >
                          <img 
                            src={project.image} 
                            alt="Video thumbnail"
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-white ml-1" fill="white" />
                            </div>
                          </div>
                          <div className="absolute top-4 left-4 bg-blue-500 px-3 py-1 rounded-lg flex items-center space-x-2">
                            <Video className="w-4 h-4" />
                            <span className="text-sm font-semibold">Watch Demo</span>
                          </div>
                        </div>
                      )}

                      {/* Gallery */}
                      {project.gallery && project.gallery.length > 0 && (
                        <div className="grid grid-cols-3 gap-4">
                          {project.gallery.map((img, i) => (
                            <div 
                              key={i}
                              className="relative rounded-lg overflow-hidden border border-slate-700 hover:border-blue-400/50 transition-all cursor-pointer aspect-video group/thumb"
                              onClick={() => setSelectedMedia({ type: 'image', src: img })}
                            >
                              <img 
                                src={img} 
                                alt={`${project.title} ${i + 1}`}
                                className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/40 transition-colors" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {project.featured && (
                          <div className="flex items-center space-x-1 text-yellow-400 animate-pulse">
                            <Zap className="w-5 h-5 fill-current" />
                            <span className="text-sm font-semibold">Featured</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-400 bg-slate-800/80 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm bg-blue-400/10 text-blue-400 px-4 py-2 rounded-lg border border-blue-400/20 hover:bg-blue-400/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4">
                        {project.links.website && (
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all hover:scale-105 group/link"
                          >
                            <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700/50 hover:border-blue-400/50 transition-all hover:scale-105 group/link"
                          >
                            <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                            <span>Source Code</span>
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

      {/* Blog Section with Images */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-3 mb-4">
              <BookOpen className="w-10 h-10 text-blue-400" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tech Blog
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights, tutorials, and deep dives into embedded systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-400/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-in slide-in-from-bottom"
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
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

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

      {/* Skills Section */}
      <section className="relative py-32 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <h2 className="text-5xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive skills across the embedded systems stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-400/50 overflow-hidden transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                      {skill.category}
                    </h3>
                    
                    <ul className="space-y-3">
                      {skill.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center space-x-3 text-gray-300 group/item hover:text-blue-400 transition-colors"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover/item:scale-150 transition-transform`} />
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

      {/* Contact Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-blue-400/20 p-12 overflow-hidden animate-in slide-in-from-bottom duration-700">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
            
            <div className="relative text-center space-y-8">
              <div className="inline-block">
                <Mail className="w-20 h-20 mx-auto text-blue-400 mb-6 animate-bounce-slow" />
              </div>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? Looking for collaboration opportunities? 
                I'm always excited to work on innovative embedded systems projects.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                <a
                  href="mailto:Senamdagadusaviour@gmail.com"
                  className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>Send Email</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/saviour-dagadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-slate-700/50 backdrop-blur-sm border-2 border-slate-600 rounded-xl font-bold text-lg hover:bg-slate-600/50 hover:border-blue-400/50 transition-all hover:scale-105 flex items-center justify-center space-x-3"
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
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700 text-gray-400 group-hover:text-blue-400 group-hover:border-blue-400/50 group-hover:bg-slate-700/50 transition-all group-hover:scale-110">
                        <social.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
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
      <footer className="relative bg-slate-900/50 border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Cpu className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Saviour Dagadu
              </span>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 italic mb-2 text-lg">
                "Building the bridge between software and silicon"
              </p>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Saviour Dagadu. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
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
        .animate-in {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
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