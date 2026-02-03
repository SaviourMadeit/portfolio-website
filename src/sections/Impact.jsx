import { Image, Target } from "lucide-react";

const Impact = ({
	isDark,
	impactActivities,
	setGalleryIndex,
	setExpandedGallery,
}) => {
	return (
		<section id="impact" className="relative py-32 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<div className="inline-flex items-center space-x-3 mb-4">
						<Target className="w-10 h-10 text-blue-400" />
						<h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Community Impact
						</h2>
					</div>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						Giving back through mentorship, volunteering, and
						community engagement
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{impactActivities.map((activity, index) => {
						const Icon = activity.icon;
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
									className={`absolute inset-0 bg-linear-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
								/>

								<div className="relative">
									<div
										className={`w-16 h-16 mb-6 rounded-xl bg-linear-to-br ${activity.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
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
										{activity.category}
									</h3>

									<ul className="space-y-3 mb-6">
										{activity.items.map((item, i) => (
											<li
												key={i}
												className={`flex items-start space-x-3 transition-colors ${
													isDark
														? "text-gray-300 hover:text-blue-400"
														: "text-gray-700 hover:text-blue-600"
												}`}
											>
												<span
													className={`w-2 h-2 rounded-full bg-linear-to-r ${activity.color} mt-2 group-hover:scale-150 transition-transform`}
												/>
												<span className="text-sm">
													{item}
												</span>
											</li>
										))}
									</ul>

									{/* Gallery Thumbnails */}
									{activity.gallery &&
										activity.gallery.length > 0 && (
											<div className="space-y-3 pt-4 border-t border-gray-400/20">
												<p
													className={`text-xs font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}
												>
													Photo Gallery
												</p>
												<div className="grid grid-cols-2 gap-2">
													{activity.gallery
														.slice(0, 2)
														.map((img, idx) => (
															<div
																key={idx}
																className="aspect-square rounded-lg overflow-hidden border border-gray-400/20 cursor-pointer hover:border-blue-400/50 transition-all hover:scale-105"
																onClick={() => {
																	setGalleryIndex(
																		idx,
																	);
																	setExpandedGallery(
																		{
																			gallery:
																				activity.gallery,
																			title: activity.category,
																		},
																	);
																}}
															>
																<img
																	src={img}
																	alt={`${activity.category} ${idx + 1}`}
																	className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
																/>
															</div>
														))}
												</div>
												<button
													onClick={() => {
														setGalleryIndex(0);
														setExpandedGallery({
															gallery:
																activity.gallery,
															title: activity.category,
														});
													}}
													className={`w-full mt-2 py-2 px-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
														isDark
															? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30"
															: "bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 border border-blue-500/30"
													}`}
												>
													<Image className="w-4 h-4" />
													<span>
														View Gallery (
														{
															activity.gallery
																.length
														}
														)
													</span>
												</button>
											</div>
										)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Impact;
