import { Cpu, Menu as MenuIcon, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../components/ui/ThemeToggle";
import { NAV_LINKS } from "../data/navLinks";

const Navbar = ({
	scrolled,
	isDark,
	theme,
	handleThemeChange,
	mobileMenuOpen,
	setMobileMenuOpen,
}) => {
	const linkClasses = ({ isActive }) =>
		`capitalize px-6 py-2 rounded-lg transition-all duration-300 ${
			isActive
				? isDark
					? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
					: "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
				: isDark
					? "text-gray-300 hover:text-white hover:bg-slate-800/50"
					: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
		}`;

	const mobileLinkClasses = ({ isActive }) =>
		`block w-full text-left capitalize py-3 px-4 rounded-lg transition-all ${
			isActive
				? isDark
					? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
					: "bg-linear-to-r from-blue-500 to-purple-500 text-white"
				: isDark
					? "text-gray-300 hover:text-white hover:bg-slate-800/50"
					: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
		}`;

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? isDark
						? "bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg"
						: "bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center space-x-3 group cursor-pointer"
					>
						<div className="relative">
							<Cpu
								className={`w-10 h-10 transition-colors ${isDark ? "text-blue-400 group-hover:text-blue-300" : "text-blue-500 group-hover:text-blue-600"} transition-all group-hover:rotate-180 duration-500`}
							/>
							<div
								className={`absolute inset-0 rounded-full blur-xl transition-colors ${isDark ? "bg-blue-400/20 group-hover:bg-blue-300/30" : "bg-blue-500/20 group-hover:bg-blue-600/30"}`}
							/>
						</div>
						<span className="text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							Saviour Dagadu
						</span>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-2">
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

						{/* Theme Toggle */}
						<div className="ml-4">
							<ThemeToggle
								theme={theme}
								handleThemeChange={handleThemeChange}
							/>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center gap-4">
						<ThemeToggle
							theme={theme}
							handleThemeChange={handleThemeChange}
						/>
						<button
							className={`transition-colors p-2 ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
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

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div
					className={`md:hidden backdrop-blur-lg border-t transition-colors ${isDark ? "bg-slate-900/98 border-slate-700/50" : "bg-white/98 border-gray-200/50"}`}
				>
					<div className="px-4 py-6 space-y-2">
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
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
