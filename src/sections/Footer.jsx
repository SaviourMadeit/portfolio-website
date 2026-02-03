import { Cpu, MapPin } from "lucide-react";

const Footer = ({ isDark }) => {
	return (
		<footer
			className={`relative border-t py-12 px-4 transition-colors ${
				isDark
					? "bg-slate-900/50 border-slate-700/50"
					: "bg-white/50 border-gray-200/50"
			}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
					<div className="flex items-center space-x-3">
						<Cpu className="w-8 h-8 text-blue-400" />
						<span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Saviour Dagadu
						</span>
					</div>

					<div className="text-center">
						<p
							className={`italic mb-2 text-lg ${
								isDark ? "text-gray-400" : "text-gray-600"
							}`}
						>
							"Building the bridge between software and silicon"
						</p>
						<p
							className={`text-sm ${
								isDark ? "text-gray-500" : "text-gray-500"
							}`}
						>
							© {new Date().getFullYear()} Saviour Dagadu. All
							rights reserved.
						</p>
					</div>

					<div
						className={`flex items-center space-x-2 ${
							isDark ? "text-gray-400" : "text-gray-600"
						}`}
					>
						<MapPin className="w-5 h-5 text-blue-400" />
						<span>Accra, Ghana</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
