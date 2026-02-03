import {
	Briefcase,
	ChevronDown,
	ChevronRight,
	Cpu,
	FileText,
	Github,
	Linkedin,
	Mail,
	MapPin,
	Users,
} from "lucide-react";

const Hero = ({ isDark, scrollToSection, stats }) => {
	return (
		<section
			id="home"
			className="relative pt-32 pb-20 px-4 min-h-screen flex items-center"
		>
			<div className="max-w-7xl mx-auto w-full relative z-10">
				<div className="relative">
					{/* Cover/Banner Image (like LinkedIn background) */}
					<div
						className={`relative h-64 rounded-2xl overflow-hidden mb-4 animate-in slide-in-from-bottom duration-700 bg-cover bg-center ${
							isDark
								? "bg-gradient-to-r from-slate-800 to-slate-900"
								: "bg-gradient-to-r from-blue-50 to-gray-100"
						}`}
						style={{ backgroundImage: "url(/images/Workshop.jpg)" }}
					>
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
					<div
						className={`relative rounded-2xl border backdrop-blur-sm animate-in slide-in-from-bottom duration-700 shadow-lg ${
							isDark
								? "bg-slate-900/80 border-slate-700 shadow-slate-900/50"
								: "bg-white/95 border-gray-200 shadow-blue-100/50"
						}`}
						style={{ animationDelay: "100ms" }}
					>
						{/* Profile Photo and Info */}
						<div className="relative px-8 pb-8 pt-20">
							{/* Profile Photo - Positioned over the banner */}
							<div className="absolute -top-20 left-8 z-20">
								<div className="relative group">
									{/* Outer ring */}
									<div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>

									{/* Profile image */}
									<div
										className={`relative w-40 h-40 rounded-full overflow-hidden border-4 shadow-2xl backdrop-blur-sm ${
											isDark
												? "border-slate-900"
												: "border-white"
										}`}
									>
										<img
											src="/images/Profile_1.jpg"
											alt="Saviour Dagadu"
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
											style={{
												objectPosition: "center 25%",
											}}
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
								<h1
									className={`text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
								>
									Saviour Dagadu
								</h1>
								<div className="space-y-2">
									<p
										className={`text-xl font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
									>
										Embedded Hardware Designer | Robotics
										Instructor | Firmware Developer
									</p>
									<p
										className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
									>
										Inspiring the Next Generation of
										Innovators
									</p>
								</div>
							</div>

							{/* Location and Contact Info */}
							<div
								className={`flex flex-wrap items-center gap-4 mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}
							>
								<div className="flex items-center space-x-2">
									<MapPin className="w-5 h-5 text-blue-400" />
									<span>
										Abeka, Greater Accra Region, Ghana
									</span>
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
									onClick={() => scrollToSection("projects")}
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
											? "bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 text-gray-100"
											: "bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-white hover:shadow-lg text-gray-900"
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
											? "bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 text-gray-100"
											: "bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-white hover:shadow-lg text-gray-900"
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
											? "bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 text-gray-100"
											: "bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-white hover:shadow-lg text-gray-900"
									}`}
								>
									<Mail className="w-5 h-5" />
									<span>Contact info</span>
								</a>
							</div>
						</div>
					</div>

					{/* Stats Section (Below Profile) */}
					<div
						className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-12 animate-in slide-in-from-bottom duration-700"
						style={{ animationDelay: "200ms" }}
					>
						{stats.map((stat, idx) => (
							<div key={idx} className="group relative">
								<div
									className={`backdrop-blur-sm rounded-xl p-6 transition-all hover:scale-105 text-center ${
										isDark
											? "bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 hover:border-blue-400/50"
											: "bg-white/50 border border-gray-300 hover:bg-gray-100/50 hover:border-blue-500/50"
									}`}
								>
									<stat.icon
										className={`w-8 h-8 mx-auto mb-3 transition-colors ${
											isDark
												? "text-blue-400 group-hover:text-blue-300"
												: "text-blue-500 group-hover:text-blue-600"
										}`}
									/>
									<div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
										{stat.value}
									</div>
									<div
										className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
									>
										{stat.label}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Scroll Indicator */}
					<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
						<ChevronDown
							className={`w-8 h-8 ${isDark ? "text-blue-400/50" : "text-blue-500/50"}`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
