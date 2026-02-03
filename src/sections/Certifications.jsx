import { Award, ExternalLink } from "lucide-react";

const Certifications = ({ isDark, certifications }) => {
	return (
		<section className="relative py-32 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
					<div className="inline-flex items-center space-x-3 mb-4">
						<Award className="w-10 h-10 text-purple-400" />
						<h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Certifications
						</h2>
					</div>
					<p
						className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
					>
						Professional credentials and continuous learning
						achievements
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{certifications.map((cert, index) => {
						const Icon = cert.icon;
						return (
							<div
								key={cert.id}
								className={`group relative rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom ${
									isDark
										? "bg-slate-800/50 border-slate-700 hover:border-purple-400/50"
										: "bg-white/50 border-gray-300 hover:border-purple-500/50"
								}`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{/* Gradient Background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
								/>

								<div className="relative p-8">
									{/* Icon */}
									<div
										className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
									>
										<Icon className="w-8 h-8 text-white" />
									</div>

									{/* Certificate Title */}
									<h3
										className={`text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2 ${
											isDark
												? "text-white"
												: "text-gray-900"
										}`}
									>
										{cert.title}
									</h3>

									{/* Issuer and Category */}
									<div
										className={`flex items-center justify-between mb-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
									>
										<span className="font-semibold">
											{cert.issuer}
										</span>
										<span
											className={`px-3 py-1 rounded-full text-xs font-semibold ${
												isDark
													? "bg-purple-400/10 text-purple-400"
													: "bg-purple-500/10 text-purple-600"
											}`}
										>
											{cert.category}
										</span>
									</div>

									{/* Date */}
									<p
										className={`mb-4 text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}
									>
										Issued:{" "}
										<span className="font-semibold">
											{cert.date}
										</span>
									</p>

									{/* Credential ID */}
									<div
										className={`rounded-lg p-3 mb-6 ${isDark ? "bg-slate-700/30" : "bg-gray-100/50"}`}
									>
										<p
											className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}
										>
											Credential ID
										</p>
										<p
											className={`text-sm font-mono font-semibold ${isDark ? "text-gray-300" : "text-gray-800"}`}
										>
											{cert.credentialId}
										</p>
									</div>

									{/* Verify Button */}
									<a
										href={cert.credentialUrl}
										className={`w-full py-2 px-4 rounded-lg text-center font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
											isDark
												? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30"
												: "bg-purple-500/20 text-purple-600 hover:bg-purple-500/30 border border-purple-500/30"
										}`}
									>
										<ExternalLink className="w-4 h-4" />
										<span>View Credential</span>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Certifications;
