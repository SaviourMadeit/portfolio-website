import { useState } from "react";
import {
	ArrowUp,
	Cpu,
	Github,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/navLinks";
import { engineeringServices } from "../data";

/* ------------------------------------------------------------------ */
/* Things to fill in                                                   */
/* ------------------------------------------------------------------ */
const LOGO_LIGHT = "/images/bixyl/Logo.png";
// Optional logo version for dark backgrounds. Leave "" to reuse LOGO_LIGHT.
const LOGO_DARK = "/images/bixyl/Logo.png";
const EMAIL = "Senamdagadusaviour@gmail.com";
// International format, digits only (e.g. "233241234567"). Leave "" to hide WhatsApp.
const WHATSAPP_NUMBER = "233248919044";
const LOCATION = "Accra, Ghana";
const GITHUB = "https://github.com/SaviourMadeit";
const LINKEDIN = "https://www.linkedin.com/in/saviour-dagadu";

const FONT = {
	fontFamily:
		"'Bricolage Grotesque', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const focusRing =
	"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

const Footer = ({ isDark }) => {
	const [logoFailed, setLogoFailed] = useState(false);
	const logoSrc = isDark && LOGO_DARK ? LOGO_DARK : LOGO_LIGHT;

	const ink = isDark ? "text-white" : "text-slate-900";
	const muted = isDark ? "text-slate-400" : "text-slate-600";
	const rule = isDark ? "border-slate-800" : "border-slate-200";

	const linkClasses = `inline-block py-1 transition-colors hover:text-blue-500 ${focusRing} ${muted}`;
	const headingClasses = `mb-4 text-sm font-semibold ${ink}`;
	const socialClasses = `p-2.5 rounded-lg transition-colors ${focusRing} ${
		isDark
			? "text-slate-300 hover:text-white hover:bg-slate-800"
			: "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
	}`;

	const scrollToTop = () => {
		const reduce = window.matchMedia?.(
			"(prefers-reduced-motion: reduce)",
		).matches;
		window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
	};

	return (
		<footer
			style={FONT}
			className={`relative border-t transition-colors ${
				isDark
					? "bg-slate-950 border-slate-800"
					: "bg-slate-50 border-slate-200"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
					{/* Brand */}
					<div>
						<Link
							to="/"
							aria-label="Bixyl Lab IT Consult, home"
							className={`inline-flex items-center gap-3 rounded-lg ${focusRing}`}
						>
							{logoFailed || !logoSrc ? (
								<span className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
									<Cpu className="w-6 h-6 text-white" />
								</span>
							) : (
								<img
									src={logoSrc}
									alt=""
									className="h-10 w-auto"
									onError={() => setLogoFailed(true)}
								/>
							)}
							<span className="flex flex-col leading-none">
								<span className={`text-xl font-extrabold tracking-tight ${ink}`}>
									Bixyl Lab
								</span>
								<span className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-blue-500">
									IT CONSULT
								</span>
							</span>
						</Link>

						<p className={`mt-5 max-w-sm leading-relaxed ${muted}`}>
							Building the bridge between software and silicon. Embedded
							hardware, firmware, IoT and robotics training.
						</p>

						<div className="mt-5 flex items-center -ml-2.5">
							<a
								href={GITHUB}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className={socialClasses}
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href={LINKEDIN}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className={socialClasses}
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Pages */}
					<nav aria-label="Footer">
						<h2 className={headingClasses}>Explore</h2>
						<ul>
							{NAV_LINKS.map((item) => (
								<li key={item.path}>
									<Link to={item.path} className={`${linkClasses} capitalize`}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Services */}
					<div>
						<h2 className={headingClasses}>Services</h2>
						<ul>
							{engineeringServices.slice(0, 5).map((service) => (
								<li key={service.title}>
									<Link
										to={`/contact?service=${encodeURIComponent(service.title)}`}
										className={linkClasses}
									>
										{service.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h2 className={headingClasses}>Get in touch</h2>
						<ul className="space-y-3">
							<li>
								<a
									href={`mailto:${EMAIL}`}
									className={`flex items-start gap-2 transition-colors hover:text-blue-500 break-all ${focusRing} ${muted}`}
								>
									<Mail className="w-5 h-5 mt-0.5 shrink-0 text-blue-500" />
									{EMAIL}
								</a>
							</li>
							{WHATSAPP_NUMBER && (
								<li>
									<a
										href={`https://wa.me/${WHATSAPP_NUMBER}`}
										target="_blank"
										rel="noreferrer"
										className={`flex items-center gap-2 transition-colors hover:text-blue-500 ${focusRing} ${muted}`}
									>
										<MessageCircle className="w-5 h-5 shrink-0 text-blue-500" />
										Chat on WhatsApp
									</a>
								</li>
							)}
							<li className={`flex items-center gap-2 ${muted}`}>
								<MapPin className="w-5 h-5 shrink-0 text-blue-500" />
								{LOCATION}
							</li>
						</ul>
						<Link
							to="/contact"
							className={`mt-5 inline-flex items-center rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-5 py-2.5 transition-colors ${focusRing}`}
						>
							Get a quote
						</Link>
					</div>
				</div>

				{/* Bottom bar */}
				<div
					className={`mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm ${rule} ${muted}`}
				>
					<p>
						© {new Date().getFullYear()} Bixyl Lab IT Consult. All rights
						reserved.
					</p>
					<button
						type="button"
						onClick={scrollToTop}
						className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 transition-colors hover:text-blue-500 ${focusRing}`}
					>
						Back to top
						<ArrowUp className="w-4 h-4" />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
