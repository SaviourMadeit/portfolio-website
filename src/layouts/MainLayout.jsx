import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Background from "../components/ui/Background";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const MainLayout = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [theme, setTheme] = useState("auto");
	const [isDark, setIsDark] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const location = useLocation();

	// Scroll to top on every page change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
			const totalHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const progress =
				totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
			setScrollProgress(progress);
		};

		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

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

	return (
		<div
			className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-grid-dark text-gray-100" : "bg-grid-light text-gray-900"}`}
		>
			{/* Scroll Progress Bar */}
			<div
				className="fixed top-0 left-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
				style={{ width: `${scrollProgress}%` }}
			/>

			{/* Skip to Content Link for Accessibility */}
			<a
				href="#main-content"
				className="absolute top-0 left-0 -translate-y-full focus:translate-y-0 bg-blue-500 text-white px-4 py-2 z-60 transition-transform"
				aria-label="Skip to main content"
			>
				Skip to main content
			</a>

			<Background isDark={isDark} mousePosition={mousePosition} />

			<Navbar
				scrolled={scrolled}
				isDark={isDark}
				theme={theme}
				handleThemeChange={handleThemeChange}
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>

			<main id="main-content">
				<Outlet context={{ isDark }} />
			</main>

			<Footer isDark={isDark} />

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

export default MainLayout;
