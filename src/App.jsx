import { useEffect, useState } from "react";
import Background from "./components/ui/Background";
import GalleryModal from "./components/ui/GalleryModal";
import MediaModal from "./components/ui/MediaModal";
import ProjectModal from "./components/ui/ProjectModal";
import {
	blogPosts,
	certifications,
	impactActivities,
	projects,
	skills,
	stats,
	testimonials,
} from "./data";

// Sections
import AboutMe from "./sections/AboutMe";
import Certifications from "./sections/Certifications";
import CurrentlyBuilding from "./sections/CurrentlyBuilding";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Impact from "./sections/Impact";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import TechBlog from "./sections/TechBlog";
import Testimonials from "./sections/Testimonials";

const Portfolio = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [selectedMedia, setSelectedMedia] = useState(null);
	const [theme, setTheme] = useState("auto");
	const [isDark, setIsDark] = useState(false);
	const [expandedProject, setExpandedProject] = useState(null);
	const [expandedGallery, setExpandedGallery] = useState(null);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [focusedElement, setFocusedElement] = useState(null);

	const scrollToSection = (section) => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setActiveSection(section);
		setMobileMenuOpen(false);
	};

	useEffect(() => {
		// Keyboard navigation
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setExpandedProject(null);
				setSelectedMedia(null);
				setExpandedGallery(null);
			}
			// Tab through sections with Alt+Number
			if (e.altKey) {
				const sections = [
					"home",
					"projects",
					"certifications",
					"tech-blog",
					"impact",
					"skills",
					"about-me",
				];
				const num = parseInt(e.key);
				if (!isNaN(num) && num > 0 && num <= sections.length) {
					scrollToSection(sections[num - 1]);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Calculate scroll progress
			const totalHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const progress =
				totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
			setScrollProgress(progress);

			// Update active section based on scroll
			const sections = [
				"home",
				"projects",
				"certifications",
				"tech-blog",
				"impact",
				"skills",
				"about-me",
			];
			const current = sections.find((section) => {
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
			if (theme === "auto") {
				const prefersDark = window.matchMedia(
					"(prefers-color-scheme: dark)",
				).matches;
				setIsDark(prefersDark);
			} else {
				setIsDark(theme === "night");
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousemove", handleMouseMove);

		detectTheme();
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", detectTheme);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("mousemove", handleMouseMove);
			mediaQuery.removeEventListener("change", detectTheme);
		};
	}, [theme]);

	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
		if (newTheme !== "auto") {
			setIsDark(newTheme === "night");
		}
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (
			formData.name &&
			formData.email &&
			formData.subject &&
			formData.message
		) {
			// Send email via mailto
			const mailtoLink = `mailto:Senamdagadusaviour@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
			window.location.href = mailtoLink;

			// Reset form and show success message
			setFormSubmitted(true);
			setFormData({ name: "", email: "", subject: "", message: "" });
			setTimeout(() => setFormSubmitted(false), 3000);
		}
	};

	return (
		<div
			className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100" : "bg-linear-to-br from-gray-50 via-white to-gray-100 text-gray-900"} overflow-hidden`}
		>
			{/* Scroll Progress Bar */}
			<div
				className="fixed top-0 left-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
				style={{ width: `${scrollProgress}%` }}
			/>

			{/* Modals */}
			{expandedProject && (
				<ProjectModal
					project={expandedProject}
					onClose={() => setExpandedProject(null)}
					setSelectedMedia={setSelectedMedia}
				/>
			)}
			{selectedMedia && (
				<MediaModal
					media={selectedMedia}
					onClose={() => setSelectedMedia(null)}
				/>
			)}
			{expandedGallery && (
				<GalleryModal
					gallery={expandedGallery.gallery}
					title={expandedGallery.title}
					onClose={() => setExpandedGallery(null)}
					galleryIndex={galleryIndex}
					setGalleryIndex={setGalleryIndex}
				/>
			)}

			{/* Skip to Content Link for Accessibility */}
			<a
				href="#projects"
				className="absolute top-0 left-0 -translate-y-full focus:translate-y-0 bg-blue-500 text-white px-4 py-2 z-60 transition-transform"
				aria-label="Skip to main content"
			>
				Skip to main content
			</a>

			{/* Animated Background */}
			<Background isDark={isDark} mousePosition={mousePosition} />

			{/* Navigation */}
			<Navbar
				scrolled={scrolled}
				isDark={isDark}
				scrollToSection={scrollToSection}
				activeSection={activeSection}
				theme={theme}
				handleThemeChange={handleThemeChange}
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>

			<Hero
				isDark={isDark}
				scrollToSection={scrollToSection}
				stats={stats}
			/>

			<Projects
				isDark={isDark}
				projects={projects}
				setExpandedProject={setExpandedProject}
			/>

			<CurrentlyBuilding isDark={isDark} />

			<Certifications isDark={isDark} certifications={certifications} />

			<TechBlog isDark={isDark} blogPosts={blogPosts} />

			<Testimonials isDark={isDark} testimonials={testimonials} />

			<Impact
				isDark={isDark}
				impactActivities={impactActivities}
				setGalleryIndex={setGalleryIndex}
				setExpandedGallery={setExpandedGallery}
			/>

			<Skills isDark={isDark} skills={skills} />

			<AboutMe
				isDark={isDark}
				formData={formData}
				handleFormChange={handleFormChange}
				handleFormSubmit={handleFormSubmit}
				formSubmitted={formSubmitted}
			/>

			<Footer isDark={isDark} />

			{/* Custom Styles & Accessibility */}
			<style jsx>{`
				@keyframes spin-slow {
					from {
						transform: translate(-50%, -50%) rotate(0deg);
					}
					to {
						transform: translate(-50%, -50%) rotate(360deg);
					}
				}
				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}
				@keyframes pulse-slow {
					0%,
					100% {
						opacity: 1;
						transform: scale(1);
					}
					50% {
						opacity: 0.8;
						transform: scale(1.05);
					}
				}
				.animate-pulse-slow {
					animation: pulse-slow 4s ease-in-out infinite;
				}
				@keyframes bounce-slow {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-10px);
					}
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
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
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
