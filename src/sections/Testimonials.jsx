import { Quote } from "lucide-react";

const Testimonials = ({ isDark, testimonials }) => {
	return (
		<section
			className={`relative py-32 px-4 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<div className="inline-flex items-center space-x-3 mb-4">
						<Quote className="w-10 h-10 text-yellow-400" />
						<h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
							What Others Say
						</h2>
					</div>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						Testimonials from mentors, colleagues, and those I've
						helped
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={testimonial.id}
							className={`group relative rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom ${
								isDark
									? "bg-slate-800/50 border-slate-700 hover:border-yellow-400/50"
									: "bg-white/50 border-gray-300 hover:border-yellow-500/50"
							}`}
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							/>

							<div className="relative p-8">
								{/* Quote Icon */}
								<Quote
									className={`w-8 h-8 mb-4 opacity-30 ${isDark ? "text-yellow-400" : "text-yellow-500"}`}
								/>

								{/* Star Rating */}
								<div className="flex gap-1 mb-4">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<span
												key={i}
												className="text-yellow-400 text-lg"
											>
												★
											</span>
										),
									)}
								</div>

								{/* Testimonial Text */}
								<p
									className={`text-lg mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
								>
									"{testimonial.testimonial}"
								</p>

								{/* Author Info */}
								<div className="flex items-center space-x-4 pt-6 border-t border-gray-400/20">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-12 h-12 rounded-full object-cover"
									/>
									<div>
										<p
											className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
										>
											{testimonial.name}
										</p>
										<p
											className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
										>
											{testimonial.title}
										</p>
										<p
											className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
										>
											{testimonial.company}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
