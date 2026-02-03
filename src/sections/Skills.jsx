const Skills = ({ isDark, skills }) => {
	return (
		<section
			id="skills"
			className={`relative py-32 px-4 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
						Technical Expertise
					</h2>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						Comprehensive skills across the embedded systems stack
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skills.map((skill, index) => {
						const Icon = skill.icon;
						return (
							<div
								key={index}
								className={`group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom ${
									isDark
										? "bg-slate-800/50 border-slate-700 hover:border-blue-400/50"
										: "bg-white/50 border-gray-300 hover:border-blue-500/50"
								}`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div
									className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
								/>

								<div className="relative">
									<div
										className={`w-16 h-16 mb-6 rounded-xl bg-linear-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
									>
										<Icon className="w-8 h-8 text-white" />
									</div>

									<h3
										className={`text-xl font-bold mb-6 group-hover:text-blue-400 transition-colors ${
											isDark
												? "text-white"
												: "text-gray-900"
										}`}
									>
										{skill.category}
									</h3>

									<ul className="space-y-3">
										{skill.items.map((item, i) => (
											<li
												key={i}
												className={`flex items-center space-x-3 transition-colors ${
													isDark
														? "text-gray-300 hover:text-blue-400"
														: "text-gray-700 hover:text-blue-600"
												}`}
											>
												<span
													className={`w-2 h-2 rounded-full bg-linear-to-r ${skill.color} group-hover:scale-150 transition-transform`}
												/>
												<span className="text-sm">
													{item}
												</span>
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
	);
};

export default Skills;
