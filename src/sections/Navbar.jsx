import { useEffect, useState } from "react";
import {
	ArrowUpRight,
	Cpu,
	Menu as MenuIcon,
	MessageCircle,
	X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../components/ui/ThemeToggle";
import { NAV_LINKS } from "../data/navLinks";

/* ------------------------------------------------------------------ */
/* Things to fill in                                                   */
/* ------------------------------------------------------------------ */
// Put your logo in /public and point to it here (PNG, SVG or WebP).
const LOGO_LIGHT = "/images/bixyl/Logo.png";
// Optional: a version of the logo that reads on dark backgrounds. Leave "" to reuse LOGO_LIGHT.
const LOGO_DARK = "";
// International format, digits only (e.g. "233241234567"). Leave "" to hide WhatsApp buttons.
const WHATSAPP_NUMBER = "";
// Main call-to-action button.
const CTA = { label: "Get a quote", to: "/contact" };

const NAV_FONT = {
	fontFamily:
		"'Bricolage Grotesque', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const focusRing =
	"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

/* ------------------------------------------------------------------ */
/* Brand: logo followed by the wordmark                                */
/* ------------------------------------------------------------------ */
const Brand = ({ isDark, onClick }) => {
	const [logoFailed, setLogoFailed] = useState(false);
	const logoSrc = isDark && LOGO_DARK ? LOGO_DARK : LOGO_LIGHT;

	return (
		<Link
			to="/"
			onClick={onClick}
			aria-label="Bixyl Lab IT Consult, home"
			className={`flex items-center gap-3 rounded-lg ${focusRing}`}
		>
			{logoFailed || !logoSrc ? (
				// Fallback so the nav never shows a broken image
				<span className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
					<Cpu className="w-6 h-6 text-white" />
				</span>
			) : (
				<img
					src={logoSrc}
					alt=""
					className="h-10 w-auto"
					onError={() => {
						console.warn(
							`[Navbar] Logo failed to load from "${logoSrc}". Open that URL directly in the browser to check it.`,
						);
						setLogoFailed(true);
					}}
				/>
			)}

			<span className="flex flex-col leading-none">
				<span
					className={`text-xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}
				>
					Bixyl Lab
				</span>
				<span className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-blue-500">
					IT CONSULT
				</span>
			</span>
		</Link>
	);
};

const Navbar = ({
	scrolled,
	isDark,
	theme,
	handleThemeChange,
	mobileMenuOpen,
	setMobileMenuOpen,
}) => {
	// Close the mobile menu with Escape
	useEffect(() => {
		if (!mobileMenuOpen) return;
		const onKey = (e) => e.key === "Escape" && setMobileMenuOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [mobileMenuOpen, setMobileMenuOpen]);

	const solid = scrolled || mobileMenuOpen;
	const ink = isDark ? "text-white" : "text-slate-900";

	const linkClasses = ({ isActive }) =>
		`capitalize px-3 xl:px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${focusRing} ${
			isActive
				? `border-blue-500 ${ink}`
				: `border-transparent ${
						isDark
							? "text-slate-300 hover:text-white"
							: "text-slate-600 hover:text-slate-900"
					}`
		}`;

	const mobileLinkClasses = ({ isActive }) =>
		`block w-full capitalize py-3 px-4 rounded-lg font-medium transition-colors ${focusRing} ${
			isActive
				? isDark
					? "bg-blue-500/15 text-blue-300"
					: "bg-blue-50 text-blue-700"
				: isDark
					? "text-slate-300 hover:bg-slate-800/60"
					: "text-slate-700 hover:bg-slate-100"
		}`;

	const ctaClasses = `inline-flex items-center gap-1.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-[15px] font-semibold px-5 py-2.5 transition-colors ${focusRing}`;

	const whatsappClasses = `inline-flex items-center gap-2 rounded-full border text-[15px] font-semibold px-4 py-2.5 transition-colors ${focusRing} ${
		isDark
			? "border-slate-600 text-slate-200 hover:border-green-400"
			: "border-slate-300 text-slate-700 hover:border-green-500"
	}`;

	return (
		<>
			{/* Needs <main id="main-content"> in your layout to work */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-white"
			>
				Skip to content
			</a>

			<nav
				aria-label="Main"
				style={NAV_FONT}
				className={`fixed w-full z-50 transition-colors duration-300 ${
					solid
						? isDark
							? "bg-slate-950/90 backdrop-blur-lg border-b border-slate-800"
							: "bg-white/90 backdrop-blur-lg border-b border-slate-200"
						: "bg-transparent border-b border-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						<Brand
							isDark={isDark}
							onClick={() => setMobileMenuOpen(false)}
						/>

						{/* Desktop */}
						<div className="hidden lg:flex items-center gap-1">
							{NAV_LINKS.map((item) => (
								<NavLink
									key={item.path}
									to={item.path}
									end={item.path === "/"}
									className={linkClasses}
								>
									{item.label}
								</NavLink>
							))}
						</div>

						<div className="hidden lg:flex items-center gap-3">
							<ThemeToggle
								theme={theme}
								handleThemeChange={handleThemeChange}
							/>
							{WHATSAPP_NUMBER && (
								<a
									href={`https://wa.me/${WHATSAPP_NUMBER}`}
									target="_blank"
									rel="noreferrer"
									className={`${whatsappClasses} hidden xl:inline-flex`}
								>
									<MessageCircle className="w-4 h-4" />
									WhatsApp
								</a>
							)}
							<Link to={CTA.to} className={ctaClasses}>
								{CTA.label}
								<ArrowUpRight className="w-4 h-4" />
							</Link>
						</div>

						{/* Mobile / tablet controls */}
						<div className="lg:hidden flex items-center gap-2">
							<ThemeToggle
								theme={theme}
								handleThemeChange={handleThemeChange}
							/>
							<button
								type="button"
								aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
								aria-expanded={mobileMenuOpen}
								aria-controls="mobile-menu"
								className={`p-2 rounded-lg transition-colors ${focusRing} ${
									isDark
										? "text-slate-300 hover:text-blue-400"
										: "text-slate-600 hover:text-blue-600"
								}`}
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								{mobileMenuOpen ? (
									<X className="w-7 h-7" />
								) : (
									<MenuIcon className="w-7 h-7" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div
						id="mobile-menu"
						className={`lg:hidden border-t ${
							isDark
								? "bg-slate-950 border-slate-800"
								: "bg-white border-slate-200"
						}`}
					>
						<div className="px-4 py-5 space-y-1">
							{NAV_LINKS.map((item) => (
								<NavLink
									key={item.path}
									to={item.path}
									end={item.path === "/"}
									className={mobileLinkClasses}
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.label}
								</NavLink>
							))}

							<div className="pt-4 flex flex-col gap-3">
								<Link
									to={CTA.to}
									onClick={() => setMobileMenuOpen(false)}
									className={`${ctaClasses} justify-center w-full`}
								>
									{CTA.label}
									<ArrowUpRight className="w-4 h-4" />
								</Link>
								{WHATSAPP_NUMBER && (
									<a
										href={`https://wa.me/${WHATSAPP_NUMBER}`}
										target="_blank"
										rel="noreferrer"
										className={`${whatsappClasses} justify-center w-full`}
									>
										<MessageCircle className="w-4 h-4" />
										Chat on WhatsApp
									</a>
								)}
							</div>
						</div>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
