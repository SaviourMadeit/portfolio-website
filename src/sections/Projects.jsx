import { ChevronRight, Code, ExternalLink, Github, Zap } from "lucide-react";

const Projects = ({ isDark, projects, setExpandedProject }) => {
	return (
		<section id="projects" className="relative py-32 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<div className="inline-flex items-center space-x-3 mb-4">
						<Code className="w-10 h-10 text-blue-400" />
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Explored Project
						</h2>
					</div>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						Innovative solutions in embedded systems, IoT, and
						hardware design
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
										? "bg-slate-800/50 border-slate-700 hover:border-blue-400/50"
										: "bg-white/50 border-gray-300 hover:border-blue-500/50"
								}`}
							>
								{/* Project Image */}
								<div className="relative h-48 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t ${
											isDark
												? "from-black/60 to-transparent"
												: "from-black/40 to-transparent"
										}`}
									/>
									{project.featured && (
										<div className="absolute top-4 left-4 flex items-center space-x-1 text-yellow-400 animate-pulse">
											<Zap className="w-5 h-5 fill-current" />
											<span className="text-sm font-semibold">
												Featured
											</span>
										</div>
									)}
								</div>

								<div className="p-6">
									<div className="flex items-start justify-between mb-4">
										<div>
											<h3
												className={`text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors ${
													isDark
														? "text-white"
														: "text-gray-900"
												}`}
											>
												{project.title}
											</h3>
											<span
												className={`text-sm px-3 py-1 rounded-full ${
													isDark
														? "text-gray-400 bg-slate-800/80"
														: "text-gray-600 bg-gray-100"
												}`}
											>
												{project.category}
											</span>
										</div>
										<div
											className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
										>
											<Icon className="w-6 h-6 text-white" />
										</div>
									</div>

									<p
										className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
									>
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-6">
										{project.tech
											.slice(0, 3)
											.map((tech, idx) => (
												<span
													key={idx}
													className={`text-xs px-3 py-1 rounded-lg border ${
														isDark
															? "bg-blue-400/10 text-blue-400 border-blue-400/20"
															: "bg-blue-500/10 text-blue-600 border-blue-500/20"
													}`}
												>
													{tech}
												</span>
											))}
										{project.tech.length > 3 && (
											<span
												className={`text-xs px-3 py-1 rounded-lg ${
													isDark
														? "bg-slate-800 text-gray-400"
														: "bg-gray-100 text-gray-600"
												}`}
											>
												+{project.tech.length - 3} more
											</span>
										)}
									</div>

									<div className="flex justify-between items-center">
										<button
											onClick={() =>
												setExpandedProject(project)
											}
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
															? "bg-slate-800 text-gray-400 hover:text-blue-400"
															: "bg-gray-100 text-gray-600 hover:text-blue-600"
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
															? "bg-slate-800 text-gray-400 hover:text-blue-400"
															: "bg-gray-100 text-gray-600 hover:text-blue-600"
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
	);
};

export default Projects;
