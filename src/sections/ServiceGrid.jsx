const ServiceGrid = ({ isDark, title, subtitle, items }) => {
	return (
		<div className="max-w-7xl mx-auto">
			{(title || subtitle) && (
				<div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
					{title && (
						<h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
							{title}
						</h2>
					)}
					{subtitle && (
						<p
							className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
						>
							{subtitle}
						</p>
					)}
				</div>
			)}

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{items.map((item, index) => {
					const Icon = item.icon;
					return (
						<div
							key={item.title}
							className={`group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom flex flex-col ${
								isDark
									? "bg-slate-800/50 border-slate-700 hover:border-blue-400/50"
									: "bg-white/50 border-gray-300 hover:border-blue-500/50"
							}`}
							style={{ animationDelay: `${index * 80}ms` }}
						>
							<div
								className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
							/>

							<div className="relative flex flex-col grow">
								<div
									className={`w-16 h-16 mb-6 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
								>
									<Icon className="w-8 h-8 text-white" />
								</div>

								<h3
									className={`text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors ${
										isDark ? "text-white" : "text-gray-900"
									}`}
								>
									{item.title}
								</h3>

								<p
									className={`text-sm leading-relaxed grow ${
										isDark ? "text-gray-300" : "text-gray-600"
									}`}
								>
									{item.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ServiceGrid;
