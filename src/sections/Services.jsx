import { Link } from "react-router-dom";

const Services = ({ isDark, services }) => {
	return (
		<section
			id="services"
			className={`relative py-32 px-4 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
						Services I Offer
					</h2>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						From concept to production — embedded hardware, firmware,
						and IoT engineering tailored to your project
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={service.title}
								className={`group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom flex flex-col ${
									isDark
										? "bg-slate-800/50 border-slate-700 hover:border-blue-400/50"
										: "bg-white/50 border-gray-300 hover:border-blue-500/50"
								}`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div
									className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
								/>

								<div className="relative flex flex-col grow">
									<div
										className={`w-16 h-16 mb-6 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
									>
										<Icon className="w-8 h-8 text-white" />
									</div>

									<h3
										className={`text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors ${
											isDark ? "text-white" : "text-gray-900"
										}`}
									>
										{service.title}
									</h3>

									<p
										className={`text-sm leading-relaxed grow ${
											isDark ? "text-gray-300" : "text-gray-600"
										}`}
									>
										{service.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				<div className="text-center mt-16">
					<Link
						to="/contact"
						className="inline-block px-8 py-4 rounded-lg font-semibold bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
					>
						Let's Work Together
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Services;
