import { ChevronRight, Sparkles } from "lucide-react";

const CurrentlyBuilding = ({ isDark }) => {
	return (
		<section className="relative py-32 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<div className="inline-flex items-center space-x-3 mb-4">
						<Sparkles className="w-10 h-10 text-amber-400" />
						<h2 className="text-5xl font-bold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
							Currently Building
						</h2>
					</div>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						Pushing boundaries in IC design and silicon engineering
					</p>
				</div>

				<div
					className={`relative rounded-2xl border backdrop-blur-sm overflow-hidden ${
						isDark
							? "bg-slate-800/50 border-slate-700"
							: "bg-white/50 border-gray-300"
					}`}
				>
					<div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl -z-10"></div>

					<div className="p-8 md:p-12">
						<div className="grid md:grid-cols-2 gap-12 items-center">
							{/* Left side - Project Details */}
							<div className="space-y-6">
								<div>
									<div className="inline-flex items-center space-x-2 mb-4">
										<div className="w-3 h-3 rounded-full bg-linear-to-r from-amber-400 to-orange-400 animate-pulse"></div>
										<span
											className={`text-sm font-semibold ${isDark ? "text-amber-400" : "text-amber-600"}`}
										>
											In Development
										</span>
									</div>
									<h3
										className={`text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
									>
										Custom ASIC Design
									</h3>
									<p
										className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
									>
										Designing a specialized
										Application-Specific Integrated Circuit
										(ASIC) optimized for IoT sensor data
										processing and edge AI inference in
										agricultural systems.
									</p>
								</div>

								{/* Technologies */}
								<div>
									<h4
										className={`text-lg font-semibold mb-4 ${isDark ? "text-gray-300" : "text-gray-900"}`}
									>
										Technologies & Tools
									</h4>
									<div className="flex flex-wrap gap-3">
										{[
											"Verilog/VHDL",
											"Cadence Tools",
											"RTL Design",
											"ASIC Methodology",
											"Low-Power Design",
											"IC Layout",
										].map((tech, idx) => (
											<span
												key={idx}
												className={`px-4 py-2 rounded-lg border ${
													isDark
														? "bg-amber-400/10 text-amber-400 border-amber-400/30"
														: "bg-amber-500/10 text-amber-700 border-amber-500/30"
												}`}
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Key Features */}
								<div>
									<h4
										className={`text-lg font-semibold mb-4 ${isDark ? "text-gray-300" : "text-gray-900"}`}
									>
										Project Highlights
									</h4>
									<ul className="space-y-2">
										{[
											"Ultra-low power consumption for battery-operated devices",
											"High-performance sensor fusion processing",
											"On-chip AI acceleration for neural networks",
											"Optimized for 5µm process technology",
										].map((item, idx) => (
											<li
												key={idx}
												className={`flex items-start space-x-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}
											>
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
								<div
									className={`rounded-xl p-6 ${
										isDark
											? "bg-slate-700/50 border border-slate-600"
											: "bg-white/50 border border-gray-200"
									}`}
								>
									<h4
										className={`text-lg font-semibold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
									>
										Development Progress
									</h4>
									<div className="space-y-4">
										{[
											{
												stage: "RTL Design",
												progress: 65,
											},
											{
												stage: "Simulation & Verification",
												progress: 50,
											},
											{
												stage: "Layout & DFM",
												progress: 30,
											},
											{
												stage: "Tapeout Preparation",
												progress: 15,
											},
										].map((item, idx) => (
											<div key={idx}>
												<div className="flex justify-between items-center mb-2">
													<span
														className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
													>
														{item.stage}
													</span>
													<span
														className={`text-xs font-semibold ${isDark ? "text-amber-400" : "text-amber-600"}`}
													>
														{item.progress}%
													</span>
												</div>
												<div
													className={`w-full h-2 rounded-full overflow-hidden ${
														isDark
															? "bg-slate-600"
															: "bg-gray-200"
													}`}
												>
													<div
														className="h-full bg-linear-to-r from-amber-400 to-orange-400 transition-all duration-500"
														style={{
															width: `${item.progress}%`,
														}}
													></div>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Timeline */}
								<div
									className={`rounded-xl p-6 ${
										isDark
											? "bg-slate-700/50 border border-slate-600"
											: "bg-white/50 border border-gray-200"
									}`}
								>
									<h4
										className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
									>
										Expected Milestones
									</h4>
									<div className="space-y-3">
										{[
											{
												month: "Q1 2025",
												milestone:
													"Complete RTL Design",
											},
											{
												month: "Q2 2025",
												milestone:
													"Finish Verification",
											},
											{
												month: "Q3 2025",
												milestone: "Layout & Routing",
											},
											{
												month: "Q4 2025",
												milestone: "Tapeout",
											},
										].map((item, idx) => (
											<div
												key={idx}
												className="flex items-start space-x-3"
											>
												<div
													className={`w-2 h-2 rounded-full mt-2 ${idx <= 1 ? "bg-green-500" : "bg-amber-400"}`}
												></div>
												<div>
													<p
														className={`text-sm font-semibold ${isDark ? "text-amber-400" : "text-amber-600"}`}
													>
														{item.month}
													</p>
													<p
														className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
													>
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
	);
};

export default CurrentlyBuilding;
