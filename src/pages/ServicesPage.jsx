import { Calendar, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import ServiceGrid from "../sections/ServiceGrid";
import { bixylLab, engineeringServices, securityElectricalServices } from "../data";

const ServicesPage = () => {
	const { isDark } = useOutletContext();

	return (
		<div className="pt-24">
			{/* Banner */}
			<section className="relative px-4 py-16">
				<div className="max-w-7xl mx-auto">
					<div
						className={`relative rounded-3xl border overflow-hidden ${
							isDark
								? "bg-slate-800/50 border-slate-700"
								: "bg-white/60 border-gray-200"
						}`}
					>
						<div className="grid lg:grid-cols-2">
							{/* Copy side */}
							<div className="relative z-10 p-10 md:p-14 flex flex-col justify-center">
								<div className="flex items-center gap-3 mb-6">
									<img
										src="/images/bixyl/logo.png"
										alt="BIXYL LAB IT Consult logo"
										className="w-12 h-12 rounded-lg object-contain"
									/>
									<span
										className={`text-sm font-semibold tracking-wide uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}
									>
										{bixylLab.name}
									</span>
								</div>

								<h1
									className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
								>
									Electrical, Security &amp; Embedded
									Engineering Services
								</h1>

								<p
									className={`text-lg mb-8 max-w-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
								>
									{bixylLab.tagline}
								</p>

								<div className="flex flex-wrap gap-4">
									<Link
										to="/contact"
										className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300"
									>
										<Calendar className="w-5 h-5" />
										<span>Book Now</span>
									</Link>
									<a
										href={bixylLab.phoneHref}
										className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 ${
											isDark
												? "bg-slate-700/50 border border-slate-600 text-gray-100 hover:bg-slate-600/50"
												: "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
										}`}
									>
										<Phone className="w-5 h-5" />
										<span>{bixylLab.phone}</span>
									</a>
								</div>
							</div>

							{/* Image side */}
							<div className="relative min-h-[320px] lg:min-h-full grid grid-cols-2 gap-1 p-1">
								<img
									src="/images/bixyl/cctv-cameras.jpg"
									alt="CCTV surveillance camera installation"
									className="w-full h-full object-cover rounded-xl"
								/>
								<img
									src="/images/bixyl/electrical-panel.jpg"
									alt="Electrical panel wiring and networking work"
									className="w-full h-full object-cover rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Embedded & firmware engineering services */}
			<section className="relative px-4 py-16">
				<ServiceGrid
					isDark={isDark}
					title="Embedded & Firmware Engineering"
					subtitle="Hardware, firmware, and IoT solutions for product-focused engineering"
					items={engineeringServices}
				/>
			</section>

			{/* Electrical & security services */}
			<section
				className={`relative px-4 py-16 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
			>
				<ServiceGrid
					isDark={isDark}
					title="Electrical & Security Systems"
					subtitle="On-site installation and maintenance for homes, offices, and event venues"
					items={securityElectricalServices}
				/>
			</section>

			{/* Contact + map */}
			<section className="relative px-4 py-16">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
					<div
						className={`rounded-2xl border p-10 flex flex-col justify-center ${
							isDark
								? "bg-slate-800/50 border-slate-700"
								: "bg-white/60 border-gray-200"
						}`}
					>
						<h2
							className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
						>
							Get In Touch
						</h2>
						<div className="space-y-4">
							<a
								href={bixylLab.phoneHref}
								className={`flex items-center gap-3 transition-colors ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}
							>
								<Phone className="w-5 h-5 text-blue-400" />
								<span>{bixylLab.phone}</span>
							</a>
							<a
								href={`mailto:${bixylLab.email}`}
								className={`flex items-center gap-3 transition-colors ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}
							>
								<Mail className="w-5 h-5 text-blue-400" />
								<span>{bixylLab.email}</span>
							</a>
							<a
								href={bixylLab.mapLink}
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center gap-3 transition-colors ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}
							>
								<MapPin className="w-5 h-5 text-blue-400" />
								<span>{bixylLab.address}</span>
								<ExternalLink className="w-4 h-4 opacity-60" />
							</a>
						</div>

						<Link
							to="/contact"
							className="mt-8 inline-block w-fit px-8 py-3 rounded-lg font-semibold bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
						>
							Send a Message
						</Link>
					</div>

					<div
						className={`rounded-2xl border overflow-hidden min-h-[320px] ${
							isDark ? "border-slate-700" : "border-gray-200"
						}`}
					>
						<iframe
							title="BIXYL LAB IT Consult location"
							src={bixylLab.mapEmbedSrc}
							width="100%"
							height="100%"
							style={{ border: 0, minHeight: "320px" }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ServicesPage;
