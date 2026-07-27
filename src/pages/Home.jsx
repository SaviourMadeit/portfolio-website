import { ChevronRight } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import Hero from "../sections/Hero";
import { projects, services, stats } from "../data";

const Home = () => {
	const { isDark } = useOutletContext();
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
	const featuredServices = services.slice(0, 3);

	return (
		<>
			<Hero isDark={isDark} stats={stats} />

			{/* Services teaser */}
			<section className="relative py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
						<div>
							<h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
								What I Do
							</h2>
							<p
								className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
							>
								A quick look at the services I offer
							</p>
						</div>
						<Link
							to="/services"
							className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
						>
							<span>See all services</span>
							<ChevronRight className="w-4 h-4" />
						</Link>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{featuredServices.map((service) => {
							const Icon = service.icon;
							return (
								<div
									key={service.title}
									className={`rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
										isDark
											? "bg-slate-800/50 border-slate-700"
											: "bg-white/50 border-gray-300"
									}`}
								>
									<div
										className={`w-14 h-14 mb-5 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center shadow-lg`}
									>
										<Icon className="w-7 h-7 text-white" />
									</div>
									<h3
										className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
									>
										{service.title}
									</h3>
									<p
										className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
									>
										{service.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Featured work teaser */}
			<section
				className={`relative py-24 px-4 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
			>
				<div className="max-w-7xl mx-auto">
					<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
						<div>
							<h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
								Featured Work
							</h2>
							<p
								className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
							>
								A sample of recent projects
							</p>
						</div>
						<Link
							to="/portfolio"
							className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
						>
							<span>View full portfolio</span>
							<ChevronRight className="w-4 h-4" />
						</Link>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{featuredProjects.map((project) => (
							<Link
								to="/portfolio"
								key={project.id}
								className={`group relative rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] block ${
									isDark
										? "bg-slate-800/50 border-slate-700 hover:border-blue-400/50"
										: "bg-white/50 border-gray-300 hover:border-blue-500/50"
								}`}
							>
								<div className="relative h-40 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div
										className={`absolute inset-0 bg-linear-to-t ${isDark ? "from-black/60 to-transparent" : "from-black/40 to-transparent"}`}
									/>
								</div>
								<div className="p-5">
									<h3
										className={`font-bold mb-1 group-hover:text-blue-400 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
									>
										{project.title}
									</h3>
									<span
										className={`text-xs px-2 py-1 rounded-full ${isDark ? "text-gray-400 bg-slate-800/80" : "text-gray-600 bg-gray-100"}`}
									>
										{project.category}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
