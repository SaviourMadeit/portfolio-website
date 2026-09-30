import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import { engineeringServices, securityElectricalServices, siteProfile } from "../data";

const ServicesPage = () => {
	const { isDark } = useOutletContext();
	const panel = isDark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white/80";

	return (
		<div className="pt-24 pb-20">
			<section className="px-4 py-16">
				<div className="mx-auto max-w-6xl rounded-3xl border overflow-hidden p-8 md:p-12 shadow-2xl shadow-blue-500/5">
					<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
						<div>
							<div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
								Services
							</div>
							<h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-linear-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text">
								Engineering support from concept to deployment.
							</h1>
							<p className={`mt-5 text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
								I help founders, teams, schools, and organizations turn ideas into practical products, reliable systems, and sustainable technical learning experiences.
							</p>
							<div className="mt-8 flex flex-wrap gap-4">
								<Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400">
									Book a consultation
									<ArrowRight className="h-4 w-4" />
								</Link>
								<a href={siteProfile.phoneHref} className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold ${isDark ? "border-slate-600 text-slate-100 hover:border-blue-400" : "border-slate-200 text-slate-800 hover:border-blue-500"}`}>
									<Phone className="h-4 w-4" />
									{siteProfile.phone}
								</a>
							</div>
						</div>

						<div className={`rounded-3xl border p-6 ${panel}`}>
							<h2 className={`mb-4 text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Quick contact</h2>
							<div className="space-y-3">
								<a href={`mailto:${siteProfile.email}`} className={`flex items-center gap-3 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
									<Mail className="h-5 w-5 text-blue-500" />
									{siteProfile.email}
								</a>
								<a href={siteProfile.locationLink} target="_blank" rel="noreferrer" className={`flex items-center gap-3 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
									<MapPin className="h-5 w-5 text-blue-500" />
									{siteProfile.location}
								</a>
								<div className={`flex items-center gap-3 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
									<CalendarDays className="h-5 w-5 text-blue-500" />
									Flexible project scheduling
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 py-8">
				<div className="mx-auto max-w-6xl">
					<div className="mb-10 text-center">
						<h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>Embedded & firmware engineering</h2>
						<p className={`mx-auto mt-4 max-w-2xl text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							Hardware, firmware, and product systems built for reliability, maintainability, and clear delivery.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{engineeringServices.map(({ title, description, highlights, icon: Icon, color }) => (
							<div key={title} className={`rounded-3xl border p-6 ${panel}`}>
								<div className={`mb-5 inline-flex rounded-2xl bg-linear-to-r ${color} p-3 text-white`}>
									<Icon className="h-6 w-6" />
								</div>
								<h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
								<p className={`mt-3 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
								<div className="mt-5 flex flex-wrap gap-2">
									{highlights.map((tag) => (
										<span key={tag} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">{tag}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className={`px-4 py-16 ${isDark ? "bg-slate-900/40" : "bg-slate-50"}`}>
				<div className="mx-auto max-w-6xl">
					<div className="mb-10 text-center">
						<h2 className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>Electrical & security systems</h2>
						<p className={`mx-auto mt-4 max-w-2xl text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							On-site and technical support for homes, offices, event spaces, and operational environments.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{securityElectricalServices.map(({ title, description, icon: Icon, color }) => (
							<div key={title} className={`rounded-3xl border p-6 ${panel}`}>
								<div className={`mb-5 inline-flex rounded-2xl bg-linear-to-r ${color} p-3 text-white`}>
									<Icon className="h-6 w-6" />
								</div>
								<h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
								<p className={`mt-3 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ServicesPage;
