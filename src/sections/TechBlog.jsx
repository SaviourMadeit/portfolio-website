import { BookOpen, ChevronRight } from "lucide-react";

const TechBlog = ({ isDark, blogPosts }) => {
	return (
		<section
			id="tech-blog"
			className={`relative py-32 px-4 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<div className="inline-flex items-center space-x-3 mb-4">
						<BookOpen className="w-10 h-10 text-blue-400" />
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Tech Blog
						</h2>
					</div>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						Insights, tutorials, and deep dives into embedded
						systems
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{blogPosts.map((post, index) => (
						<div
							key={post.id}
							className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom ${
								isDark
									? "bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-400/50"
									: "bg-white/50 backdrop-blur-sm border-gray-300 hover:border-blue-500/50"
							}`}
							style={{ animationDelay: `${index * 100}ms` }}
						>
							{/* Blog Image */}
							<div className="relative h-48 overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40 group-hover:opacity-30 transition-opacity`}
								/>
								<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
									<span className="text-xs font-semibold text-white">
										{post.category}
									</span>
								</div>
							</div>

							<div className="p-6">
								<div className="flex justify-between items-center mb-3">
									<span
										className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}
									>
										{post.date}
									</span>
									<span
										className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}
									>
										{post.readTime}
									</span>
								</div>

								<h3
									className={`text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors ${
										isDark ? "text-white" : "text-gray-900"
									}`}
								>
									{post.title}
								</h3>

								<p
									className={`text-sm mb-4 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-700"}`}
								>
									{post.excerpt}
								</p>

								<div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors">
									<span className="text-sm font-medium">
										Read More
									</span>
									<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechBlog;
