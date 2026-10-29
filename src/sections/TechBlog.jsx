import { BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
						<h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
					{blogPosts.map((post, index) => {
						const cardClassName = `group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom ${
							isDark
								? "bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-400/50"
								: "bg-white/50 backdrop-blur-sm border-gray-300 hover:border-blue-500/50"
						}`;
						const cardContent = (
							<>
								<div className="relative h-48 overflow-hidden">
									<img
										src={post.image}
										alt={post.imageAlt || post.title}
										loading="lazy"
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div
										className={`absolute inset-0 bg-linear-to-br ${post.gradient || "from-slate-950/20 to-blue-950/30"} opacity-30 transition-opacity group-hover:opacity-20`}
									/>
									<div className="absolute top-4 left-4 rounded-lg bg-black/50 px-3 py-1 backdrop-blur-sm">
										<span className="text-xs font-semibold text-white">
											{post.category}
										</span>
									</div>
								</div>

								<div className="p-6">
									<div className="mb-3 flex items-center justify-between">
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
										className={`mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-blue-400 ${
											isDark ? "text-white" : "text-gray-900"
										}`}
									>
										{post.title}
									</h3>

									<p
										className={`mb-4 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-700"}`}
									>
										{post.excerpt}
									</p>

									<div className="flex items-center space-x-2 text-blue-400 transition-colors group-hover:text-blue-300">
										<span className="text-sm font-medium">Read More</span>
										<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</div>
								</div>
							</>
						);

						return post.href ? (
							<Link
								key={post.id}
								to={post.href}
								className={cardClassName}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{cardContent}
							</Link>
						) : (
							<article
								key={post.id}
								className={cardClassName}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{cardContent}
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TechBlog;
